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
  "simple": "Simple",
  "complex": "Complex",
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
      <SelectTrigger className="w-[180px] border-gray-600 text-gray-200 bg-yellow-500">
        <SelectValue placeholder="Model" />
      </SelectTrigger>
      <SelectContent className="bg-[#282828] text-gray-200 border-gray-600">
        {Object.entries(responseTypesAndLabels).map(([responseType, label]) => (
          <SelectItem className="hover:bg-[#2b2b2b]" key={responseType} value={responseType}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export const ResponseTypeRadio = React.memo(ResponseTypeComponent);
