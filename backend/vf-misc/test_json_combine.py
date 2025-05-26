import json
from pathlib import Path
from pprint import pprint

file_path='./backend/vf_tws.json'
data = json.loads(Path(file_path).read_text())

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

pprint(data)

# save the processed json file
with open("./backend/vf_tws_final.json", "w") as outfile:
    json.dump(data, outfile)
