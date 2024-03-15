// normal array declaration
const rollNumersType: number[] = [44, 34, 12];

// angle bracket syntax
const rollNumers02Type: Array<number> = [44, 34, 12];
const rollNumers03Type: Array<string> = ["44", "23", "11"];
const rollNumers04Type: Array<boolean> = [true, false];

const userNameAndRollType: Array<{ name: string; role: string }> = [
  {
    name: "saif",
    role: "web developer",
  },
  {
    name: "Ashik",
    role: "Bussiness man",
  },
];

// ---------------------- declaring generic type to upper code,

type GenericArrayType<T> = Array<T>;

// normal array declaration
const rollNumers4Type: number[] = [44, 34, 12];

// angle bracket syntax
const rollNumers05Type: GenericArray<number> = [44, 34, 12];
const rollNumers06Type: Array<string> = ["44", "23", "11"];
const rollNumers07Type: Array<boolean> = [true, false];

type NameRollTYpeType = { name: string; role: string };
const userNameAndRoll02Type: GenericArray<NameRollTYpe> = [
  {
    name: "saif",
    role: "web developer",
  },
  {
    name: "Ashik",
    role: "Bussiness man",
  },
];

// --------------tuple in generic type

type GenericTupleType<X, Y> = [X, Y];

// type ObjectEleType = { name: string; salary: number }; //type alias

// in object interface is preferable than type alias
interface ObjectEleInterface {
  name: string;
  salary: number;
}

const relationWithSalaryType: GenericTuple<ObjectEleInterface, string> = [
  {
    name: "saif",
    salary: 12500,
  },
  "Wolfie The Hacker",
];
