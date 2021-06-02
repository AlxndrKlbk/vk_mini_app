from flask_restx import Namespace, Resource
from dbcontext import DbContext
from datetime import datetime
from hashlib import md5
import datetime
import calendar
import json

salt = 'hu1p1zd4'

api = Namespace('tokens', description='Работка с токенами')

@api.route("/<token>")
@api.response(400, 'Token not found or expired')
class Tokens(Resource):

    def get(self, token: str):
        cursor = DbContext().get_tokens_collection().find({"token": token, "date_expired": {"$gt": str(datetime.datetime.now())}}, {})
        for row in cursor:
            return True
        return False

@api.route('/')
class TokenGenerator(Resource):

    @staticmethod
    def add_months(sourcedate, months):
        month = sourcedate.month - 1 + months
        year = sourcedate.year + month // 12
        month = month % 12 + 1
        day = min(sourcedate.day, calendar.monthrange(year, month)[1])
        hours = sourcedate.hour
        minutes = sourcedate.minute
        second = sourcedate.second
        ms = sourcedate.microsecond
        return datetime.datetime(year, month, day, hours, minutes, second, ms)

    def get(self):
        date_expired = TokenGenerator.add_months(datetime.datetime.now(), 1)
        token = md5((str(date_expired) + salt).encode()).hexdigest()[:6]
        result =  DbContext().get_tokens_collection().insert_one({
            "token": token
            , "date_expired": str(date_expired)})
            
        return token
