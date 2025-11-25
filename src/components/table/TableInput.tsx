import React, { FunctionComponent } from "react";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const TableInput: FunctionComponent<Props> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: "10px",
        width: "100%",
        border: "1px solid #ccc",
        borderRadius: "6px",
        fontSize: "14px",
      }}
    />
  );
};

export default TableInput;
