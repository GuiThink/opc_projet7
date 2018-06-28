#! /usr/bin/python3.6
# coding: utf-8

from flask import Flask, render_template
from flask_bootstrap import Bootstrap


app = Flask(__name__)
Bootstrap(app)


@app.route('/')
def home():
    return render_template('pages/index.html')


@app.route('/contact')
def contact():
    return render_template('pages/contact.html')


@app.errorhandler(404)
def page_not_found(error):
    return render_template('errors/404.html'), 404


if __name__ == "__main__":
    app.run(debug=True)

