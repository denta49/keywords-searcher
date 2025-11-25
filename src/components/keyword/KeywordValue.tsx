import { FunctionComponent } from "react";
import KeywordType from "../../types/KeywordType.ts";

type Props = {
  value: KeywordType["value"];
};

const KeywordValue: FunctionComponent<Props> = ({ value }) => {
  return <div className="text-right text-sm font-medium text-gray-700">{value.toFixed(2)}</div>;
};

export default KeywordValue;
