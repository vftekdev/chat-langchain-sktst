import os

import weaviate
from weaviate.classes.query import Filter, Sort

from pprint import pprint
from langchain_core.documents import Document
import uuid

from backend.constants import WEAVIATE_DOCS_INDEX_NAME


print("\n\n\n\n\n\n\n")
def make_weaviate_query(user_query, match_author_name=None, match_category=None):
    with weaviate.connect_to_weaviate_cloud(
            cluster_url=os.environ["WEAVIATE_URL"],
            auth_credentials=weaviate.classes.init.Auth.api_key(
                os.environ.get("WEAVIATE_API_KEY", "not_provided")
            ),
            skip_init_checks=True,
        ) as weaviate_client:
            test_collection = weaviate_client.collections.get(WEAVIATE_DOCS_INDEX_NAME)
            doc_filters = []

            if match_author_name:
                author_filter = Filter.by_property("article_author").equal(match_author_name)
                doc_filters.append(author_filter)
                # response = test_collection.query.fetch_objects(
                #     filters=author_filter,
                #     sort=Sort.by_property(name="post_date", ascending=False),
                #     limit=6
                # )
            if match_category:
                if match_category != "article":
                    category_filter = Filter.by_property("category").equal(match_category)
                    doc_filters.append(category_filter)
                    # response = test_collection.query.fetch_objects(
                    #     filters=category_filter,
                    #     sort=Sort.by_property(name="post_date", ascending=False),
                    #     limit=6
                    # )

            if doc_filters:
                response = test_collection.query.fetch_objects(
                    filters=(
                        Filter.all_of(doc_filters)
                    ),
                    sort=Sort.by_property(name="post_date", ascending=False),
                    limit=6
                )
            else:
                response = test_collection.query.fetch_objects(
                    sort=Sort.by_property(name="post_date", ascending=False),
                    limit=6
                )

            docs_list = []
            for o in response.objects:
                # print(type(o.properties))
                # pprint(o.properties)
                docs_list.append(Document(page_content=o.properties["text"], metadata={
                    "article_author": o.properties["article_author"],
                    "category": o.properties["category"],
                    "title": o.properties["title"],
                    "claim": o.properties["claim"],
                    "claim_author": o.properties["claim_author"],
                    "explanation": o.properties["explanation"],
                    "post_date": o.properties["post_date"],
                    "publish_date": o.properties["publish_date"],
                    "rating": o.properties["rating"],
                    "seq_num": o.properties["seq_num"],
                    "source": o.properties["source"],
                    "uuid": str(uuid.uuid4()),
                }))

    return docs_list
