import { FunctionComponent, useMemo } from "react";
import KeywordType from "../../types/KeywordType.ts";

type Props = {
  value: KeywordType["value"];
};

const KeywordValue: FunctionComponent<Props> = ({ value }) => {
  const transformedValue = useMemo(() => {
    if (!value) return "unknown";
    return value.toFixed(2);
  }, [value]);

  return <div className="text-right text-sm font-medium text-gray-700">{transformedValue}</div>;
};

export default KeywordValue;
