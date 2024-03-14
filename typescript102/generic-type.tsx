// normal array declaration
const rollNumers: number[] = [44, 34, 12];

// angle bracket syntax
const rollNumers02: Array<number> = [44, 34, 12];
const rollNumers03: Array<string> = ["44", "23", "11"];
const rollNumers04: Array<boolean> = [true, false];

const userNameAndRoll: Array<{ name: string; role: string }> = [
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

type GenericArray<T> = Array<T>;

// normal array declaration
const rollNumers4: number[] = [44, 34, 12];

// angle bracket syntax
const rollNumers05: GenericArray<number> = [44, 34, 12];
const rollNumers06: Array<string> = ["44", "23", "11"];
const rollNumers07: Array<boolean> = [true, false];

type NameRollTYpe = { name: string; role: string };
const userNameAndRoll02: GenericArray<NameRollTYpe> = [
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

type GenericTuple<X, Y> = [X, Y];

const relationWithSalary: GenericTuple<object, string> = [
  {
    name: "saif",
    salary: 12500,
  },
  "Wolfie The Hacker",
  {
    name: "Ashik",
    salary: 41000,
  },
  "Ashik The greater",
];
