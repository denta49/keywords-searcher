import React, { FunctionComponent } from "react";
import { useTable } from "../../context/TableContentContext";
import { cn } from "../../lib/cn";

type Props = {
  index: number;
  cells: Record<string, React.ReactNode>;
};

const TableRow: FunctionComponent<Props> = ({ index, cells }) => {
  const { columns, template } = useTable();

  return (
    <div
      style={{ gridTemplateColumns: template }}
      className={cn(
        "grid items-center border-b border-gray-200 p-3",
        index % 2 === 0 ? "bg-white" : "bg-gray-50",
      )}
    >
      {columns.map((c) => (
        <div key={c.key} className={cn("min-w-0", c.cellClassName)}>
          {cells[c.key] ?? null}
        </div>
      ))}
    </div>
  );
};

export default TableRow;
