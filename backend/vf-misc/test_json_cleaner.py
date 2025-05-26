from langchain_community.document_loaders import JSONLoader

import json
from pathlib import Path
from pprint import pprint

from bs4 import BeautifulSoup

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
file_path='./backend/Reports-tws-2022-20250430_sql-2025-05-22-05-21-53.json'
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

# save the processed json file
with open("./backend/vf_tws.json", "w") as outfile:
    json.dump(data, outfile)

# function for custom metadata
def metadata_func(record: dict, metadata: dict) -> dict:

    metadata["title"] = record.get("article_title")
    metadata["publish_date"] = record.get("publish_date")
    metadata["claim_author"] = record.get("claim_author")
    metadata["rating"] = record.get("rating")
    metadata["source"] = record.get("url")

    return metadata

loader = JSONLoader(
    file_path='./backend/vf_tws.json',
    jq_schema='.[].data[]',
    content_key="post_content",
    metadata_func=metadata_func
)

data = loader.load()
pprint(data)
