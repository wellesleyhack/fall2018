#for gmail or google apps
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'yadacmis@gmail.com'
EMAIL_HOST_PASSWORD = 'th1nk428H'
EMAIL_PORT = 1025
ACCOUNT_EMAIL_VERIFICATION = 'none'
# administrator list
ADMINS = ['yadacmis@gmail.com']

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
