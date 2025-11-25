import TableColumnDefType from "../../types/TableColumnDefType.ts";

const columns: TableColumnDefType[] = [
  {
    key: "keyword",
    label: "słowo kluczowe",
    width: "1fr",
    headerClassName: "text-left tracking-wide",
    cellClassName: "min-w-0 text-sm text-gray-900 truncate",
  },
  {
    key: "value",
    label: "wartość",
    width: "220px",
    headerClassName: "text-right tabular-nums tracking-wide",
    cellClassName: "text-center text-sm font-medium tabular-nums text-gray-700",
  },
  {
    key: "status",
    label: "status",
    width: "160px",
    headerClassName: "text-center tracking-wide",
    cellClassName: "flex justify-center",
  },
];

export default columns;
