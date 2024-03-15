// Arrow Function
const createArray = (param: string): string[] => {
    return [param];
}

const result01 = createArray('Bangladesh');
// console.log(result01);


// generic function
const createArray01 = <T>(param: T): T[] => {
    return [param];
}

const result02 = createArray01<string>('Saudi Arabia');
const result03 = createArray01<boolean>(true);
const result04 = createArray01<{ name: string, age: number }>({ name: 'ashik', age: 20 });

// console.log(result02);
// console.log(result03);
// console.log(result04);

// generic function with tuple
const createArray02 = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2]
}


const result05 = createArray02<boolean, string[]>(false, ['USA']);

// spread operator for object
const crush = 'Habiba Noor';
const myInfo = {
    name: 'Saif',
    age: 22,
    salary: 70000
};
const newData = { ...myInfo, crush };





// spread operator for generic function
const mergeCrushAndMyInfo = <T>(myInfo101: T) => {
    const crush001 = "Habiba Noor";
    const newData101 = { ...myInfo101, crush001 };
    return newData101
}

const myInfo101 = {
    name: 'Saif',
    age: 22,
    salary: 70000,
};


const result101 = mergeCrushAndMyInfo(myInfo101);
// result101. 
// in normal function i would see only crush variable because JS defines in runtime but if i use generic funtion than i can excess everything .