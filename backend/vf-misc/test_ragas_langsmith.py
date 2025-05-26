from langsmith import evaluate, aevaluate, Client
from backend.retrieval_graph.graph import graph as retrieval_graph
from datasets import Dataset
import asyncio

# pip install ragas==0.0.11
# change the model used in ragas (search "gpt" in ragas folder in site-packages folder)
# Add "In your analysis, you should only put the sentences that you saw, don't add any other sentences to your answer. Also don't add empty new lines in your answer."
# right after the "Think in steps..." sentence (like just add it to the right)
from ragas import evaluate as ragas_evaluate
from ragas.metrics import (
    faithfulness,
    answer_relevancy,
    context_relevancy,
    context_recall,
)

# 1. Create and/or select your dataset
client = Client()
dataset_name = "ds-seek-ragas-test-2"

# 2. Define an evaluator
def exact_match(outputs: dict, reference_outputs: dict):
    # print("OUTPUT: ", (outputs["output"]))
    print("OUTPUT: ", (outputs["answer"]))
    print("REFERENCE OUTPUT: ", (reference_outputs["answer"]))

    question = [outputs["query"]]
    ground_truth = [[reference_outputs["answer"]]] # has to be a list inside a list
    # answer = [outputs["output"]]
    answer = [outputs["answer"]]
    # context = [[docs["page_content"] for docs in reference_outputs["documents"]]]
    context = [[docs.page_content for docs in outputs["documents"]]]

    # To dict
    data_dict = {
        "question": question,
        "answer": answer,
        "contexts": context,
        "ground_truths": ground_truth
    }

    # Convert dict to dataset
    dataset = Dataset.from_dict(data_dict)

    # Evaluate dataset
    result = ragas_evaluate(
        dataset = dataset,
        metrics=[
            faithfulness,
            answer_relevancy,
            context_relevancy,
            context_recall,
        ],
    )

    df = result.to_pandas()
    ffn = df["faithfulness"].to_numpy()[0]
    arl = df["answer_relevancy"].to_numpy()[0]
    crl = df["context_ relevancy"].to_numpy()[0] # really has a space after the underscore
    crc = df["context_recall"].to_numpy()[0]

    print("ffn:", ffn)
    print("arl:", arl)
    print("crl:", crl)
    print("crc:", crc)

    return [{"key": "faithfulness", "score": ffn}, {"key": "answer relevancy", "score": arl}, {"key": "context relevancy", "score": crl}, {"key": "context recall", "score": crc}]

# 3. Run an evaluation
# For more info on evaluators, see: https://docs.smith.langchain.com/concepts/evaluation#evaluators

def example_to_state(inputs: dict) -> dict:
    return {"messages": [{"role": "user", "content": inputs["messages"][0]["content"]}]}

# We use LCEL declarative syntax here.
# Remember that langgraph graphs are also langchain runnables.
target = example_to_state | retrieval_graph

# To evaluate an LCEL chain, replace lambda with chain.invoke
# To evaluate a LangGraph graph, replace lambda with graph.invoke
async def langsmith_ragas_eval():
    results = await aevaluate(
        target,
        data=dataset_name,
        evaluators=[exact_match],
        experiment_prefix="ds-seek-ragas-test-2 experiment"
    )
asyncio.run(langsmith_ragas_eval())

# To evaluate an LCEL chain, replace lambda with chain.invoke
# To evaluate a LangGraph graph, replace lambda with graph.invoke
# evaluate(
#     lambda x: "I don't know.",
#     data=dataset_name,
#     evaluators=[exact_match],
#     experiment_prefix="ds-seek-ragas-test-2 experiment"
# )
