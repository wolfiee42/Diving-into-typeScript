type FriendType = {
    name: string;
    age?: number; //optional
    address: string;
}

type FriendMarried = boolean;

type CourseName = string;

type Operation = (x: number, y: number) => number;

const friend1: FriendType = {
    name: 'ashik',
    age: 20,
    address: 'makkah, saudi arabia',
};

const friend2: FriendType = {
    name: 'ali',
    age: 22,
    address: '2 no, chittagong uni'
};

const friend3: FriendType = {
    name: 'nahin',
    address: 'bank town, savar'
}


const isFriendMarried: FriendMarried = false;

const NamCourse: CourseName = 'Next Level web development';



const calculate = (num1: number, num2: number, operation: Operation) => {
    return operation(num1, num2);
}

console.log(
    calculate(10, 20, (x, y) => x + y)
);
console.log(
    calculate(10, 20, (x, y) => x - y)
);
console.log(
    calculate(10, 20, (x, y) => x * y)
);
console.log(
    calculate(10, 20, (x, y) => x / y)
);