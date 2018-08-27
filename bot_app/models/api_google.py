#! /usr/bin/env python3
# coding: utf-8

import requests


class ApiGoogle(object):
    """
    This class retrieves :
    1. The Google maps iframe URL so it can be displayed on front-end Client.
    2. The Place id, so it can then be used to get the Place address, which then can be :
        a.  Displayed on front-end Client.
        b.  Used as a query parameter for ApiWiki class to get historical details about
            this place.
    """

    API_KEY = '&key=AIzaSyBygWeZqGieaZgint9ZiNar3Va_3vCZZsA'
    MAPS_EMBED_URL = 'https://www.google.com/maps/embed/v1/place?'
    MAPS_PLACE_URL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input='
    MAPS_PLACE_DETAILS_URL = 'https://maps.googleapis.com/maps/api/place/details/json?placeid='

    def __init__(self, place: str):
        self.place = place
        self.iframe_url = self.get_maps_embed_url(self.place)
        self.place_id = self.get_place_id(self.place)
        self.place_address = self.get_place_address(self.place_id)

    def get_maps_embed_url(self, place: str) -> str:
        """
        Google API call to retrieve the iframe url of the map that can
        then be used for Client-side display.
        """
        q = '&q='
        iframe_url = self.MAPS_EMBED_URL + self.API_KEY + q + place

        return str(iframe_url)

    def get_place_id(self, place: str) -> str:
        """
        Google API call to retrieve the place_id than is then used to find
        the place_address.
        """
        q = '&inputtype=textquery&fields=formatted_address,name,place_id'
        url = self.MAPS_PLACE_URL + str(place) + q + self.API_KEY
        message = requests.get(url).json()
        place_id = message['candidates'][0]['place_id']

        return str(place_id)

    def get_place_address(self, place_id: str) -> str:
        """
        Google API call to retrieve the place_address than can be displayed
        on Client-side and used in ApiWiki class to retrieve historical
        facts about this address/place.
        """
        q = '&fields=name,address_component'
        url = self.MAPS_PLACE_DETAILS_URL + str(place_id) + q + self.API_KEY
        message = requests.get(url).json()

        name = message['result']['name']
        route = message['result']['address_components'][0]['long_name']
        postal_code = message['result']['address_components'][5]['long_name']
        locality = message['result']['address_components'][1]['long_name']
        country = message['result']['address_components'][4]['long_name']

        complete_address = name + ', ' + route + ', ' + postal_code + ' ' + locality + ', ' + country
        return str(complete_address)


# FOR TESTING PURPOSE :
# place = ApiGoogle('Zoo Beauval')
# print(place.iframe_url)
# print(place.place_id)
# print(place.place_address)
