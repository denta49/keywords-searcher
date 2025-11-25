import { FunctionComponent } from "react";
import KeywordStatusType from "../../types/KeywordStatusType.ts";

type Props = {
  status: KeywordStatusType;
};

const KeywordStatus: FunctionComponent<Props> = ({ status }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          padding: "4px 12px",
          borderRadius: "12px",
          fontSize: "12px",
          fontWeight: "500",
          background: status === "active" ? "#d1fae5" : "#fee2e2",
          color: status === "active" ? "#065f46" : "#991b1b",
        }}
      >
        {status === "active" ? "Aktywny" : "Wstrzymany"}
      </span>
    </div>
  );
};

export default KeywordStatus;
