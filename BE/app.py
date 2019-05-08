import json
from bson.json_util import dumps, loads
from flask import Flask, request, redirect, url_for
from services.data_services import DataServices

# connection
dataServices = DataServices()
employees = dataServices.employees()

# init app
app = Flask(__name__)


@app.route("/")
def home():
  x = employees.find()
  x_dump = dumps(x)
  x_load= loads(x_dump)
  print x_load[0]['name']
  return x_dump


@app.route("/find")
def find():
  name = request.args.get('name')
  print name
  x = employees.find({"name": name})

  return dumps(x)


@app.route("/add", methods=['POST', 'GET', 'OPTIONS'])
def add():
  params_dicts = {}
  if request.data:
    params_dicts = json.loads(request.data)
  else:
    params_dicts = request.form
  print params_dicts.get('name')
  if params_dicts:
    name = params_dicts.get('name')
    address = params_dicts.get('address')
    employees.insert_one({"name": name, "address": address})
  return redirect(url_for('home'))


@app.route("/update", methods=['POST', 'GET', 'OPTIONS'])
def update():
  params_dicts = {}
  if request.data:
    params_dicts = json.loads(request.data)
  else:
    params_dicts = request.form
  print params_dicts
  if params_dicts:
    name = params_dicts.get('name')
    address = params_dicts.get('address')

  myquery = {"name": name}
  newvalues = {"$set": {"address": address}}

  employees.update_many(myquery, newvalues)
  return redirect(url_for('home'))


if __name__ == "__main__":
  app.run(debug=True)
