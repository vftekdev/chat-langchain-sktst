from backend.retrieval_graph.graph import graph as retrieval_graph
import asyncio

questions = [
            # "What is VERA Files?",
            "give me the latest fact checks.",
            "give me articles by bryan something.",
            # "give me the most recent fact checks",
            # "Tell me about the latest miracle cure products.",
            # "Is there any information circulating about Taal volcano?",
            ]

async def auto_qna(questions):
    for question in questions:
        result = await retrieval_graph.ainvoke(
            {
                "messages": [("human", question)],
            }
        )
        # answers.append(result['answer'])
        # contexts.append([docs.page_content for docs in result['documents']])

asyncio.run(auto_qna(questions))
