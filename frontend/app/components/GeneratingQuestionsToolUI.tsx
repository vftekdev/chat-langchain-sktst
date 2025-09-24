import { useAssistantToolUI } from "@assistant-ui/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LoaderCircle, Globe, Plus } from "lucide-react";
import { DocumentDialog } from "./DocumentDialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { TooltipIconButton } from "./ui/assistant-ui/tooltip-icon-button";
import { DocumentCard, Document } from "./DocumentCard";
import { useCallback } from "react";
import NextImage from "next/image";
import { useGraphContext } from "../contexts/GraphContext";

type Question = {
  question: string;
  step: number;
  // Not rendered in the UI ATM.
  queries?: string[];
  documents?: Document[];
};

const QuestionCard = ({ question }: { question: Question }) => {
  const displayedDocuments = question.documents?.slice(0, 6) || [];
  const remainingDocuments = question.documents?.slice(6) || [];

  return (
    <Card className="md:w-[250px] sm:w-[250px] w-full md:max-w-full h-[140px] bg-inherit border-gray-500 flex flex-col gap-2">
      <CardHeader className="flex-shrink-0 px-3 pt-2 pb-0">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <CardTitle className="text-sm font-helveticaneuelight text-black-300 line-clamp-4 overflow-hidden">
                {question.question}
              </CardTitle>
            </TooltipTrigger>
            <TooltipContent className="max-w-[600px] whitespace-pre-wrap">
              <p>{question.question}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow px-3 pb-2 justify-between mt-auto">
        <div className="flex flex-col gap-1 mt-auto">
          <hr className="border-gray-400" />
          <div className="flex flex-wrap items-start justify-start gap-2 pt-1">
            {question.documents?.length ? (
              <>
                {displayedDocuments.map((doc: Document, idx: number) => (
                  <DocumentDialog
                    key={`document-${question.step}-${idx}`}
                    document={doc}
                  />
                ))}
                {remainingDocuments.length > 0 && (
                  <Sheet>
                    <SheetTrigger>
                      <TooltipIconButton
                        tooltip={`See ${remainingDocuments.length} more documents`}
                        variant="outline"
                        className="w-6 h-6 z-50 transition-colors ease-in-out bg-transparent hover:bg-gray-500 border-gray-400 text-gray-300"
                      >
                        <Plus />
                      </TooltipIconButton>
                    </SheetTrigger>
                    <SheetContent
                      side="right"
                      className="bg-white border-none overflow-y-auto flex-grow scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent md:min-w-[50vw] min-w-[70vw]"
                    >
                      <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold text-gray-900">
                          All Documents for Question
                        </h2>
                        <div className="flex flex-wrap gap-2">
                          {question.documents?.map(
                            (doc: Document, idx: number) => (
                              <DocumentDialog
                                key={`all-documents-${idx}`}
                                document={doc}
                                trigger={<DocumentCard document={doc} />}
                              />
                            ),
                          )}
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                )}
              </>
            ) : (
              <span className="flex items-center justify-start gap-2 text-black-400">
                <p className="text-sm">Finding documents</p>
                <LoaderCircle className="animate-spin w-4 h-4" />
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

let counter = 0;

export const useGeneratingQuestionsUI = () =>
  useAssistantToolUI({
    toolName: "generating_questions",
    // Wrap the component in a useCallback to keep the identity stable.
    // Allows the component to be interactable and not be re-rendered on every state change.
    render: useCallback((input) => {
      const {
        graphData: { selectedResponseType, setSelectedResponseType },
      } = useGraphContext();

      if (!input.args?.questions || input.args.questions.length === 0 || selectedResponseType === "simple") {
        return null;
      }
      if (input) {
        counter++;
      }

      return (
        <div className="flex flex-col bg-white rounded-lg shadow-md px-3 w-full group cursor-pointer">
          <input type="checkbox" className="hidden peer" id={`collapse-research`+ counter}/>
          <label htmlFor={`collapse-research`+ counter} className="flex flex-row gap-2 items-center justify-start text-black-300">
            <NextImage
              src="/images/books.svg"
              className=""
              alt="Books Logo"
              width={28}
              height={28}
            />
            <p className="text-xl text-[#006c68]">Research Plan & Sources</p>
            <svg className="ml-auto mr-3 group-has-[:checked]:rotate-90 group-has-[:checked]:translate-x-1 group-hover:translate-x-1 duration-200 w-[0.75rem] h-[0.75rem]" xmlns="http://www.w3.org/2000/svg" width="298" height="512" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 298 511.93">
              <path fill-rule="nonzero" d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z"/>
            </svg>
          </label>
          <div className="hidden peer-checked:block">
            <div className="flex flex-wrap lg:flex-nowrap items-start justify-start gap-2 pb-3">
              {(input.args.questions as Question[]).map(
                (question, questionIndex) => (
                  <QuestionCard
                    key={`question-${questionIndex}`}
                    question={question}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      );
    }, []),
  });
