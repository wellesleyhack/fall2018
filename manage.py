import json
import time
import boto
import boto.dynamodb
import boto3
from boto.dynamodb2.table import Table
from boto.s3.connection import S3Connection
from boto.s3.key import Key
from flask import Flask,render_template, request, jsonify, app, safe_join, send_from_directory
import json
import os
app = Flask(__name__)

dynamodb = boto3.resource('dynamodb',region_name='us-west-2')

@app.route('/<any(css, img, js, sound):folder>/<path:filename>')
def toplevel_static(folder, filename):
    filename = safe_join(folder, filename)
    cache_timeout = app.get_send_file_max_age(filename)
    return send_from_directory(app.static_folder, filename,
                               cache_timeout=cache_timeout)

# @app.route('/js/<path:filename>')
# def serve_static(filename):
#     root_dir = os.path.dirname(os.getcwd())
#     return send_from_directory(os.path.join(root_dir, 'static', 'js'), filename)
@app.route('/css')
@app.route('/schools.txt')
def static_from_root():
    return send_from_directory(app.static_folder, request.path[1:])

@app.route('/registration', methods=["GET"])
def static_page():
    return render_template('registration.html')

"""
The schema of the follwoing endpoint is this:
Input:
    files = { 'resume': {resume_file} }
    form  = {   'name': string,
                'email':string,
                'school':string,
                'major': string,
                'graduation_year': string,
                'ethnicity' : string,
                'gender_identity':string,
                'sexual_orientation': string,
                'resume': file,
                'links':string,
                'first_hackathon': bool,
                'special_accomodations': string,
                'other_notes': string
                }
"""

@app.route('/create', methods=['POST'])
def create():
    data_file = request.files.get('resume')
    data_values = request.form
    file_name = data_file.filename
    conn = S3Connection(os.environ["AWS_ACCESS_KEY_ID"], os.environ["AWS_SECRET_ACCESS_KEY"])
    bucket = conn.get_bucket("whackfall2017")
    k = Key(bucket)
    k.key = file_name
    k.set_contents_from_string(data_file.read())
    table = dynamodb.Table('WHACK_registered_userss')
    optional = ["first_hackathon", "links", "special_accomodations", "other_notes"]
    new_items = {
          'name': data_values["first_name"] +" " + data_values["last_name"],
          'email':data_values["email"],
          'school':data_values["school"],
          'major': data_values["major"],
          'graduation_year': data_values["graduation_year"],
          'ethnicity' : data_values["ethnicity"],
          'gender_identity': data_values["gender_identity"],
          'sexual_orientation': data_values["sexual_orientation"],
          'resume': data_values["file_name"],
      }
    for i in optional:
        if len(data_values[i]) > 0:
            new_items[i] = data_values[i]

    response = table.put_item(
      Item=new_items
    )
    return jsonify(name=file_name, response=response)


if __name__ == '__main__':
    app.run(debug=True)
