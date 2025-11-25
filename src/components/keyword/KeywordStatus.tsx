import { FunctionComponent } from "react";
import KeywordStatusType from "../../types/KeywordStatusType.ts";
import { cn } from "../../lib/cn.ts";

type Props = {
  status: KeywordStatusType;
};

const STATUS_BADGE: Record<KeywordStatusType, { label: string; tone: string }> = {
  active: {
    label: "Aktywny",
    tone: "bg-emerald-100 text-emerald-800",
  },
  paused: {
    label: "Wstrzymany",
    tone: "bg-red-100 text-red-800",
  },
};

function getStatusBadge(status: KeywordStatusType) {
  return STATUS_BADGE[status];
}

const KeywordStatus: FunctionComponent<Props> = ({ status }) => {
  const { label, tone } = getStatusBadge(status);
  return (
    <div className="flex justify-center">
      <span className={cn("rounded-xl px-3 py-1 text-xs font-medium", tone)}>{label}</span>
    </div>
  );
};

export default KeywordStatus;
