from langchain_community.document_loaders import JSONLoader
from datetime import datetime

import json
from pathlib import Path
from pprint import pprint
from bs4 import BeautifulSoup



input_path = './backend/articles-20251022.json'
output_path = './backend/test_data.json'
articles = []



# load the json file
file_path = input_path
data = json.loads(Path(file_path).read_text(), strict=False)

for article in data:
    article_data = {}

    article_data["category"] = article["yoast_head_json"]["schema"]["@graph"][0]["articleSection"][0]
    article_data["post_date"] = article["date"] + "Z"

    datetime_temp = datetime.strptime(article["date"], "%Y-%m-%dT%H:%M:%S")
    article_data["publish_date"] = datetime_temp.strftime("%B %d, %Y")

    article_data["last_accessed_at"] = article["modified"] + "Z"
    article_data["created_at"] = article["date"] + "Z"
    article_data["article_title"] = article["title"]["rendered"]
    article_data["article_author"] = article["article_author"]
    article_data["guid"] = article["guid"]["rendered"]
    article_data["url"] = article["link"]
    article_data["claim"] = article["claim_reviewed"]
    article_data["rating"] = article["review_rating"]
    article_data["claim_author"] = article["claim_author"]
    article_data["explanation"] = article["rating_explanation"]
    article_data["keywords"] = article["yoast_head_json"]["schema"]["@graph"][0]["keywords"]
    article_data["post_content"] = (
                                    article["corrections_updates"] + " " +
                                    article["content"]["rendered"] + " " +
                                    article["transcript"] + " " +
                                    article["editor_boiler_plate"] + " " +
                                    article["interesting_facts"]
                                   )
    articles.append(article_data)



# function for removing html tags from the json file
def cleanup(element):
    if isinstance(element, list):
        for i, item in enumerate(element):
            element[i] = cleanup(item)
    elif isinstance(element, dict):
        for key in element.keys():
            element[key] = cleanup(element[key])
    elif isinstance(element, str):
        element = element.partition("<h5 id=\"reader-request-form\"")[0]
        element = BeautifulSoup(element).get_text()
    return element

cleanup(articles)
result = [{"data": articles}]

pprint(result)



# save the processed json file
with open(output_path, 'w') as outfile:
    json.dump(result, outfile)
