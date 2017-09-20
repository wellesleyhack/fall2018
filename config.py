#for gmail or google apps
MAIL_SERVER = 'smtp.gmail.com'
MAIL_USERNAME = 'hello@wellesleyhacks.org'
MAIL_PASSWORD = 'whackthrowshackathons'
MAIL_USE_TLS = False
MAIL_USE_SSL = True
MAIL_PORT = 465
# administrator list
ADMINS = ['hello@wellesleyhacks.org']

""""
Try this method for authenticating emails:
# Try to send a mail using

from flask import Flask
from flask.ext.mail import Mail
from flask.ext.mail import Message


app = Flask(__name__)


app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = "your gmail username"
app.config['MAIL_PASSWORD'] = "Your app spesfic password"
app.config['MAIL_DEFAULT_SENDER'] = 'Default sender name'

mail = Mail(app)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/send')
def send_mail():
    msg = Message("Hello",
                  sender="test@test.com",
                  recipients=["test@test.com"])
    mail.send(msg)
    return ""

if __name__ == '__main__':
    app.run(debug=True)
    https://stackoverflow.com/questions/34926570/flask-securitys-flask-mail-registration-receives-smtplib-smtpauthenticationerro
    """
