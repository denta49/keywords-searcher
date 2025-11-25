import { FunctionComponent } from "react";

type Props = {
  columns?: string[];
};

const TableColumns: FunctionComponent<Props> = ({ columns }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 120px 80px",
        padding: "12px",
        background: "#f9fafb",
        fontWeight: "600",
        fontSize: "12px",
        color: "#6b7280",
        borderBottom: "2px solid #e5e7eb",
      }}
    >
      {columns &&
        columns.map((col) => (
          <div key={col} style={{ textTransform: "uppercase" }}>
            {col}
          </div>
        ))}
    </div>
  );
};

export default TableColumns;
