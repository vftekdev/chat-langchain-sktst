from langsmith import Client

"""Default prompts."""

client = Client()
# fetch from langsmith
ROUTER_SYSTEM_PROMPT = (
    client.pull_prompt("verafiles/seek-search-assistant_router-prompt")
    #.messages[0]
    #.prompt.template
)
GENERATE_QUERIES_SYSTEM_PROMPT = (
    client.pull_prompt("langchain-ai/chat-langchain-generate-queries-prompt")
    .messages[0]
    .prompt.template
)
MORE_INFO_SYSTEM_PROMPT = (
    client.pull_prompt("verafiles/seek-search-assistant_more_info_prompt")
    #.messages[0]
    #.prompt.template
)
RESEARCH_PLAN_SYSTEM_PROMPT = (
    client.pull_prompt("verafiles/seek-search-assistant_research_plan_prompt")
    #.messages[0]
    #.prompt.template
)
GENERAL_SYSTEM_PROMPT = (
    client.pull_prompt("verafiles/seek-search-assistant_general_prompt ")
    #.messages[0]
    #.prompt.template
)
RESPONSE_SYSTEM_PROMPT = (
    client.pull_prompt("verafiles/seek_search_assistant-response_prompt")
    #.messages[0]
    #.prompt.template
)
