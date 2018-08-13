from flask import Flask, render_template, request, jsonify
import time

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('pages/index.html')


@app.errorhandler(404)
def page_not_found(error):
    return render_template('errors/404.html'), 404


@app.route('/user-question', methods=['POST'])
def process():
    quest = request.form['question']
    user = 'Rejeton'
    img = '/static/img/anonym_img.png'
    posttime = time.strftime('%H:%M:%S')

    keyword = 'Paris'
    response = 'Paris est situé en France, en Île de France.'

    if keyword.lower() in quest.lower():
        return jsonify({'question': quest, 'user': user, 'img': img, 'time': posttime, 'response': response})

    return jsonify({'error': 'Missing data!'})


@app.route('/get-map', methods=['GET'])
def get_map(place):

    google_map_api_url = 'https://www.google.com/maps/embed/v1/place?q='
    key = 'AIzaSyBVNw4X-qj0cJ0fJghPTPDh2AfjNFBBcGM'
    call_url = google_map_api_url + place + '&key=' + key

    return call_url



# if __name__ == "__main__":
#     app.run()


# <iframe id="google_map" width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=paris&key=AIzaSyBVNw4X-qj0cJ0fJghPTPDh2AfjNFBBcGM" allowfullscreen></iframe>


