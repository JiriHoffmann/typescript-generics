


// Simple conditional
type IsStringType<T> = T extends string ? true : false;

type first = "abc";
type second = {
  name: string;
};

type ResultA = IsStringType<first>;
type ResultB = IsStringType<second>;

const a = "abc";
const b = {
    name: "abc",
};

type constTypeA = IsStringType<typeof a>;


type ReturnFn1 = (item: string) => void;
type ReturnFn2 = () => void;

type Props<T extends Array<string | number>> = {
  data: T;
  onPress: T extends string[] ? ReturnFn1 : ReturnFn2;
};
