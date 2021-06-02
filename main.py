from flask import Flask, request
from flask_cors import CORS
from flask_restx import Api, Resource, fields
from summarizer import Summarizer
import json

from token_namespace import api as ns_token
# Создаем объект сервер
app = Flask(__name__)
CORS(app)

api = Api(
    app,
    description='Добро пожаловать на мою апишечку'
)

api.add_namespace(ns_token)

# надо
app.config['DEBUG'] = True

summarize_api_model = api.model('Summarize', {
    'text': fields.String(required=True, description='Text for summarization'),
    'ratio': fields.Float(required=False, description='Summarization coefficent'),
    'word_count': fields.Integer(required=False, description='Summarize to n words')
})

summarize_api_models = api.model("SummarizeList", {
    "params": fields.List(fields.Nested(summarize_api_model))
})

ns = api.namespace('process_text', description='Text processing operations')

@ns.route('/')
class ProcessText(Resource):
    @ns.expect(summarize_api_models)
    def post(self):

        if request.headers['Content-Type'] != 'application/json':
            return "Только json-запросы"

        print(request.json)

        short_texts = [Summarizer.summarize_in_str(**text) for text in request.json['params']]
        keywords = [Summarizer.get_main_words(text["text"]) for text in request.json['params']]

        result = [{"result_text" : short_texts[i], "keywords" : keywords[i]} for i in range(len(keywords))]
        # Какой-то джисон ответ
        js = json.dumps(result)
        
        #resp = Response(js, status=200, mimetype='application/json')

        return result

if __name__ == '__main__':
    #api.init_app(app)
    app.run(debug=True)