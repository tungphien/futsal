import json

from flask import Flask, request, redirect, url_for

from services.data_services import DataServices

# connection
dataServices = DataServices()

# init app
app = Flask(__name__)


@app.route("/")
def home():
  return dataServices.findAll('employees')


@app.route("/find")
def find():
  name = request.args.get('name')
  print name
  return dataServices.findBy('employees', {"name": name})


@app.route("/add", methods=['POST', 'GET', 'OPTIONS'])
def add():
  params_dicts = {}
  if request.data:
    params_dicts = json.loads(request.data)
  else:
    params_dicts = request.form
  print params_dicts.get('name')
  if params_dicts:
    dataServices.add('employees', {"name": params_dicts.get('name'), "address": params_dicts.get('address')})
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
    myquery = {"name": params_dicts.get('name')}
    newvalues = {"$set": {"address": params_dicts.get('address')}}
    dataServices.update('employees', myquery, newvalues)
  return redirect(url_for('home'))


@app.route("/delete", methods=['POST', 'GET', 'OPTIONS'])
def delete():
  name = request.args.get('name')
  print name
  dataServices.delete('employees', {'name': name})
  return redirect(url_for('home'))


if __name__ == "__main__":
  app.run(debug=True)
