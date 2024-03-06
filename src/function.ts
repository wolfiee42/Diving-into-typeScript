// normal func
function add(num1: number, num2: number): number {
    return num1 + num2
}

// arrow func
const substrackNum = (num1: number, num2: number): number => {
    return num1 - num2
}

// func methods
const arr: number[] = [3, 6, 4, 9];
const newArr: number[] = arr.map((element: number) => element * element);


// func inside object
const person: {
    name: string;
    age: number;
    balance: number;
    afterRemunaration(remunaration: number): number;
} = {
    name: 'saif',
    age: 22,
    balance: 10500,
    afterRemunaration(remunaration: number) {
        return this.balance + remunaration
    }
}

const friends: string[] = ['ashik', 'saif']
const newFriends: string[] = ['nahin', 'ali', 'rayan', 'ashraf']

const [bhondu] = friends;
const bhai: {
    fullName: string;
    age: number;
} = {
    fullName: 'ashik',
    age: 20
}

const { fullName } = bhai;
// console.log(fullName);

// console.log(friends);
friends.push(...newFriends);
// console.log(friends);


// const greetFriends = (...friends: string[]) => {
//     friends.forEach(friend => {
//         console.log(`hola amigos ${friend}`);
//     });
// }
// greetFriends('ashik', 'ali', 'nahin');






// add(3, 4);
// substrackNum(45, 12);
