from flask import Flask, render_template, request, jsonify
from bot_app.models.parser import Parser
from bot_app.models.api_google import ApiGoogle
from bot_app.models.api_wikimedia import ApiWiki

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
    location = Parser(question)
    place = ApiGoogle(location.parsed)

    #wiki_facts = Apiwiki(place.place_address)

    wikimedia_message = 'message...'

    return jsonify({'location': location.parsed, 'place_iframe_url': place.iframe_url, 'place_address': place.place_address, 'wikimedia_message': wiki_facts})


# if __name__ == "__main__":
#     app.run()





