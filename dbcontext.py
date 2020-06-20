import pymongo

class DbContext():


    def __init__(self) -> None:
        self._conn = pymongo.MongoClient(
   "mongodb://localhost:27017")
        self._db = self._conn['presentex']

    def get_tokens_collection(self):
        return self._db['tokens']