#! /usr/bin/env python3
# coding: utf-8


def get_wiki(params):

    google_map_api_url = 'https://fr.wikipedia.org/w/api.php?'
    q = "action=query"
    format = "&format=json"
    url = google_map_api_url + q + params + format
    return str(url)
