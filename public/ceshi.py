import requests
import os
import random
import time
import requests_cache

from bs4 import BeautifulSoup

requests_cache.install_cache('demo_cache')

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
}

response = requests.get("http://www.dy2018.com/html/gndy/dyzz/index.html", headers=headers)
html_doc = response.content.decode('gbk')
# print(html_doc)

soup = BeautifulSoup(html_doc, 'lxml')
links = []
for a in soup.select('.ulink'):
    href = 'http://www.dy2018.com' + a['href']
    title = a.string
    links.append(href)
    # print(href, title)

for link in links:
    response = requests.get(link, headers=headers)
    html_doc = response.content.decode('gbk')
    soup = BeautifulSoup(html_doc, 'lxml')
    ftp_element = soup.select('#Zoom table a')[0]
    download_link = ftp_element['href']
    print(download_link)
    time.sleep(random.randint(1, 2))