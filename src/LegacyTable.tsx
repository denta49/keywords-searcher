import { useEffect, useState } from "react";
import { generateData } from "./mockData.ts";
import KeywordType from "./types/KeywordType.ts";
import TableHeader from "./components/table/TableHeader.tsx";
import TableInput from "./components/table/TableInput.tsx";
import TableRow from "./components/table/TableRow.tsx";
import TableColumns from "./components/table/TableColumns.tsx";
import KeywordRow from "./components/keyword/KeywordRow.tsx";

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
      <TableColumns columns={["słowo kluczowe", "wartość", "status"]} />
      <div className="flex flex-col">
        {filteredData.map((item, index) => (
          <TableRow key={item.id ?? index} component={<KeywordRow item={item} />} index={index} />
        ))}
      </div>
    </div>
  );
};

export default LegacyTable;
