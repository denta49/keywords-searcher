import React from "react";
import { cn } from "../../lib/cn.ts";

type TableInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> & {
  value: string;
  onValueChange: (value: string) => void;
};

const TableInput = React.forwardRef<HTMLInputElement, TableInputProps>(
  ({ value, onValueChange, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className={cn("w-full rounded-md border border-gray-300 p-2.5 text-sm", className)}
        {...props}
      />
    );
  },
);

TableInput.displayName = "TableInput";
export default TableInput;
