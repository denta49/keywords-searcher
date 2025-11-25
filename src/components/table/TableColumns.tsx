import { FunctionComponent } from "react";
import { cn } from "../../lib/cn.ts";
import { useTable } from "../../context/TableContentContext.tsx";

const TableColumns: FunctionComponent = () => {
  const { columns, template } = useTable();

  return (
    <div
      style={{ gridTemplateColumns: template }}
      className="grid border-b-2 border-gray-200 bg-gray-50 p-3 text-xs font-semibold text-gray-500"
    >
      {columns.map((c) => (
        <div key={c.key} className={cn("uppercase", c.headerClassName)}>
          {c.label}
        </div>
      ))}
    </div>
  );
};

export default TableColumns;
