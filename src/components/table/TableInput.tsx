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
      className="w-full rounded-md border border-gray-300 p-2.5 text-sm"
    />
  );
};

export default TableInput;
