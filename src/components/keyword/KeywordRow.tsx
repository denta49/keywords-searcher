import { FunctionComponent } from "react";
import KeywordName from "./KeywordName.tsx";
import KeywordValue from "./KeywordValue.tsx";
import KeywordStatus from "./KeywordStatus.tsx";
import KeywordType from "../../types/KeywordType.ts";

type Props = {
  item: KeywordType;
};

const KeywordRow: FunctionComponent<Props> = ({ item }) => {
  return (
    <>
      <KeywordName name={item.name} />
      <KeywordValue value={item.value} />
      <KeywordStatus status={item.status} />
    </>
  );
};

export default KeywordRow;
