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
import random
from flask_mail import Mail, Message
import time

app = Flask(__name__)
app.config.update(dict({
"MAIL_SERVER" : 'smtp.gmail.com',
"MAIL_USERNAME" : 'hello@wellesleyhacks.org',
"MAIL_PASSWORD" : "psprxsgjzobnnwbm",
"MAIL_USE_TLS": False,
"MAIL_USE_SSL" : True,
"MAIL_PORT": 465}))


dynamodb = boto3.resource('dynamodb',region_name='us-west-2')

def send_email(name, email):
    mail = Mail(app)
    msg = Message("Thank you for applying to WHACK!",
                  sender="hello@wellesleyhacks.org",
                  recipients=[email])
    msg.html = "<img src='cid:confirmation_email_header.png'/></html> <div> Hey "+ name +", </div><br></br> <div> Thank you for applying to WHACK Fall 2017! We are so excited that you're interested in joining us for WHACK, and we can't wait to read your application. You'll hear back from us with decisions in October. </div> <br></brs><div> Until then, please feel free to contact us at hello@wellesleyhacks.org if you have any comments or questions! </div><br></br> <div>Cheers, </div> <div> The WHACK Team </div> wellesleyhacks.org"
    with app.open_resource("confirmation_email_header.png") as fp:
        msg.attach("confirmation_email_header.png", "image/png", fp.read())
    mail.send(msg)

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


@app.route('/submit_page', methods=["GET"])
def submit_page():
    return render_template('submit_page.html')

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
                'goals': string,
                'preferred_teammates': string
                }

    This uploads to S3 and sends a confirmation email
"""

@app.route('/hey', methods=['get'])
def hey():
    send_email("Yada", "ypruksac@wellesley.edu")
@app.route('/create', methods=['POST'])
def create():
    start = time.time()
    data_file = request.files.get('resume')
    data_values = request.form
    file_name = data_file.filename
    conn = S3Connection(os.environ["AWS_ACCESS_KEY_ID"], os.environ["AWS_SECRET_ACCESS_KEY"])
    bucket = conn.get_bucket("whackfall2017")
    k = Key(bucket)
    new_hash = random.getrandbits(64)
    key = data_values["file_name"][:-4]
    key += str(new_hash) +".pdf"
    k.key = key
    k.set_contents_from_string(data_file.read())
    end_1 = time.time()
    table = dynamodb.Table('WHACK_registered_userss')
    optional = ["first_hackathon", "links", "special_accomodations", "other_notes", "goals", "teammates"]
    new_items = {
          'name': data_values["first_name"] +" " + data_values["last_name"],
          'email': data_values["email"],
          'school': data_values["school"],
          'major': data_values["major"],
          'graduation_year': data_values["graduation_year"],
          'ethnicity': data_values["ethnicity"],
          'gender_identity': data_values["gender_identity"],
          'sexual_orientation': data_values["sexual_orientation"],
          'resume_id': key,
      }
    for i in optional:
        if len(data_values[i]) > 0:
            new_items[i] = data_values[i]

    response = table.put_item(
      Item=new_items
    )
    end_2 = time.time()
    send_email(data_values["first_name"], data_values["email"])
    end_3 = time.time()
    print("sending email took ")
    print(end_3 - end_2)
    print("putitng into AWS S3")
    print(end_2 - end_1)
    print("putting into DynamoDB")
    print(start - end_1)
    return jsonify(name=file_name, response=response)


if __name__ == '__main__':
    app.run(debug=True)
