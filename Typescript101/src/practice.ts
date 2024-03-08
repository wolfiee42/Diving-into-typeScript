// tuple has to be in array and it has fixed length. it has more than one types of data type


// i declared the following variable thinking it is a tuple but it is not. Completely wrong.
let person002: {
    name: string;
    age: number;
} = {
    name: 'ashik',
    age: 22
};


// tuple
let person003: [string, number] = ['Ashik', 20];



// // func
// function GenerateAdder(A: Number)(B: Number) => Number{
//     return function (B: Number) {
//         return A + B,
//     }
// }

// const addTwo = GenerateAdder(2);
// console.log(addTwo(3));
// console.log(addTwo(5));
