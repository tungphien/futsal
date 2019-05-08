import pymongo
from bson.json_util import dumps


class DataServices():
  my_client = pymongo.MongoClient("mongodb://localhost:27017")
  my_db = my_client['futsal']

  def collections(self, collection):
    return self.my_db[collection]

  # common method
  def findAll(self, collection):
    datas = self.collections(collection).find()
    return dumps(datas)

  def findOne(self, collection):
    datas = self.collections(collection).find_one()
    return dumps(datas)

  def findBy(self, collection, query):
    datas = self.collections(collection).find(query)
    return dumps(datas)

  def add(self, collection, dataDic):
    self.collections(collection).insert_one(dataDic)

  def update(self, collection, query, newvalues):
    self.collections(collection).update_many(query, newvalues)

  def delete(self, collection, query):
    self.collections(collection).delete_one(query)
