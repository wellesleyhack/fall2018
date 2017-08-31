import json
import time
from boto.dynamodb2.table import Table
from flask import Flask,render_template

conn_dynamodb = Table('WHACK_registered_userss')
app = Flask(__name__)


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
    conn = boto.s3.connection.S3Connection(aws_access_key_id, aws_secret_access_key)
    bucket = conn.get_bucket(settings.BUCKET_NAME)
    k = Key(bucket)
    k.key = file_name
    k.set_contents_from_string(data_file.read())
    response = conn_dynamodb.put_item(
       Item={
            'name': data_values.name,
            'email':data_values.email,
            'school':data_values.school,
            'major': data_values.major,
            'graduation_year': data_values.email,
            'ethnicity' : data_values.ethnicity,
            'gender_identity': data_values.gender_identity,
            'sexual_orientation': data_values.sexual_orientation,
            'resume': data_values.file_name,
            'links': data_values.links,
            'first_hackathon': data_values.first_hackathon,
            'special_accomodations': data_values.special_accomodations,
            'other_notes': data_values.other_notes
        }
    )
    return jsonify(name=file_name, response=response)


if __name__ == '__main__':
    app.run(debug=True)
