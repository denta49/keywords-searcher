import React, { FunctionComponent } from "react";

type Props = {
  component: React.ReactNode;
};

const TableRow: FunctionComponent<Props> = ({ component }) => {
  return (
    <div className="grid [grid-template-columns:1fr_120px_80px] items-center border-b border-gray-200 p-3 odd:bg-white even:bg-gray-50">
      {component}
    </div>
  );
};

export default TableRow;
