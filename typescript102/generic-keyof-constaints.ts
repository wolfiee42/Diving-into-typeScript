type PersonType = {
    name: string;
    age: number;
    address: string;
};


//  using as OR
type newType = "name" | "age" | "Address";          // did it manually

type newTypeUsingKeyOf = keyof PersonType;

// const a: newType = "" // clicking " " here i am getting suggestions, which means syntax is correct.
// const b: newTypeUsingKeyOf = "" //same as a





// example to understand why we need keyof constaints.
//in function
function getSomething<X, Y extends keyof X>(obj: X, key: Y) {
    obj[key]
};

//in arrow funciton
const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
    obj[key];
}


// correct
const property001 = getProperty({
    name: 'Saif Siraj', age: 22
}, "age");

// incorrect
const property003 = getProperty({
    name: 'Saif Siraj', age: 22
}, "something not name and age");



// correct
const property002 = getSomething({
    name: 'Saif Siraj', age: 22
}, "age");

// incorrect
const property004 = getSomething({
    name: 'Saif Siraj', age: 22
}, "something not name and age");