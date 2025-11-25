import { FunctionComponent } from "react";

type Props = {
  content: string;
};

const TableHeader: FunctionComponent<Props> = ({ content }) => {
  return <h2 className="mb-2.5 text-lg font-bold">{content}</h2>;
};

export default TableHeader;
