import React, { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

type Props<T> = {
  items: T[];
  estimateRowHeight?: number;
  overscan?: number;
  className?: string;
  renderRow: (item: T, index: number) => React.ReactNode;
};

export default function TableBodyVirtualized<T>({
  items,
  estimateRowHeight = 48,
  overscan = 10,
  className,
  renderRow,
}: Props<T>) {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => estimateRowHeight,
    overscan,
  });

  return (
    <div ref={parentRef} className={className ?? "h-[560px] overflow-auto"}>
      <div
        style={{
          height: rowVirtualizer.getTotalSize(),
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((v) => {
          const item = items[v.index];
          return (
            <div
              key={v.key}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                transform: `translateY(${v.start}px)`,
              }}
            >
              {renderRow(item, v.index)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
