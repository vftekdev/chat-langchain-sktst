import React from "react";
import { useGraphContext } from "../contexts/GraphContext";
import { ResponseType } from "../types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const responseTypesAndLabels: Partial<Record<ResponseType, string>> = {
  "simple": "Quick Response (10-20 seconds)",
  "complex": "Think Deeper (20-30 seconds)",
};

const responseTypesAndLabels1: Partial<Record<string, string>> = {
  "simple": "Best for everyday conversation",
  "complex": "Better for more complex topics",
};

export function ResponseTypeComponent() {
  const {
    graphData: { selectedResponseType, setSelectedResponseType },
  } = useGraphContext();
  return (
    <Select
      onValueChange={(v) => setSelectedResponseType(v as ResponseType)}
      value={selectedResponseType}
      defaultValue="simple"
    >
      <SelectTrigger className="w-fit text-[#1A7B77] mx-2">
        <SelectValue placeholder="Quick Response" />
      </SelectTrigger>
      <SelectContent className="text-[#1A7B77]">
        {Object.entries(responseTypesAndLabels).map(([responseType, label]) => (
          <SelectItem className="" key={responseType} value={responseType}>
            <span className="m-0 font-helveticaneue tracking-wide">
              {label}
            </span>
            <div className="mt-0.5"></div>
            <span className="text-xs font-helveticaneuelight text-gray-900 m-0 tracking-widest">
              {responseTypesAndLabels1[responseType]}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export const ResponseTypeRadio = React.memo(ResponseTypeComponent);
