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
<div>test123</div>

const responseTypesAndLabels: Partial<Record<ResponseType, string>> = {
  "simple": "Quick Response (3-10 secs)",
  "complex": "Think Deeper (20-30 secs)",
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
      defaultValue="anthropic/claude-3-7-sonnet-20250219"
    >
      <SelectTrigger className="w-[250px] text-teal-600 mx-2">
        <SelectValue placeholder="Quick Response" />
      </SelectTrigger>
      <SelectContent className="text-teal-600">
        {Object.entries(responseTypesAndLabels).map(([responseType, label]) => (
          <SelectItem className="" key={responseType} value={responseType}>
            <p className="m-0 font-helveticaneue tracking-wide">
            {label}
            </p>
            <p className="text-xs font-helveticaneuelight text-gray-900 m-0 tracking-widest">
              {responseTypesAndLabels1[responseType]}
            </p>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export const ResponseTypeRadio = React.memo(ResponseTypeComponent);
