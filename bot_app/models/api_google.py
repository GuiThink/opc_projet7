#! /usr/bin/env python3
# coding: utf-8

import requests

# from bs4 import BeautifulSoup as BS


def get_map(params):

    google_maps_url = 'https://www.google.com/maps/embed/v1/place?'
    key = '&key=AIzaSyBygWeZqGieaZgint9ZiNar3Va_3vCZZsA'
    q = '&q='
    url = google_maps_url + key + q + params
    return str(url)


def get_place_id(place):
    google_place_url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input='
    q = '&inputtype=textquery&fields=formatted_address,name,place_id'
    key = '&key=AIzaSyBygWeZqGieaZgint9ZiNar3Va_3vCZZsA'
    url = google_place_url + str(place) + q + key

    message = requests.get(url).json()
    place_id = message['candidates'][0]['place_id']

    return place_id


def get_address(place_id):
    google_place_details_url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid='
    q = '&fields=name,adr_address' #address_component
    key = '&key=AIzaSyBygWeZqGieaZgint9ZiNar3Va_3vCZZsA'
    url = google_place_details_url + str(place_id) + q + key

    message = requests.get(url).json()

    place_name = message['result']['name']
    street_address = message['result']['adr_address']

    print(place_name, street_address)

    return (place_name, street_address)


p_id = get_place_id('zoo beauval')
print(p_id)
get_address(p_id)


#ZooParc de Beauval
#<span class="street-address">Avenue du Blanc</span>, <span class="postal-code">41110</span> <span class="locality">Saint-Aignan-sur-Cher</span>, <span class="country-name">France</span>