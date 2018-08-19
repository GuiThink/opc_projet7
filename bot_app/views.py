from flask import Flask, render_template, request, jsonify
from bot_app.models.parser import parse
from bot_app.models.api_google import get_map

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('pages/index.html')


@app.errorhandler(404)
def page_not_found(error):
    return render_template('errors/404.html'), 404


@app.route('/process', methods=['POST'])
def process():
    question = request.form['question']
    location = str(parse(question))
    google_url = str(get_map(location))

    return jsonify({'location': location, 'google_url': google_url})


# if __name__ == "__main__":
#     app.run()





