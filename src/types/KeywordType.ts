import KeywordStatusType from "./KeywordStatusType.ts";

type KeywordType = {
  id: number;
  name: string;
  value: number;
  status: KeywordStatusType;
};

export default KeywordType;
