export type PulseListContact = {
  id: string;
  bio: string;
  email: string;
  name: string;
  phone: string;
  photoUrl: string;
  groups: ReadonlyArray<string>;
  tags: ReadonlyArray<string>;
  notes: ReadonlyArray<string>;
  meetingLocation: string;
  meetingDate?: Date;
  homeCity: string;
  homeCountry?: string;
  social: ReadonlyArray<string>;
  payments: ReadonlyArray<string>;
  dateAdded?: Date;
  memberSince?: Date;
  onPulse: boolean;
  followedUp: boolean;
  location?: { latitude: number; longitude: number };
  username?: string;
  last?: boolean;
  initials: string;
};

type ContactGroup = {
  id: string;
  label: string;
  contacts: PulseListContact[];
  avatars: { image: string; initials: string }[];
  last?: boolean;
};

type PlaceGroup = ContactGroup & {
  latitude?: number;
  longitude?: number;
};

export const mapToFlashListItems2 = <
  T extends PulseListContact[] | ContactGroup[] | PlaceGroup[]
>(
  items: T
): Array<T[number] | string> => {
  const listItems: Array<any> = items;
  //...
  return listItems;
};

type List<A = any> = Array<A>;

type Return<F extends Function> = F extends (...args: List) => infer R
  ? R
  : never;

type Parameters<F extends Function> = F extends (...args: infer L) => any
  ? L
  : never;

type Function<P extends List = any, R extends any = any> = (...args: P) => R;

type Promisify<F extends Function> = (
  ...args: Parameters<F>
) => Promise<Return<F>>;

type TestFunc = () => string;

type PromiseFunc = Promisify<TestFunc>;

// How I would write the Promisify
type SimplePromisify<F> = F extends (...args: infer A) => infer R
  ? (...args: A) => Promise<R>
  : never;

type SimplePromiseFunc = SimplePromisify<TestFunc>;
