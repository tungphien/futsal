import datetime
import json
from xmlrpclib import DateTime

from bson import ObjectId
from flask import Flask, request, redirect, url_for
from flask_cors import cross_origin

from services.data_services import DataServices

# connection
dataServices = DataServices()

# init app
app = Flask(__name__)

@app.route("/")
@cross_origin()
def home():
    dataServices.findAll('team')
    return dataServices.findAll('stadium')


@app.route("/find")
@cross_origin()
def find():
    name = request.args.get('name')
    print name
    return dataServices.findBy('employees', {"name": name})


@app.route("/add", methods=['POST', 'GET', 'OPTIONS'])
@cross_origin()
def add():
    params_dicts = {}
    if request.data:
        params_dicts = json.loads(request.data)
    else:
        params_dicts = request.form
    print params_dicts
    if params_dicts:
        params_dicts['createDate'] = datetime.datetime.now()
        params_dicts['updateDate'] = datetime.datetime.now()
        dataServices.add('stadium', params_dicts)
        # return json.dumps({'msg': 'Successful', 'data': json.dumps(params_dicts)})
    return json.dumps({'msg':'Successful'})

@app.route("/update", methods=['POST', 'GET', 'OPTIONS'])
@cross_origin()
def update():
    params_dicts = {}
    if request.data:
        params_dicts = json.loads(request.data)
    else:
        params_dicts = request.form
    print params_dicts
    if params_dicts:
        params_dicts['updateDate'] = datetime.datetime.now()
        id = params_dicts.get('id')
        myquery = {'_id': ObjectId(id)}
        newvalues = {"$set": params_dicts}
        dataServices.update('stadium', myquery, newvalues)
    return redirect(url_for('home'))


@app.route("/delete", methods=['POST', 'GET', 'OPTIONS'])
@cross_origin()
def delete():
    params_dicts = {}
    if request.data:
        params_dicts = json.loads(request.data)
    else:
        params_dicts = request.form
    id = params_dicts.get('id')
    dataServices.delete('stadium', {'_id': ObjectId(id)})
    return json.dumps({'msg':'Successful', 'id':id})

if __name__ == "__main__":
    app.run(debug=True)
