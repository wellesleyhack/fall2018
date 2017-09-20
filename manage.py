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
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.mime.application import MIMEApplication
from emails.template import JinjaTemplate as T



app = Flask(__name__)
app.config.update(dict({
"MAIL_SERVER" : 'smtp.gmail.com',
"MAIL_USERNAME" : 'hello@wellesleyhacks.org',
"MAIL_PASSWORD" :'whackthrowshackathons2017',
"MAIL_USE_TLS": False,
"MAIL_USE_SSL" : True,
"MAIL_PORT": 465}))


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
"""

@app.route("/hey", methods=["GET"])
def hey():
    #print(os.environ.get('MAIL_USERNAME_WHACK'))
    #print(os.environ.get('MAIL_PASSWORD_WHACK_FINAL'))
    mail = Mail(app)
    msg = Message("Thank you for applying to WHACK",
                  sender="hello@wellesleyhacks.org",
                  recipients=["ypruksac@wellesley.edu"])
    msg.html = "<img src='cid:confirmation_email_header.png'/></html> <div> Hey Yada,</div <div> Thank you for applying to WHACK Fall 2017! We are so excited that youre interested in joining us for WHACK, and we cant wait to read your application. You'll hear back from us with decisions in October. </div> <div> Until then, please feel free to contact us at hello@wellesleyhacks.org if you have any comments or questions! </div> <div>Cheers, </div> <div> The WHACK Team </div> wellesleyhacks.org"
    with app.open_resource("confirmation_email_header.png") as fp:
        msg.attach("confirmation_email_header.png", "image/png", fp.read())
    mail.send(msg)
    """# Create message container.
    m = Message(html=T("<html><p>Build passed: {{ project_name }} <img src=˓→'confirmation_email_header.png'> ..."),
    subject=T("Passed: {{ project_name }}#{{ build_id }}"),
    mail_from=("CI", "yadacmis@gmail.com"))
    m.attach(filename="confirmation_email_header.png", content_disposition="inline", data=open("confirmation_email_header.png", "rb"))
    response = m.send(render={"project_name": "user/project1", "build_id": 121},
                      to='ypruksac@wellesley.edu',
                      smtp={'host':'localhost', 'port': 465, 'ssl': True, 'user': 'yadacmis@gmail.com', 'password': 'th1nk428H'})
    print(response)

    """

@app.route('/create', methods=['POST'])
def create():
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

    return jsonify(name=file_name, response=response)


if __name__ == '__main__':
    app.run(debug=True)
