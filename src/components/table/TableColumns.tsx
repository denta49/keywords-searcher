import { FunctionComponent } from "react";

type Props = {
  columns?: string[];
};

const TableColumns: FunctionComponent<Props> = ({ columns }) => {
  return (
    <div className="grid [grid-template-columns:1fr_120px_80px] border-b-2 border-gray-200 bg-gray-50 p-3 text-xs font-semibold text-gray-500">
      {columns &&
        columns.map((col) => (
          <div key={col} className="uppercase">
            {col}
          </div>
        ))}
    </div>
  );
};

export default TableColumns;
