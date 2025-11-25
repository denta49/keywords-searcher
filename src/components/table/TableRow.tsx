import React, { FunctionComponent } from "react";
import { useTable } from "../../context/TableContentContext.tsx";
import { cn } from "../../lib/cn.ts";

type Props = {
  cells: Record<string, React.ReactNode>;
};
const TableRow: FunctionComponent<Props> = ({ cells }) => {
  const { columns, template } = useTable();
  return (
    <div
      style={{ gridTemplateColumns: template }}
      className="grid items-center border-b border-gray-200 p-3 odd:bg-white even:bg-gray-50"
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
