from flask import Flask, redirect, url_for, render_template, request
from flask_mail import Mail, Message
import os

# setting up flask
app = Flask(__name__)

# setting up email sender
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 465
app.config["MAIL_USE_TLS"] = False
app.config["MAIL_USE_SSL"] = True
# email used for the destination for the contact page
app.config["MAIL_USERNAME"] = "golfclubsdirectspainorders@gmail.com"
#get the password from the operating system
app.config["MAIL_PASSWORD"] = os.getenv("PASSWORD")
mail = Mail(app)

# different types of url directories
# home page
@app.route("/")
@app.route("/home")
def splash():
    #render_template is terminology in flask to send the user a file to the user. this means "index.html" which I created will be sent.
    return render_template("index.html")

# 404 error page
@app.route("/<name>")
def error404(name):
    # it will return what the user entered in the url
    return f"<h1>404 not found</h1><br>sorry! {name} could not be found."

#page for contact details
@app.route("/contact us", methods = ["GET, POST"])
def contactUs():
    if request.method == "POST":
        msg = Message("New question", sender="noreply@demo.com", recipients=["golfclubsdirectspainorders@gmail.com"])
        msg.body = Message
        mail.send(msg)
        return "sent email"

    return render_template("contact.html")

@app.route("/about us")
def aboutUs():
    return render_template("aboutUs.html")

if __name__ == "__main__":
    app.run(debug = True)
