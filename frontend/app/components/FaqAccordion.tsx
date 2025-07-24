import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

const AccordionComponent = ({title, desc} : {title:any, desc:any}) => {
    return (
        <div className="flex flex-col bg-white rounded-lg shadow-lg mt-2">
            <Accordion.Root type="multiple">
                <Accordion.Item value="item-1">
                    <Accordion.Trigger className="flex px-12 py-6 max-w-[400px] md:min-w-[700px]">
                        <div className="self-start font-helveticaneuemedium">
                        {title}
                        </div>
                    </Accordion.Trigger>
                    <Accordion.Content className="px-12 pb-6 max-w-[700px] font-helveticaneuelight">
                        <p style={{whiteSpace:'pre-line'}}>
                        {desc}
                        </p>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>
        </div>
    )
}

export const FaqAccordion = React.memo(AccordionComponent);