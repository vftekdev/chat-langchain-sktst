import { FaqAccordion } from "../components/FaqAccordion";
import NextImage from "next/image";

export default function faq() {

    return (
        <div className="flex flex-col font-helveticaneuemedium items-center bg-[#F9F9F9] pt-8 mx-6 md:mx-16">
            <div className="flex items-center justify-between bg-white font-helveticaneuemedium rounded-lg w-full text-6xl px-12 py-4 mb-12">
                <p className="font-helveticaneue text-5xl sm:text-4xl text-[#006C68] tracking-wider m-0 p-0">
                    FAQs
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
            <FaqAccordion/>
            <a className="hover:border-0 hover:bg-[#E5E7EB] rounded-2xl px-3 py-2" href="/">Back to Home</a>
            <div className="pb-8"></div>
        </div>
    );
}