from flask import Flask, render_template, request, jsonify
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


@app.route('/form')
def sign_up():
    return render_template('pages/form.html')


@app.route('/process', methods=['POST'])
def process():

    email = request.form['email']
    name = request.form['name']

    if name and email:
        newName = name[::-1]
        return jsonify({'name': newName})

    return jsonify({'error': 'Missing data!'})




# if __name__ == "__main__":
#     app.run()

