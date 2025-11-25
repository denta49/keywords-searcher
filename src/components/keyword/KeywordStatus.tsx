import { FunctionComponent } from "react";
import KeywordStatusType from "../../types/KeywordStatusType.ts";

type Props = {
  status: KeywordStatusType;
};

const KeywordStatus: FunctionComponent<Props> = ({ status }) => {
  return (
    <div className="flex justify-center">
      <span
        className={`rounded-xl px-3 py-1 text-xs font-medium ${
          status === "active" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
        }`}
      >
        {status === "active" ? "Aktywny" : "Wstrzymany"}
      </span>
    </div>
  );
};

export default KeywordStatus;
