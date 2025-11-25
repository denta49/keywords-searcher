import { useEffect, useState } from "react";
import { generateData } from "./mockData.ts";
import KeywordType from "./types/KeywordType.ts";
import TableHeader from "./components/table/TableHeader.tsx";
import TableInput from "./components/table/TableInput.tsx";
import TableRow from "./components/table/TableRow.tsx";
import TableColumns from "./components/table/TableColumns.tsx";
import { TableContent } from "./context/TableContentContext.tsx";
import KeywordName from "./components/keyword/KeywordName.tsx";
import KeywordValue from "./components/keyword/KeywordValue.tsx";
import KeywordStatus from "./components/keyword/KeywordStatus.tsx";
import columns from "./components/table/TableColumnsDefs.ts";

const LegacyTable = () => {
  const [data, setData] = useState<KeywordType[]>([]);
  const [filteredData, setFilteredData] = useState<KeywordType[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const rawData = generateData();
    setData(rawData);
    setFilteredData(rawData);
  }, []);

  useEffect(() => {
    const result = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    setFilteredData(result);
  }, [search, data]);

  return (
    <div className="p-5">
      <div className="mb-5">
        <TableHeader content={`Słowa Kluczowe (${filteredData.length} z ${data.length})`} />

        <TableInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Wyszukaj słowo kluczowe..."
        />
      </div>
      <TableContent columns={columns}>
        <TableColumns />
        <div className="flex flex-col">
          {filteredData.map((item) => (
            <TableRow
              key={item.id}
              cells={{
                keyword: <KeywordName name={item.name} />,
                value: <KeywordValue value={item.value} />,
                status: <KeywordStatus status={item.status} />,
              }}
            />
          ))}
        </div>
      </TableContent>
    </div>
  );
};

export default LegacyTable;
