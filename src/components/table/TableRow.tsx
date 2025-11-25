import React, { FunctionComponent } from "react";

type Props = {
  component: React.ReactNode;
  index: number;
};

const TableRow: FunctionComponent<Props> = ({ component, index }) => {
  return (
    <div
      key={index}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 120px 80px",
        padding: "12px",
        background: index % 2 === 0 ? "#ffffff" : "#f9fafb",
        borderBottom: "1px solid #e5e7eb",
        alignItems: "center",
      }}
    >
      {component}
    </div>
  );
};

export default TableRow;
