<p align="center">
<img src="/frontend/public/images/seek-logo.svg" alt="SEEK Logo" width="120">
</p>

# 🔎 SEEK AI Powered Search Assistant

This repository hosts the **SEEK AI powered search assistant**, a project developed by VERA Files. It is a fork and adaptation of the original [Chat LangChain application](https://github.com/langchain-ai/chat-langchain).

SEEK is designed to provide accurate, in-depth answers based on a specialized knowledge base, specifically drawing from VERA Files' fact checks, fact sheets, and reports sourced from the [verafiles.org](https://verafiles.org) website.

# ✨ Key Technical Changes from Original Fork

The original RAG architecture was substantially modified to address common issues like source hallucination, context loss ("lost in the middle"), and temporal blindness. The following technical changes represent a complete overhaul of the Retrieval-Augmented Generation (RAG) pipeline.

## 1. Custom Ingestion and Chunking Strategy

Our ingestion pipeline is configured to optimize context flow and source traceability.

| Feature | Configuration | Rationale |
| --- | --- | --- | 
| Chunking Size & Overlap | **Chunk Size**: 3,000 characters. **Overlap**: A high overlap of 400 characters. | The chunk size is adapted to the typical length of a fact-check article to ensure the first chunk contains both the misinformation claim and the factual debunking. The high overlap maintains contiguity across chunks, preventing hallucination caused by the "lost in the middle" effect. | 
| Source Metadata | Documents are processed into a JSON format where each text chunk includes rich, XML-tagged metadata ie ` <title> `, `<url>`, `<author>`, `<published date>` (Month Day, Year format). | This resolves source hallucination issues by ensuring the chunk itself carries its citation data. | 
| Temporal Anchors | `post date` in ISO8601 UTC format, e.g., `2025-04-01T12:30:00Z` | Standard text dates are insufficient for machine logic. The specific post date field (a date type) is critical for temporal filtering in retrieval. | 

## 2. Advanced Retrieval Logic

The RAG backend implements a sophisticated retrieval system that adjusts its behavior based on user intent and temporal requirements.

| Feature | Details |
| --- | --- |
| Dual Retrieval Modes | **Simple Response**: Executes one query retrieval, generating a single query prompt from the user's question. |
| | **Think Deeper Response**: Generates three different queries from the user's question, resulting in a more comprehensive set of retrieved contexts. |
| Temporal-Aware Retrieval | If the user query contains temporal keywords (e.g., "latest," "current," or "recent" articles), a special Weaviate retrieval command is triggered. This command uses the date filter on the `post date` metadata field to fetch the latest `k` (k=12) matching contexts from the vector store. |

## 3. LLM and Prompt Engineering

The system uses a specific Large Language Model (LLM) tailored for fact-based RAG and is guided by structured prompts to ensure fidelity and freshness.

| Component | Model & Technique | Rationale |
| ---- | --- | -- |
| Core LLM | Anthropic Claude Sonnet 4.5 (used for query generation and final answer generation). | The Anthropic family of models is preferred for its strong performance in factual accuracy and responsible AI practices. A key technical advantage is its native ability to process XML-based structured tags within prompts, enabling explicit instruction on citation formatting and source attribution. |
| Reranking | Voyage rerank-2.5-lite. The reranker is supplied with an additional instructional prompt: `Today is {date_today}. Prioritize the most recent information from the provided contexts. Each context includes a publish date - use the most up-to-date source when reranking..` | This ensures that even if older documents are retrieved, the contexts fed to the LLM are ordered by relevance and temporal freshness, reducing the chance of citing outdated information. |
| System Prompt | The answer generation system prompt contains a date anchor to bias the final answer toward current information: -- `Today is {date_today}. Prioritize the most recent information from the provided contexts. Each context includes a publish date - use the most up-to-date source when answering..` | Provides a final layer of control to ensure the LLM prioritizes the freshest information during synthesis. |

## 🖥️ Frontend Overview

The frontend is built using ReactJS and TypeScript.

* **Design:** A complete UI/UX overhaul was performed to create a SEEK-themed user interface that aligns with the VERA Files visual identity and color palette.

* **Security & User Management:** User login was implemented using AuthJS and Prisma to provide enhanced security and user tracking.

* **Response Mode UI:** The user interface features a control for the dual conversation modes:

  * **Quick Response**: Geared toward casual conversation with a 10-20 second response time.

  * **Think Deeper**: Focuses on more complex, in-depth answers, executing a detailed research plan with a 20-30 second response time.

# 🧑‍💻 SEEK Technical Team

* **Zuriel Aeneas Cham**: Frontend developer

* **Wyron Mark Co**: Backend developer

* **Sarah Escandor-Tomas**: Technical Lead
