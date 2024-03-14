// -----------------Object
// for object we will use interface rather than type alias

// // // Declaring Alias
type User = {
    name: string,
    age: number
};

const userWithAlias: User = {
    name: 'Ashik Siraj',
    age: 20,
}

// extending Alias
type extendedUser = User & {
    role: string;
    address: string;
}

// Declaring a variable using alias and updated alias
const userWithAlias02: extendedUser = {
    name: 'Sirajul Islam',
    age: 63,
    role: 'Head of the family',
    address: 'Behind Al-Baik, Gassala, Mecca '
}





// // // Declaring interrface
interface IUser {
    name: string;
    age: number;
};


const userWithInterface: IUser = {
    name: 'Saif',
    age: 22
}


// extending interface
interface IExtendedIUser extends IUser {
    role: string;
    address: string;
}

// Declaring a variable using interface and updated interface
const userWithInterface02: IExtendedIUser = {
    name: 'Saif',
    age: 23,
    role: 'Ex Team leader of Monster studio LLC.',
    address: 'Bakalia access road',
}




// ------------function-----------
// for function and array we will use type alias , rather than interface because type alias is more readable for function and array than interface.



// Normal function

const addNum = (num1: number, num2: number): number => {
    return num1 + num2;
}

// function using alias

type addNumbersType = (num1: number, num2: number) => number
const addNum02: addNumbersType = (num1, num2) => {
    return num1 * num2;
} 