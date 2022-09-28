function identity<T>(value: T): T {
  return value;
}

let number = 123;
number = identity(number);

const result = identity(123);

let string = "abc";
string = identity(string);



interface TODO {
    id: number;
    title: string;
    completed: boolean;

    // Optional properties
    userId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

/**
 * Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};
type PartialTODO = Partial<TODO>;

/**
 * Make all properties in T required
 */
type Required<T> = {
  [P in keyof T]-?: T[P];
};
type RequiredTODO = Required<TODO>;

/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
type ReadonlyTODO = Readonly<TODO>;

/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
type PickTODO = Pick<TODO, "id" | "title">;

/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
type RecordTODO = Record<"new" | "old" , TODO>;

/**
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T;

type ExcludeExample = Exclude<"a" | "b" | "c", "a" | "b">;

/**
 * Exclude null and undefined from T
 */
 type NonNullable<T> = T & {};
 type NonNullableExample = NonNullable<string | number | undefined | null>;