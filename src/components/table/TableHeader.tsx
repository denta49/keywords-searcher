import { FunctionComponent } from "react";

type Props = {
  content: string;
};

const TableHeader: FunctionComponent<Props> = ({ content }) => {
  return <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>{content}</h2>;
};

export default TableHeader;
