from langchain_community.document_loaders import JSONLoader

import json
from pathlib import Path
from pprint import pprint

from bs4 import BeautifulSoup



input_path = './backend/Copy of Updated-article_about-fact-checking_Copy of vf-info_sql-2025-05-06-09-57-15.json'

output_path = './backend/vfseek6K4K/vf_info.json'



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
        element = element.partition("<h5 id=\"reader-request-form\"")[0]
        element = BeautifulSoup(element).get_text()
    return element

# load the json file
file_path = input_path
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



# # part 2: add metadata to post content
# articles = data[0]["data"]

# # concatenate other fields with post content field
# for i, item in enumerate(articles):
#     articles[i]["post_content"] = articles[i]["post_content"] + '\n\n\nAbout this article:'

#     if articles[i]["category"] is not None and articles[i]["category"] != "":
#         articles[i]["post_content"] = articles[i]["post_content"] + '\n<article_category>' + articles[i]["category"] + '</article_category>'
    
#     if articles[i]["article_title"] is not None and articles[i]["article_title"] != "":
#         articles[i]["post_content"] = articles[i]["post_content"] + '\n<article_title>' + articles[i]["article_title"] + '</article_title>'
    
#     if articles[i]["publish_date"] is not None and articles[i]["publish_date"] != "":
#         articles[i]["post_content"] = articles[i]["post_content"] + '\n<publish_date>' + articles[i]["publish_date"] + '</publish_date>'
    
#     if articles[i]["claim_author"] is not None and articles[i]["claim_author"] != "":
#         articles[i]["post_content"] = articles[i]["post_content"] + '\n<claim_author>' + articles[i]["claim_author"] + '</claim_author>'

#     if articles[i]["claim"] is not None and articles[i]["claim"] != "":
#         articles[i]["post_content"] = articles[i]["post_content"] + '\n<claim>' + articles[i]["claim"] + '</claim>'
    
#     if articles[i]["rating"] is not None and articles[i]["rating"] != "":
#         articles[i]["post_content"] = articles[i]["post_content"] + '\n<rating>' + articles[i]["rating"] + '</rating>'
    
#     if articles[i]["explanation"] is not None and articles[i]["explanation"] != "":
#         articles[i]["post_content"] = articles[i]["post_content"] + '\n<explanation>' + articles[i]["explanation"] + '</explanation>'
    
#     if articles[i]["url"] is not None and articles[i]["url"] != "":
#         articles[i]["post_content"] = articles[i]["post_content"] + '\n<source_url>' + articles[i]["url"] + '</source_url>'

# save the processed json file
with open(output_path, 'w') as outfile:
    json.dump(data, outfile)



# part 3: check data
from langchain_text_splitters import RecursiveCharacterTextSplitter

text_splitter = RecursiveCharacterTextSplitter(chunk_size=6000, chunk_overlap=200)

def metadata_func(record: dict, metadata: dict) -> dict:

    metadata["article_author"] = "None" if record.get("article_author") == "" else record.get("article_author")
    metadata["category"] = "None" if record.get("category") == "" else record.get("category")
    metadata["title"] = "None" if record.get("article_title") == "" else record.get("article_title")
    metadata["publish_date"] = "None" if record.get("publish_date") == "" else record.get("publish_date")
    metadata["claim_author"] = "None" if record.get("claim_author") == "" else record.get("claim_author")
    metadata["claim"] = "None" if record.get("claim") == "" else record.get("claim")
    metadata["rating"] = "None" if record.get("rating") == "" else record.get("rating")
    metadata["explanation"] = "None" if record.get("explanation") == "" else record.get("explanation")
    metadata["source"] = "None" if record.get("url") == "" else record.get("url")

    return metadata

loader = JSONLoader(
    file_path=output_path,
    jq_schema='.[].data[]',
    content_key="post_content",
    metadata_func=metadata_func
)

data = loader.load()
# pprint(data)

docs_transformed = text_splitter.split_documents(
    data
)
docs_transformed = [
    doc for doc in docs_transformed if len(doc.page_content) > 10
]

for doc in docs_transformed:
    doc.page_content = (
        doc.page_content + '\n\n\nAbout this article:'
        + '\n<article_author>' + str(doc.metadata.get("article_author", "None")) + '</article_author>'
        + '\n<article_category>' + str(doc.metadata.get("category", "None")) + '</article_category>'
        + '\n<article_title>' + str(doc.metadata.get("title", "None")) + '</article_title>'
        + '\n<publish_date>' + str(doc.metadata.get("publish_date", "None")) + '</publish_date>'
        + '\n<claim_author>' + str(doc.metadata.get("claim_author", "None")) + '</claim_author>'
        + '\n<claim>' + str(doc.metadata.get("claim", "None")) + '</claim>'
        + '\n<rating>' + str(doc.metadata.get("rating", "None")) + '</rating>'
        + '\n<explanation>' + str(doc.metadata.get("explanation", "None")) + '</explanation>'
        + '\n<source_url>' + str(doc.metadata.get("source", "None")) + '</source_url>'
        + '\n\n'
    )

pprint(docs_transformed)
