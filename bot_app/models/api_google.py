#! /usr/bin/env python3
# coding: utf-8


def get_map(params):

    google_map_api_url = 'https://www.google.com/maps/embed/v1/place?key='
    key = 'AIzaSyBygWeZqGieaZgint9ZiNar3Va_3vCZZsA'
    q = "&q="
    url = google_map_api_url + key + q + params
    return str(url)


params = "Adresse Openclassroorms"
res = get_map(params)
print(res)

