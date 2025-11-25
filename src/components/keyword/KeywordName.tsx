import { FunctionComponent } from "react";
import KeywordType from "../../types/KeywordType.ts";

type Props = {
  name: KeywordType["name"];
};

const KeywordName: FunctionComponent<Props> = ({ name }) => {
  return <div className="text-sm text-gray-900">{name}</div>;
};

export default KeywordName;
