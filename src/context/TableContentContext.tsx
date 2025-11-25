import React, { createContext, useContext, useMemo } from "react";
import TableColumnDefType from "../types/TableColumnDefType.ts";

type TableCtx = { columns: TableColumnDefType[]; template: string };
const TableContentContext = createContext<TableCtx | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useTable() {
  const ctx = useContext(TableContentContext);
  if (!ctx) throw new Error("Table components must be used inside <Table />");
  return ctx;
}

export function TableContent({
  columns,
  children,
}: {
  columns: TableColumnDefType[];
  children: React.ReactNode;
}) {
  const template = useMemo(() => columns.map((c) => c.width ?? "1fr").join(" "), [columns]);

  return (
    <TableContentContext.Provider value={{ columns, template }}>
      {children}
    </TableContentContext.Provider>
  );
}
