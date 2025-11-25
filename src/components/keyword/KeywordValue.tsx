import { FunctionComponent } from "react";
import KeywordType from "../../types/KeywordType.ts";

type Props = {
  value: KeywordType["value"];
};

const KeywordValue: FunctionComponent<Props> = ({ value }) => {
  return (
    <div
      style={{
        textAlign: "right",
        fontSize: "14px",
        fontWeight: "500",
        color: "#374151",
      }}
    >
      {value.toFixed(2)}
    </div>
  );
};

export default KeywordValue;
