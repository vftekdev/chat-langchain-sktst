import NextImage from "next/image";

export default function toc() {
    return(
        <main className="flex flex-col font-helveticaneuelight bg-[#F9F9F9] pt-8 px-6 md:px-16 w-full h-full">
            <div className="flex items-center justify-between bg-white font-helveticaneuemedium rounded-lg w-full text-6xl px-8 py-4 mb-8">
                <p className="text-2xl sm:text-4xl text-[#006C68] font-helveticaneue">
                    Terms and Conditions
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
            <div className="text-md font-helveticaneue pt-4">Terms and Conditions for SEEK by VERA Files</div>
            <div className="text-md font-helveticaneue pt-4">Effective Date: August 1, 2025</div>
            <p className="text-md font-helveticaneue pt-4">
                Welcome to SEEK, an AI-powered search assistant developed by VERA Files. 
                SEEK is an open-source application, built upon a chatbot application framework developed by LangChain. 
                It is designed to help users interested in fact-checking and understanding misinformation trends by providing relevant information and insights. 
                By accessing or using SEEK (the "Service"), you agree to be bound by these Terms and Conditions ("Terms"). 
                If you do not agree to these Terms, please do not use the Service.
            </p>
            <div className="pt-4">
                <h2 className="text-2xl font-helveticaneue">1. Acceptance of Terms</h2>
                <p className="pt-2">
                    These Terms constitute a legally binding agreement between you and VERA Files ("we," "us," or "our") regarding your use of the Service. 
                    We may update these Terms from time to time. We will notify you of any material changes by posting the new Terms within the SEEK interface and updating the "Effective Date" at the top of these Terms. 
                    Your continued use of the Service after such modifications constitutes your acceptance of the revised Terms.
                </p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-helveticaneue">2. Description of Service</h2>
                <p className="pt-2">
                    SEEK is an artificial intelligence program trained to assist with queries related to fact checking, identifying misinformation and understanding trends in false information. 
                    As an open-source application built upon a chatbot framework developed by LangChain, SEEK leverages publicly available components and is subject to the terms of the underlying open-source licenses. 
                    While SEEK strives to provide accurate and helpful responses based on its training data and access to information, it is not a human and may not always understand nuances, sarcasm or complex human emotions. 
                    Information provided by SEEK is generated algorithmically and should be used as a supplementary tool for research and understanding. It is not a substitute for independent verification, critical thinking or professional journalistic investigation.
                </p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-helveticaneue">3. User Conduct</h2>
                <p className="pt-2">
                    You agree to use the Service in a responsible and lawful manner, consistent with the mission of VERA Files to combat misinformation. You agree not to:

                    <br/>● Use the Service for any illegal or unauthorized purpose, including the dissemination of misinformation or hate speech.
                    <br/>● Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity.
                    <br/>● Transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.
                    <br/>● Upload, post, email, or otherwise transmit any unsolicited or unauthorized advertising, promotional materials, "junk mail," "spam," "chain letters," "pyramid schemes," or any other form of solicitation.
                    <br/>● Upload, post, email, or otherwise transmit any material that contains software viruses or any other computer code, files, or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment.
                    <br/>● Interfere with or disrupt the Service or servers or networks connected to the Service.
                    <br/>● Attempt to gain unauthorized access to any portion of the Service or any other accounts, computer systems, or networks connected to the Service.
                    <br/>● Scrape, collect or store personal data about other users without their express consent.
                    <br/>● Use the Service to generate or disseminate misinformation, disinformation, or propaganda.
                    <br/>● Use the Service to harass, intimidate, or threaten individuals or groups.
                </p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-helveticaneue">4. Data Privacy</h2>
                <p className="pt-2">
                    We are committed to protecting your privacy. Our Privacy Policy, available <a href="/privacy-policy" target="_blank">here</a>, explains how we collect, use, and disclose information about you when you use the Service. 
                    By using the Service, you consent to our data practices as described in our Privacy Policy. Please note that for the purpose of improving SEEK's performance and accuracy in identifying misinformation, anonymized and aggregated user interactions may be analyzed.
                </p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-helveticaneue">5. Intellectual Property</h2>
                <p className="pt-2">
                    All content generated by SEEK is provided "as is" and is based on its training data. As SEEK is built upon an open-source framework, users may have certain rights or obligations related to the underlying LangChain components as per their respective open-source licenses. 
                    While you may use the responses generated by SEEK for your personal research, fact-checking efforts and understanding of misinformation, you acknowledge that the underlying AI models, algorithms, and training data are proprietary to VERA Files or its licensors. 
                    You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service, except as generally permitted by the Service's intended functionality for educational and informational purposes related to fact checking.
                </p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-helveticaneue">6. Disclaimer of Warranties</h2>
                <p className="pt-2">
                    SEEK IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. VERA FILES DISCLAIMS ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. 
                    VERA FILES DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT THE RESULTS OBTAINED FROM THE USE OF THE SERVICE WILL BE ACCURATE, COMPLETE, OR RELIABLE. 
                    WHILE SEEK AIMS TO AID IN FACT CHECKING, VERA FILES DOES NOT GUARANTEE THE ABSOLUTE TRUTHFULNESS OR ACCURACY OF EVERY PIECE OF INFORMATION PROVIDED BY THE AI. IT IS THE RESPONSIBILITY OF USERS TO EXERCISE CRITICAL THINKING, CROSS-REFERENCE INFORMATION WITH REPUTABLE SOURCES, AND PERSONALLY REVIEW THE ACCURACY OF ALL INFORMATION PROVIDED BY THE AI.
                </p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-helveticaneue">7. Limitation of Liability</h2>
                <p className="pt-2">
                    TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL VERA FILES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING, BUT NOT LIMITED TO, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, 
                    RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE; (III) ANY CONTENT OBTAINED FROM THE SERVICE; AND (IV) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, 
                    WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT VERA FILES HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
                </p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-helveticaneue">8. Indemnification</h2>
                <p className="pt-2">
                    You agree to indemnify and hold harmless VERA Files and its Board of Trustees, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, and expenses, including actual attorneys' fees, 
                    arising out of or in any way connected with your access to or use of the Service, your violation of these Terms, or your violation of any rights of another.
                </p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-helveticaneue">9. Termination</h2>
                <p className="pt-2">
                    We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms or if your use of the Service is deemed to be contrary to the mission of VERA Files in combating misinformation. 
                    Upon termination, your right to use the Service will immediately cease.
                </p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-helveticaneue">10. Governing Law and Jurisdiction</h2>
                <p className="pt-2">
                    These Terms shall be governed by and construed in accordance with the laws of the Republic of the Philippines, without regard to its conflict of law provisions. 
                    You agree to submit to the exclusive jurisdiction of the courts of Quezon City, Metro Manila, Philippines, to resolve any dispute arising out of these Terms or the Service.
                </p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-helveticaneue">11. Miscellaneous</h2>
                <p className="pt-2">
                    Open Source Disclosure: SEEK utilizes components from the LangChain open-source project. Here is information regarding <a href="https://github.com/langchain-ai/chat-langchain?tab=MIT-1-ov-file" target="_blank">LangChain's licensing</a>. 
                    Your use of SEEK may be subject to the terms of these underlying open-source licenses.
                    <br/><br/>● <span className="font-helveticaneuemedium">Entire Agreement:</span> These Terms constitute the entire agreement between you and us regarding the Service and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Service.
                    <br/>● <span className="font-helveticaneuemedium">Waiver and Severability:</span> Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                    <br/>● <span className="font-helveticaneuemedium">Assignment:</span> You may not assign or transfer these Terms, by operation of law or otherwise, without our prior written consent. Any attempt by you to assign or transfer these Terms, without such consent, will be null and of no effect. We may assign or transfer these Terms without restriction.
                    <br/>● <span className="font-helveticaneuemedium">Headings:</span> The headings in these Terms are for convenience only and have no legal or contractual effect.
                </p>
            </div>

            <div className="pt-4 pb-8">
                <h2 className="text-2xl font-helveticaneue">12. Contact Information</h2>
                <p className="pt-2">
                    If you have any questions about these Terms or SEEK, please contact us at editorial@verafiles.org.
                </p>
            </div>
            <a className="hover:border-0 hover:bg-[#E5E7EB] rounded-2xl self-center px-3 py-2" href="/">Back to Home</a>
            <div className="pb-8"></div>
        </main>
        
    )
}