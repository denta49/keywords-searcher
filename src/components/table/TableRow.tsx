import React, { FunctionComponent } from "react";

type Props = {
  component: React.ReactNode;
  index: number;
};

const TableRow: FunctionComponent<Props> = ({ component, index }) => {
  return (
    <div
      key={index}
      className={`grid [grid-template-columns:1fr_120px_80px] items-center border-b border-gray-200 p-3 ${
        index % 2 === 0 ? "bg-white" : "bg-gray-50"
      }`}
    >
      {component}
    </div>
  );
};

export default TableRow;
