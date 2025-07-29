import { FaqAccordion } from "../components/FaqAccordion";
import NextImage from "next/image";

export default function faq() {
    const accordionData = [
        {
            title:"Why did you create SEEK?",
            desc:`SEEK is an exploratory project for VERA Files. Our team has been learning about AI and its applications in journalism since 2022, and winning a grant under the JournalismAI Innovation Challenge in 2024 gave us the seed money to put our newfound knowledge to the test.

            We wanted to address a challenge we have with distribution: “How do we make it easy for our audiences to search for facts?”
            
            From here came the idea to birth SEEK, which is designed to take the extra work out of online searching for people interested in fact checking and understanding misinformation trends.
            
            `
        },
    
        {
            title:"How does it work?",
            desc:`SEEK is an AI-powered search assistant that uses about 6,000 VERA Files articles (and counting) as its knowledge base, and a Large Language Model (i.e. Claude 3.7 Sonnet, specifically for SEEK) to craft an answer.

            When you ask a question, it will search its knowledge base according to how it understands your question (i.e. meaning-based search or semantic search). The retrieved parts of articles are then sent together with SEEK's instructions to the LLM to give you an answer. However, LLMs by nature are non-deterministic and may misunderstand or hallucinate, that is why we keep a reminder in our app for you to always read the cited stories.
            `,
        },
    
        {
            title:"How up-to-date is SEEK? From where does it draw answers?",
            desc:`The Team updates SEEK's knowledge base every Monday at 10 a.m. with the most recent stories published on the VERA Files website.

            SEEK's knowledge base is built on fact checks, fact sheets, news articles, and in-depth reports published on verafiles.org since 2008. Apart from those authored by VERA Files staff, this also includes analyses by Tsek.ph, select articles by freelance journalists, and in-depth reports by the UP Third World Studies Center*.
            
            *UP TWSC has a publishing agreement with VERA Files, where the latter publishes articles written by the Center's Marcos Regime Research group and the Dahas project. The SEEK Team at VERA Files obtained their permission to include their articles before adding them to SEEK's knowledge base.
            `
        },

        {
            title:"What do I do if there are errors?",
            desc:`As we have stated, LLMs are by nature non-deterministic and may hallucinate or misunderstand supplied context (retrieved sections of articles). 
            The SEEK Team has however, done several tests and evaluation[link to evaluation result] to improve the chatbot and as much as possible, prevent it to misunderstand or hallucinate.

            During this Beta testing phase, we encourage you to report errors as they happen. Click on the “Report Issue” button on the top right corner of the screen and file a ticket.
            A helpful tip: Always copy the URL of your conversation with SEEK and include it in your ticket. This will allow the SEEK Team to review the exact conversation you had that contains the error.
            `
        },

        {
            title:"When will it be available to the general public?",
            desc:`At the moment, you are among the select few chosen to test out SEEK in its current state. 
            This Beta testing phase is crucial in determining the future of SEEK, as our goal is to develop a product that is valuable for our audiences.

            We'll keep you updated on our plans for SEEK after the Beta testing phase!
            `
        },

        {
            title:"When will it be available to the general public?",
            desc:`At the moment, you are among the select few chosen to test out SEEK in its early stages of development. This Beta testing phase is crucial in determining the next steps we take. We want to ensure that we develop a product that's valuable for our audiences.

            We'll keep you updated on our plans after SEEK's Beta testing phase!
            `
        },

        {
            title:"What is SEEK's accuracy level?",
            desc:`To ensure the quality of responses from SEEK, the Team employed a combination of human annotators and LLM-as-a-judge in evaluating the tool.

            The Team has developed a “Golden Dataset” of 100 question-and-answer (QA) pairs. This dataset is a well-defined, human-labeled, and trusted subset of data based on fact checks, fact sheets and reports from 2008 to the present. Four human editors drafted the ground truth answers, or the ideal responses, per question and performed peer reviews of each other's contributions.  
            
            After this process, we used gpt-4o-mini to judge the responses based on RAGAS metrics, an open-source framework for testing and evaluating LLM applications. It has four metrics related to Retrieval and Answer Generation:
            
            `
        },

        {
            title:"SEEK's common issues",
            desc:`SEEK did not give me an answer, it just showed the feedback button.

            There are technical factors why SEEK is unable to give you an answer.  
            
            Because SEEK interacts with Anthropic's Claude LLM to generate an answer, it could happen that when you are conversing with SEEK, the Anthropic servers are experiencing heavy load or technical issues. That is why SEEK didn't get to the point of receiving an answer from Claude.
            
            It can also be because SEEK has reached its cap usage. By default, LLMs implement a rate limit per minute to deter abuse of use.
            
            But this could also be a network connectivity issue from your end to the SEEK servers.
            
            What to do when this happens? Just take a break for 10-15 minutes, create a new chat  before asking your questions.
            
            SEEK is quite slow in answering questions.
            
            As an AI search assistant for VERA Files, a few things can affect SEEK's response time:
            
            1. When it needs to search through a large database of fact checks to find relevant information, it can take a moment to process and organize that data.
            
            2. SEEK is trying to verify specific claims against multiple fact checks, as such, it needs time to cross-reference information accurately.
            
            3. Sometimes it needs to carefully consider how to present complex information about misinformation in a clear, accurate way without oversimplifying.
            
            4. Technical factors like network connectivity or processing capacity can occasionally cause delays.
            
            SEEK is designed to be thorough rather than rushed, since accuracy is crucial in fact-checking work. That said, the SEEK Team is constantly evaluating and improving SEEK's performance to provide faster responses while maintaining quality.
            
            `
        },
    ];
    return (
        <div className="flex flex-col font-helveticaneuemedium items-center bg-[#F9F9F9] pt-8 mx-6 md:mx-16">
            <div className="flex items-center justify-between bg-white font-helveticaneuemedium rounded-lg w-full text-6xl px-12 py-4 mb-12">
                <p className="font-helveticaneue text-2xl sm:text-6xl text-[#006C68] tracking-wider self-center m-0 p-0">
                    FAQ
                </p>
                <a className="hover:border-0 cursor-pointer" href="/">
                    <NextImage
                    src="/images/seek-logo.svg"
                    className=""
                    alt="S-E-E-K Logo"
                    width={128}
                    height={80}
                    />
                </a>
            </div>
            <div className="pb-8">
            {accordionData.map((data, index) => {
                return <FaqAccordion key={index} title={data.title} desc={data.desc}/>
            })}
            </div>
            <a className="self-end hover:border-0 pr-4 pb-8" href="/">Back to Home</a>
        </div>
    );
}