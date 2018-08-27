#! /usr/bin/env python3
# coding: utf-8

import requests


class ApiWiki(object):
    """

    """

    FR_WIKI_URL = 'https://fr.wikipedia.org/w/api.php?action=query'
    FORMAT = '&format=json&list=search&utf8=1'

    def __init__(self, place_address: str):
        self.place_address = place_address
        self.wiki_facts = self.get_wiki_facts(self.place_address)

    def get_wiki_facts(self, place_address: str) -> str:
        q = '&srsearch='
        url = self.FR_WIKI_URL + self.FORMAT + q + place_address
        message = requests.get(url).json()

        result = message['query']['search'][0]
        page_id = message['query']['search'][0]['pageid']
        snippet = message['query']['search'][0]['snippet']

        print(url)
        return str(snippet)


# FOR TESTING PURPOSE :
fact = ApiWiki('zoo beauval')
print(fact.wiki_facts)


#https://fr.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=zoo beauval

{'batchcomplete': '', 'continue': {'sroffset': 10, 'continue': '-||'}, 'query': {'searchinfo': {'totalhits': 66}, 'search': [{'ns': 0, 'title': 'ZooParc de Beauval', 'pageid': 357081, 'size': 68796, 'wordcount': 7033, 'snippet': 'autre article.        Le ZooParc de <span class="searchmatch">Beauval</span>, plus couramment appelé le <span class="searchmatch">zoo</span> de <span class="searchmatch">Beauval</span> ou, plus simplement, <span class="searchmatch">Beauval</span>, est un parc zoologique français situé', 'timestamp': '2018-08-24T16:55:47Z'}, {'ns': 0, 'title': 'Zoo de La Palmyre', 'pageid': 481209, 'size': 25537, 'wordcount': 2926, 'snippet': 'Le <span class="searchmatch">zoo</span> de La Palmyre est un parc zoologique français situé sur la côte atlantique de la Nouvelle-Aquitaine, en Charente-Maritime, dans la presqu\'île d\'Arvert', 'timestamp': '2018-08-27T21:09:46Z'}, {'ns': 0, 'title': 'Tigre blanc', 'pageid': 107272, 'size': 25220, 'wordcount': 3333, 'snippet': '?  Le premier parc à en présenter en Europe fut le <span class="searchmatch">zoo</span> de Bristol en 1963. Le ZooParc de <span class="searchmatch">Beauval</span>, en France, en présente depuis 1991, date de l\'importation', 'timestamp': '2018-08-14T15:10:57Z'}, {'ns': 0, 'title': 'Yuan Zi et Huan Huan', 'pageid': 6004554, 'size': 8210, 'wordcount': 968, 'snippet': '<span class="searchmatch">Beauval</span>-Huan-Huan-est-en-age-d-avoir-un-bebe-1575612  ↑ Vincent Mongaillard, «\xa0Huan Huan, la femelle panda du <span class="searchmatch">Zoo</span> de <span class="searchmatch">Beauval</span>, est bien enceinte\xa0', 'timestamp': '2018-05-29T17:25:11Z'}, {'ns': 0, 'title': 'Lions blancs en France', 'pageid': 10155742, 'size': 17188, 'wordcount': 2360, 'snippet': 'soit un total d\'environ cinquante individus.     En avril 1999, le <span class="searchmatch">zoo</span> de <span class="searchmatch">Beauval</span> dans le Loir-et-Cher, fut le premier en France et le deuxième en Europe', 'timestamp': '2018-05-06T19:13:44Z'}, {'ns': 0, 'title': 'Panda géant', 'pageid': 44927, 'size': 30604, 'wordcount': 3915, 'snippet': 'pandas géants, Yuan Zi et Huan Huan, ont été accueillis au ZooParc de <span class="searchmatch">Beauval</span>, en Loir-et-Cher (France), ils ont eu un petit Yuan Meng («\xa0un souhait', 'timestamp': '2018-08-08T15:24:47Z'}, {'ns': 0, 'title': 'Parc zoologique de Jurques', 'pageid': 2039289, 'size': 7018, 'wordcount': 686, 'snippet': 'dans le monde. En France, plusieurs autres <span class="searchmatch">zoos</span> présentent des lions blancs\xa0: le parc zoologique de <span class="searchmatch">Beauval</span> (Loir-et-Cher), le parc zoologique de la Flèche', 'timestamp': '2018-07-29T07:33:50Z'}, {'ns': 0, 'title': 'Parc zoologique de Paris', 'pageid': 104599, 'size': 41919, 'wordcount': 4562, 'snippet': 'ce qui correspond à la moyenne haute des <span class="searchmatch">zoos</span> européens (31\xa0€ au <span class="searchmatch">zoo</span> de Londres, 26\xa0€ au ZooParc de <span class="searchmatch">Beauval</span>), et le forfait annuel coûte 40\xa0€ pour les', 'timestamp': '2018-08-01T08:32:29Z'}, {'ns': 0, 'title': 'Parc zoologique', 'pageid': 114061, 'size': 44611, 'wordcount': 5490, 'snippet': 'les articles homonymes, voir <span class="searchmatch">Zoo</span>.          Un parc zoologique, aussi appelé jardin zoologique, ou plus communément <span class="searchmatch">zoo</span>, est un espace où sont réunies', 'timestamp': '2018-07-27T23:03:08Z'}, {'ns': 0, 'title': 'Lion blanc', 'pageid': 1070225, 'size': 12281, 'wordcount': 1761, 'snippet': 'naturelles d\'Afrique du Sud, et il fait l\'objet d\'élevages sélectifs dans des <span class="searchmatch">zoos</span> du monde entier. L\'allèle responsable de la mutation est récessif, si bien', 'timestamp': '2018-05-04T18:03:46Z'}]}}