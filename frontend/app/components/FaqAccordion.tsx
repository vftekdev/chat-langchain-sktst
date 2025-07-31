import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import NextImage from "next/image";

export function AccordionComponent() {
    return (
        <div className="flex pb-8">
            <Accordion.Root type="multiple" className="w-[400px] md:w-[500px] lg:w-[700px]">
                <Accordion.Item className="bg-white rounded-lg shadow-lg mt-4" value="item-1">
                    <Accordion.Trigger className="w-full flex px-6 md:px-12 py-6 hover:bg-[#006C68] hover:rounded-lg hover:text-white data-[state=open]:text-[#006C68]">
                        <p className="font-helveticaneue text-start">
                            Why did you create seek?
                        </p>
                    </Accordion.Trigger>
                    <Accordion.Content className="px-6 md:px-12 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden">
                        <p className="pb-6">
                        SEEK is an exploratory project for VERA Files. Our team has been learning about AI and its applications in journalism since 2022, and winning a grant under the JournalismAI Innovation Challenge in 2024 gave us the seed money to put our newfound knowledge to the test.

                        <br/><br/>We wanted to address a challenge we have with distribution: “How do we make it easy for our audiences to search for facts?”

                        <br/><br/>From here came the idea to birth SEEK, which is designed to take the extra work out of online searching for people interested in fact checking and understanding misinformation trends.

                        </p>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item className="bg-white rounded-lg shadow-lg mt-4" value="item-2">
                    <Accordion.Trigger className="w-full flex px-6 md:px-12 py-6 hover:bg-[#006C68] hover:rounded-lg hover:text-white data-[state=open]:text-[#006C68]">
                        <p className="font-helveticaneue text-start">
                            How does it work?
                        </p>
                    </Accordion.Trigger>
                    <Accordion.Content className="px-6 md:px-12 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden">
                        <p className="pb-6">
                            SEEK is an AI-powered search assistant that uses over 5,400 VERA Files articles (and counting) as its knowledge base and a Large Language Model (i.e. Claude 3.7 Sonnet, specifically for SEEK) to craft an answer.

                            <br/><br/>When you ask a question, it will search its knowledge base according to how it understands your question (i.e. meaning-based search or semantic search). The retrieved parts of articles are then sent together with SEEK's instructions to the LLM to give you an answer. 
                            However, LLMs by nature are non-deterministic* and may misunderstand or hallucinate, that is why we keep a reminder in our app for you to always read the cited stories.

                            <br/><br/>Non-determinism, in the context of LLMs, means that the product can produce different outputs (i.e. the answer you get may vary) even when given the same input (your prompt).
                        </p>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item className="bg-white rounded-lg shadow-lg mt-4" value="item-3">
                    <Accordion.Trigger className="w-full flex px-6 md:px-12 py-6 hover:bg-[#006C68] hover:rounded-lg hover:text-white data-[state=open]:text-[#006C68]">
                        <p className="font-helveticaneue text-start">
                            How up-to-date is SEEK? From where does it draw answers?
                        </p>
                    </Accordion.Trigger>
                    <Accordion.Content className="px-6 md:px-12 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden">
                        <p className="pb-6">
                            The Team updates SEEK's knowledge base every Monday at 10 a.m. with the most recent stories published on the VERA Files website.

                            <br/><br/>SEEK's knowledge base is built on fact checks, fact sheets, news articles, and in-depth reports published on <a className="hover:border-0" href="https://verafiles.org" target="_blank">verafiles.org</a> since 2008. 
                            Apart from those authored by VERA Files staff, this also includes analyses by Tsek.ph, select articles by freelance journalists, and in-depth reports by the UP Third World Studies Center*.

                            <br/><br/>*UP TWSC has a publishing agreement with VERA Files, where the latter publishes articles written by the Center's <a className="hover:border-0" href="https://diktadura.upd.edu.ph/">Marcos Regime Research</a> group and the <a className="hover:border-0" href="https://dahas.upd.edu.ph/">Dahas project</a>. 
                            The SEEK Team at VERA Files obtained their permission to include their articles before adding them to SEEK's knowledge base.
                        </p>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item className="bg-white rounded-lg shadow-lg mt-4" value="item-4">
                    <Accordion.Trigger className="w-full flex px-6 md:px-12 py-6 hover:bg-[#006C68] hover:rounded-lg hover:text-white data-[state=open]:text-[#006C68]">
                        <p className="font-helveticaneue text-start">
                            What do I do if there are errors?
                        </p>
                    </Accordion.Trigger>
                    <Accordion.Content className="px-6 md:px-12 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden">
                        <p className="pb-6">
                            As we have stated, LLMs are by nature non-deterministic and may hallucinate or misunderstand supplied context (such as the retrieved sections of VERA Files articles).  The SEEK Team has, however, done several tests and evaluations to improve the chatbot and, as much as possible, prevent misunderstanding or hallucinations.

                            <br/><br/>During this Beta testing phase, we encourage you to report errors as they happen. Click on the “Report Issue” button on the top right corner of the screen and file a ticket.

                            <br/><br/>📹 Watch this tutorial on <a  className="hover:border-0" href="https://drive.google.com/file/d/1XOaupYiUYkbvl76FxllMcE9IlSdHSBFO/view?usp=sharing" target="_blank">How to Report an Issue</a>.

                            <br/><br/>📖 For those who prefer to read instructions:

                            <br/><br/>1. Report an issue through the Report Issue form.  

                            <ul className="indent-8 text-sm">
                                <li>There are two ways where you can go to the Report Issue form.</li>
                                <li>a - On the top right corner of the header</li>
                                <li>b - At the bottom</li>
                            </ul>

                            <br/><NextImage
                                src="/images/report-issue-buttons.jpg"
                                className=""
                                alt="report issue buttons"
                                width={1920}
                                height={1080}
                            />

                            <br/>This is what the Report Issue Form looks like.

                            <br/><br/><NextImage
                                src="/images/report-form.png"
                                className=""
                                alt="report issue buttons"
                                width={1920}
                                height={1080}
                            />

                            <br/>2. Enter your email address so we can update you on the issue you reported.
                            <br/>3. In the Bug Title, just enter a general Issue statement, e.g. “Mali ang sagot,” “Unresponsive app”
                            <br/>4. For the SEEK team to investigate the issue, in the Bug overview, we need the following information:
                            <ul className="text-sm list-disc">
                                <li>The URL of your current SEEK session. Go back to the SEEK screen, and copy the URL and back in the report issue form, paste it in the Bug overview.</li>
                                <li>The question/s you asked.</li>
                                <li>The specific issue you are reporting (e.g. spotted wrong information, you didn't receive an answer, etc.)</li>
                            </ul>

                            <br/>Example:
                            <br/><NextImage
                                src="/images/report-form-answer.png"
                                className=""
                                alt="report issue buttons"
                                width={1920}
                                height={1080}
                            />
                        </p>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item className="bg-white rounded-lg shadow-lg mt-4" value="item-5">
                    <Accordion.Trigger className="w-full flex px-6 md:px-12 py-6 hover:bg-[#006C68] hover:rounded-lg hover:text-white data-[state=open]:text-[#006C68]">
                        <p className="font-helveticaneue text-start">
                            When will it be available to the general public?
                        </p>
                    </Accordion.Trigger>
                    <Accordion.Content className="px-6 md:px-12 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden">
                        <p className="pb-6">
                            At the moment, you are among the select few chosen to test out SEEK in its early stages of development. 
                            This Beta testing phase is crucial in determining the next steps we take. We want to ensure that we develop a product that's valuable for our audiences.

                            <br/><br/>We'll keep you updated on our plans after SEEK's Beta testing phase!
                        </p>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item className="bg-white rounded-lg shadow-lg mt-4" value="item-6">
                    <Accordion.Trigger className="w-full flex px-6 md:px-12 py-6 hover:bg-[#006C68] hover:rounded-lg hover:text-white data-[state=open]:text-[#006C68]">
                        <p className="font-helveticaneue text-start">
                            What is SEEK's accuracy level?
                        </p>
                    </Accordion.Trigger>
                    <Accordion.Content className="px-6 md:px-12 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden">
                        <p className="pb-6">
                            To ensure the quality of responses from SEEK, the Team employed a combination of human annotators and LLM-as-a-judge in evaluating the tool.

                            <br/><br/>The Team has developed a “Golden Dataset” of 100 question-and-answer (QA) pairs. This dataset is a well-defined, human-labeled, and trusted subset of data based on fact checks, fact sheets and reports from 2008 to the present. 
                            Four human editors drafted the ground truth answers, or the ideal responses, per question and performed peer reviews of each other's contributions.  

                            <br/><br/>After this process, we used gpt-4o-mini to judge the responses based on RAGAS metrics, an open-source framework for testing and evaluating LLM applications. It has four metrics related to Retrieval and Answer Generation:
                            <br/><br/>
                            <div className="flex flex-col md:flex-row justify-center font-helveticaneue">
                                <div className="md:basis-1/2">
                                    Retrieval
                                    <br/>
                                    <ul className="pl-6 list-disc">
                                        <li>
                                            context relevancy (a.k.a. context precision): <span className="font-helveticaneuemedium">measures the signal-to-noise ratio in the retrieved contexts</span>
                                        </li>
                                        <li>
                                            context recall: <span className="font-helveticaneuemedium">measures the ability of the retriever to retrieve all the necessary information needed to answer the question</span>
                                        </li>
                                    </ul>
                                </div>
                                <br/>
                                <div className="md:basis-1/2">
                                    Answer Generation
                                    <br/>
                                    <ul className="pl-6 list-disc">
                                        <li>
                                            faithfulness: <span className="font-helveticaneuemedium">measures the factual accuracy of the generated answer with the context provided</span>
                                        </li>
                                        <li>
                                            answer relevancy: <span className="font-helveticaneuemedium">measures how relevant and to the point the answer is to the question</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <br/>The metrics are scaled from 0 to 1; the higher the value, the better the performance. The SEEK Team referred to these thresholds:
                            
                            <br/><br/>
                            <table className="w-full justify-between table-auto">
                                <thead>
                                    <tr>
                                        <th className="px-6 text-center">Score Range</th>
                                        <th className="px-6 text-center">Qualitative Interpetation</th>
                                        <th className="px-6 text-center">What it means</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd:bg-gray-300 even:bg-white">
                                        <td className="whitespace-nowrap py-3 text-center">&lt;0.5</td>
                                        <td className="py-3 text-center">Very Poor</td>
                                        <td className="py-3 text-center">System requires significant redesign</td>
                                    </tr>

                                    <tr className="odd:bg-gray-300 even:bg-white">
                                        <td className="whitespace-nowrap py-3 text-center">0.5-0.59</td>
                                        <td className="py-3 text-center">Poor</td>
                                        <td className="py-3 text-center">Significant issues; often misleading, incomplete, or highly irrelevant. Requires immediate attention.</td>
                                    </tr>

                                    <tr className="odd:bg-gray-300 even:bg-white">
                                        <td className="whitespace-nowrap py-3 text-center">0.6 - 0.69</td>
                                        <td className="py-3 text-center">Fair</td>
                                        <td className="py-3 text-center">Acceptable but needs improvement</td>
                                    </tr>

                                    <tr className="odd:bg-gray-300 even:bg-white">
                                        <td className="whitespace-nowrap py-3 text-center">0.7 - 0.79</td>
                                        <td className="py-3 text-center">Good</td>
                                        <td className="py-3 text-center">Solid performance, some optimization opportunities</td>
                                    </tr>

                                    <tr className="odd:bg-gray-300 even:bg-white">
                                        <td className="whitespace-nowrap py-3 text-center">0.8 - 0.89</td>
                                        <td className="py-3 text-center">Very Good</td>
                                        <td className="py-3 text-center">Strong performance, minor improvements needed</td>
                                    </tr>

                                    <tr className="odd:bg-gray-300 even:bg-white">
                                        <td className="whitespace-nowrap py-3 text-center">0.9 - 1.0</td>
                                        <td className="py-3 text-center">Excellent</td>
                                        <td className="py-3 text-center">Near-perfect RAG performance</td>
                                    </tr>
                                </tbody>
                            </table>

                            <br/>As of July 28, 2025, the SEEK team has conducted four runs of 50 QA pairs. The overall mean RAGAS score is <span className="font-helveticaneue">0.71</span>, indicating good performance.

                            <br/><br/><span className="font-helveticaneue">What does it mean if SEEK has a good score?</span>

                            <br/><br/>Based on our tests, SEEK earned high scores in generating accurate answers, but scored poorly in context relevancy. 
                            This means that the Large Language Model behind SEEK, Claude 3.7 Sonnet, is doing a good job of avoiding hallucinations and producing answers that directly address your questions. 
                            However, the tool needs improvement in omitting extraneous details from the sources from which it draws its answers. 
                        </p>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item className="bg-white rounded-lg shadow-lg mt-4" value="item-7">
                    <Accordion.Trigger className="w-full flex px-6 md:px-12 py-6 hover:bg-[#006C68] hover:rounded-lg hover:text-white data-[state=open]:text-[#006C68]">
                        <p className="font-helveticaneue text-start">
                            SEEK's common issues
                        </p>
                    </Accordion.Trigger>
                    <Accordion.Content className="pl-12 pr-6 md:px-12 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden">
                        <ul className="list-disc font-helveticaneue pb-6">
                            <li>
                                SEEK did not give me an answer, it just showed the feedback button.
                                <p className="font-helveticaneuemedium p-0 m-0">
                                    <br/>There are technical factors why SEEK is unable to give you an answer.  

                                    <br/><br/>Because SEEK interacts with Anthropic's Claude LLM to generate an answer, it could happen that when you are conversing with SEEK, the Anthropic servers are experiencing heavy load or technical issues. That is why SEEK didn't get to the point of receiving an answer from Claude.

                                    <br/><br/>It can also be because SEEK has reached its cap usage. By default, LLMs implement a rate limit per minute to deter abuse of use.

                                    <br/><br/>But this could also be a network connectivity issue from your end to the SEEK servers.

                                    <br/><br/>What to do when this happens? Just take a break for 10-15 minutes, create a new chat  before asking your questions.
                                </p>
                            </li>
                            <li>
                                SEEK is quite slow in answering questions
                                <p className="font-helveticaneuemedium p-0 m-0">
                                    <br/>As an AI search assistant for VERA Files, a few things can affect SEEK's response time:

                                    <br/><br/>1. When it needs to search through a large database of fact checks to find relevant information, it can take a moment to process and organize that data.

                                    <br/><br/>2. SEEK is trying to verify specific claims against multiple fact checks, as such, it needs time to cross-reference information accurately.

                                    <br/><br/>3. Sometimes it needs to carefully consider how to present complex information about misinformation in a clear, accurate way without oversimplifying.

                                    <br/><br/>4. Technical factors like network connectivity or processing capacity can occasionally cause delays.

                                    <br/><br/>SEEK is designed to be thorough rather than rushed, since accuracy is crucial in fact-checking work. That said, the SEEK Team is constantly evaluating and improving SEEK's performance to provide faster responses while maintaining quality.
                                </p>
                            </li>
                        </ul>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item className="bg-white rounded-lg shadow-lg mt-4" value="item-8">
                    <Accordion.Trigger className="w-full flex px-6 md:px-12 py-6 hover:bg-[#006C68] hover:rounded-lg hover:text-white data-[state=open]:text-[#006C68]">
                        <p className="font-helveticaneue text-start">
                            Best practices when using SEEK
                        </p>
                    </Accordion.Trigger>
                    <Accordion.Content className="px-6 md:px-12 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden">
                        <p className="pb-6">
                            In order to get the best from SEEK, watch these videos!

                            <br/><br/><span className="text-[#006C68]">If you are a student, watch this: </span>
                            <br/><br/><iframe src="https://player.vimeo.com/video/1105667684?app_id=58479" width="100%" height="360" className="border-solid border-4" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" title="[SEEK-demo] For Students"></iframe>

                            <br/><br/><span className="text-[#006C68]">If you are a teacher, watch this: </span>
                            <br/><br/><iframe src="https://player.vimeo.com/video/1105668909?app_id=58479" className="border-solid border-4" width="100%" height="360" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" title="[SEEK-demo] For Teachers"></iframe>

                            <br/><br/><span className="text-[#006C68]">If you are a disinformation researcher, watch this: </span>
                            <br/><br/><iframe src="https://player.vimeo.com/video/1106014592?app_id=58479" width="100%" height="360" className="border-solid border-4" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" title="[SEEK-demo] Disinformation researcher"></iframe>

                            <br/><br/><span className="text-[#006C68]">If you are a citizen fact-checker, watch this: </span>
                            <br/><br/><iframe src="https://player.vimeo.com/video/1106015872?app_id=58479" width="100%" height="360" className="border-solid border-4"  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" title="[SEEK-demo] For Citizen fact-checkers"></iframe>
                        </p>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>
        </div>
    );
}

export const FaqAccordion = React.memo(AccordionComponent);