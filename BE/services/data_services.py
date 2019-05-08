import pymongo

class DataServices():
  my_client = pymongo.MongoClient("mongodb://localhost:27017")
  my_db = my_client['demo']

  def employees(self):
    return self.my_db['employees']
