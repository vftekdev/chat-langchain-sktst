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
      <SelectTrigger className="w-[240px] text-teal-600 mx-2">
        <SelectValue placeholder="Quick Response" />
      </SelectTrigger>
      <SelectContent className="text-teal-600">
        {Object.entries(responseTypesAndLabels).map(([responseType, label]) => (
          <SelectItem className="!hover:bg-[#2b2b2b] !hover:text-teal-400" key={responseType} value={responseType}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export const ResponseTypeRadio = React.memo(ResponseTypeComponent);
