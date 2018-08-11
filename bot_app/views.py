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


@app.route('/user-question', methods=['POST'])
def process():
    question = request.form['question']
    user = 'Rejeton'
    img = '/static/img/anonym_img.png'
    time = '17:15'

    keyword = 'Paris'
    response = 'Paris est situé en France, en Île de France.'

    if keyword in question:
        return jsonify({'question': question, 'user': user, 'img': img, 'time': time, 'response': response})

    return jsonify({'error': 'Missing data!'})


# if __name__ == "__main__":
#     app.run()
