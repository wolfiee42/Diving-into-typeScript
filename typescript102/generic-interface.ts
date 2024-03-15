// Generic interface

interface CrushInterface<T, U = null> {
    name: string;
    husband: T;
    wife?: U
}

const cresh01: CrushInterface<boolean, string> = {
    name: 'jarina',
    husband: true,
    wife: 'sadia'
};


const crush02: CrushInterface<string> = {
    name: 'sakina',
    husband: "harun iqbal"
}


interface HusbandIF {
    name: string;
    salary: number
}

const crush03: CrushInterface<HusbandIF> = {
    name: 'habiba',
    husband: {
        name: 'saif',
        salary: 20
    }
}










// normal array declaration
const rollNumers1: number[] = [44, 34, 12];

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

// type ObjectEleType = { name: string; salary: number }; //type alias

// in object interface is preferable than type alias
interface ObjectEleInterface {
    name: string;
    salary: number;
}

const relationWithSalary: GenericTuple<ObjectEleInterface, string> = [
    {
        name: "saif",
        salary: 12500,
    },
    "Wolfie The Hacker",
];
