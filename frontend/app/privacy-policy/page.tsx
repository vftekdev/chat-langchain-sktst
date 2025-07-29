import NextImage from "next/image";

export default function privacypolicy() {
    return(
        <main className="flex flex-col font-helveticaneuelight bg-[#F9F9F9] pt-8 px-6 md:px-16 w-full h-full">
            <div className="flex items-center justify-between bg-white font-helveticaneuemedium rounded-lg w-full text-6xl px-8 py-4 mb-8">
                <p className="self-center text-3xl sm:text-4xl text-[#006C68] font-helveticaneue">
                    Privacy Policy
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
            <div className="text-md font-helveticaneue pt-4">Privacy Policy for SEEK by VERA Files</div>
            <div className="text-md font-helveticaneue pt-4">Effective Date: August 1, 2025</div>
            <p className="text-md font-helveticaneue pt-4">
                This Privacy Policy explains how VERA Files ("we," "us," or "our") collects, uses, stores, and protects information when you use SEEK, our AI-powered search assistant (the "Service"). 
                SEEK is designed to help you with fact checking and understanding misinformation trends. By using SEEK, you agree to the practices described in this Privacy Policy.
            </p>

            <div className="pt-4">
                <h2 className="text-2xl font-helveticaneue">1. Information We Collect</h2>
                <p className="pt-2">
                When you use SEEK, we may collect the following types of information:
                <br/><br/>● <span className="font-helveticaneuemedium">User Data:</span> We collect the name and email address when the user authenticates her/his session through Google to use SEEK. This is to keep track of the users accessing SEEK.
                <br/>● <span className="font-helveticaneuemedium">User Input/Queries:</span> We collect the text of your questions and prompts, as well as any follow-up interactions you have with SEEK. This data is essential for SEEK to understand your requests and provide relevant responses. However, this information is not personally identifiable to your name or email address.
                <br/>● <span className="font-helveticaneuemedium">Interaction Data:</span> We collect information about how you interact with the Service, such as the time and date of your queries, the length of conversations, and features you use. This helps us understand usage patterns and improve SEEK.
                <br/>● <span className="font-helveticaneuemedium">Technical Data:</span> We collect limited technical information such as your device type, operating system, and IP address, for analytics reporting. We do not collect precise geolocation data.
                <br/><br/><span className="font-helveticaneuemedium">We do not intentionally collect any personally identifiable information (PII) from your interactions with SEEK, unless you voluntarily provide it within your queries.</span> We strongly advise against sharing sensitive personal information with SEEK.
                <br/><br/><span className="font-helveticaneuemedium">Note: Some PII may be requested in relation to your use of SEEK during our Beta Testing period.</span> This information will be collected through third-party tools (e.g. Google Forms) to facilitate our call for expressions of interest to beta-test SEEK, as well as to collect your responses for our beta testing evaluation form. 
                The collection of this PII will not be directly facilitated through SEEK and would not make your SEEK logs personally identifiable to you.
                </p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-helveticaneue">2. How We Use Your Information</h2>
                <p className="pt-2">
                    We use the information we collect for the following purposes:
                    <br/><br/>● <span className="font-helveticaneuemedium">To Provide and Improve the Service:</span> Your queries and interaction data help SEEK understand your needs, generate relevant responses, and continuously learn to improve its accuracy and helpfulness in fact checking and combating misinformation.
                    <br/>● <span className="font-helveticaneuemedium">For Research and Development:</span> Anonymized and aggregated data from user interactions may be used for internal research, analysis, and development of SEEK and other VERA Files initiatives related to media literacy and combating false information.
                    <br/>● <span className="font-helveticaneuemedium">To Maintain and Secure the Service:</span> Technical data helps us monitor the performance, stability, and security of SEEK, and to identify and resolve technical issues.
                    <br/>● <span className="font-helveticaneuemedium">To Understand Misinformation Trends:</span> By analyzing anonymized query patterns, we can gain insights into emerging misinformation topics and trends, which helps VERA Files in its broader fact-checking efforts.
                </p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-helveticaneue">3. How We Share Your Information</h2>
                <p className="pt-2">
                    We are committed to keeping your information confidential. We do not sell, rent or trade your personal information. We may share information only in the following limited circumstances:
                    <br/><br/>● <span className="font-helveticaneuemedium">With Service Providers:</span> We may share anonymized or aggregated data with third-party service providers who assist us in operating and maintaining SEEK (e.g., hosting providers, analytics services). These providers are bound by confidentiality agreements and are only permitted to use the information for the purposes of providing services to us.
                    <br/>● <span className="font-helveticaneuemedium">For Legal Reasons:</span> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court order or government agency request).
                    <br/>● <span className="font-helveticaneuemedium">In Aggregated or Anonymized Form:</span> We may share aggregated or anonymized data that cannot be used to identify you personally with partners, researchers, or the public to highlight trends in misinformation, promote SEEK, or conduct research.
                    <br/><br/><span className="font-helveticaneuemedium">Note:</span> The SEEK Team may cite data and quote feedback from beta users that were collected through our beta testing evaluation form, in our reports to our funders and subsequent public promotion of SEEK, among other purposes. This data will be anonymized.
                </p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-helveticaneue">4. Data Retention, Storage and Security</h2>
                <p className="pt-2">
                By default, SEEK's hosting server retains Q&A logs for 14 days and automatically deletes it after this period. 
                However, during the beta testing phase, SEEK will retain the logs for 400 days for analysis.
                <br/><br/>
                We implement reasonable technical and organizational measures to protect the information collected through SEEK against unauthorized access, use, disclosure, alteration, or destruction. However, no internet transmission or electronic storage is completely secure. 
                While we strive to protect your data, we cannot guarantee its absolute security, and we will not be responsible for the unlawful conduct committed by third parties that results in breach of security, notwithstanding security efforts on our part.
                <br/><br/>
                Your queries and interaction data are stored securely and are periodically reviewed for the purpose of improving the AI model and SEEK as a service.
                Note: Data collected by VERA Files during the Beta Testing period through Google Forms will go straight into a spreadsheet accessible only to SEEK Team members. This will be retained for as long as the SEEK project remains active, and will be archived in the event that SEEK is retired.
                </p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-helveticaneue">5. Your Choices and Rights</h2>
                <p className="pt-2">
                    Since we do not intentionally collect PII through SEEK, direct access, correction, or deletion of specific personal data within your chatbot interactions may not be feasible. However, we are committed to transparency:
                    <br/><br/>● <span className="font-helveticaneuemedium">No Personal Account:</span> SEEK does not require user accounts, which inherently limits the personal data we collect.
                    <br/>● <span className="font-helveticaneuemedium">Anonymization:</span> We prioritize the anonymization and aggregation of data for analytical purposes to protect user privacy.
                    If you have concerns about any information you believe may have been inadvertently collected and is personally identifiable, please contact us at editorial@verafiles.org. 
                </p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-helveticaneue">6. Children's Privacy</h2>
                <p className="pt-2">
                    SEEK is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. 
                    If we become aware that we have collected personal information from a child under 13 without verifiable parental consent, we will take steps to remove that information from our servers.                    
                </p>
            </div>

            <div className="pt-4">
                <h2 className="text-2xl font-helveticaneue">7. Changes to This Privacy Policy</h2>
                <p className="pt-2">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. 
                We will notify you of any material changes by posting the new Privacy Policy on [where you will post updates, e.g., the VERA Files website, within the SEEK interface] and updating the "Effective Date" at the top. Your continued use of SEEK after such modifications constitutes your acceptance of the revised Privacy Policy. 
                </p>
            </div>

            <div className="pt-4 pb-8">
                <h2 className="text-2xl font-helveticaneue">8. Contact Us</h2>
                <p className="pt-2">
                    If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at editorial@verafiles.org. 
                </p>
            </div>
            <a className="self-end hover:border-0 pr-4 pb-8" href="/">Back to Home</a>
        </main>
    )
}