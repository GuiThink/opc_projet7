from flask import Flask, render_template, request
import time


app = Flask(__name__)


@app.route('/')
def home():
    return render_template('pages/index.html')


@app.errorhandler(404)
def page_not_found(error):
    return render_template('errors/404.html'), 404


@app.route("/getTime")
def get_time():
    print("server time : ", time.strftime('%d %m %Y %H:%M:%S'))
    return time.strftime('%d %m %Y %H:%M:%S')


@app.route('/test', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        return "Vous avez envoyé : {msg}".format(msg=request.form['msg'])
    return '<form action="" method="post"><input type="text" name="msg" /><input type="submit" value="Envoyer" /></form>'


# if __name__ == "__main__":
#     app.run()

