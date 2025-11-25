import { FunctionComponent } from "react";
import KeywordType from "../../types/KeywordType.ts";

type Props = {
  name: KeywordType["name"];
};

const KeywordName: FunctionComponent<Props> = ({ name }) => {
  return <div style={{ fontSize: "14px", color: "#111827" }}>{name}</div>;
};

export default KeywordName;
