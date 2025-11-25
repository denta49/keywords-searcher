import { FunctionComponent } from "react";
import KeywordType from "../../types/KeywordType.ts";

type Props = {
  value: KeywordType["value"];
};

const KeywordValue: FunctionComponent<Props> = ({ value }) => {
  const text = value == null ? "unknown" : value.toFixed(2);

  return <div className="text-right text-sm font-medium text-gray-700 tabular-nums">{text}</div>;
};

export default KeywordValue;
