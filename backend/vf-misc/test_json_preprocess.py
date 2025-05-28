from langchain_community.document_loaders import JSONLoader

import json
from pathlib import Path
from pprint import pprint

from bs4 import BeautifulSoup



# part 1: clean up data
# function for removing html tags from the json file
def cleanup(element):
    if isinstance(element, list):
        for i, item in enumerate(element):
            element[i] = cleanup(item)
    elif isinstance(element, dict):
        for key in element.keys():
            element[key] = cleanup(element[key])
    elif isinstance(element, str):
        element = BeautifulSoup(element).get_text()
    return element

# load the json file
file_path='./backend/vf-info_sql-2025-05-06-09-57-15.json'
data = json.loads(Path(file_path).read_text(), strict=False)
og_data = data
# for the old data format
if len(og_data) == 3:
    data = data[2]

# clean the json file
cleanup(data)

# for the old data format
if len(og_data) == 1:
    data["data"] = data[""]
    del data[""]
# enclose data in list
data = [data]



# part 2: add metadata to post content
articles = data[0]["data"]

# concatenate other fields with post content field
for i, item in enumerate(articles):
    articles[i]["post_content"] = articles[i]["post_content"] + '\n\n\nAbout this article:'
    
    if articles[i]["article_title"] is not None and articles[i]["article_title"] != "":
        articles[i]["post_content"] = articles[i]["post_content"] + '\nThe title of the article is: ' + articles[i]["article_title"]
    
    if articles[i]["publish_date"] is not None and articles[i]["publish_date"] != "":
        articles[i]["post_content"] = articles[i]["post_content"] + '\nThis article was published on: ' + articles[i]["publish_date"]
    
    if articles[i]["claim_author"] is not None and articles[i]["claim_author"] != "":
        articles[i]["post_content"] = articles[i]["post_content"] + '\nThe claim author was: ' + articles[i]["claim_author"]

    if articles[i]["claim"] is not None and articles[i]["claim"] != "":
        articles[i]["post_content"] = articles[i]["post_content"] + '\nThe claim was: ' + articles[i]["claim"]
    
    if articles[i]["rating"] is not None and articles[i]["rating"] != "":
        articles[i]["post_content"] = articles[i]["post_content"] + '\nThe rating for this claim is: ' + articles[i]["rating"]
    
    if articles[i]["explanation"] is not None and articles[i]["explanation"] != "":
        articles[i]["post_content"] = articles[i]["post_content"] + '\nExplanation: ' + articles[i]["explanation"]
    
    if articles[i]["url"] is not None and articles[i]["url"] != "":
        articles[i]["post_content"] = articles[i]["post_content"] + '\nThe URL for this article is: ' + articles[i]["url"]

# save the processed json file
with open("./backend/vf_info_final_2025_test.json", "w") as outfile:
    json.dump(data, outfile)



# part 3: check data
def metadata_func(record: dict, metadata: dict) -> dict:

    metadata["title"] = record.get("article_title")
    metadata["publish_date"] = record.get("publish_date")
    metadata["claim_author"] = record.get("claim_author")
    metadata["rating"] = record.get("rating")
    metadata["source"] = record.get("url")

    return metadata

loader = JSONLoader(
    file_path='./backend/vf_info_final_2025_test.json',
    jq_schema='.[].data[]',
    content_key="post_content",
    metadata_func=metadata_func
)

data = loader.load()
pprint(data)
