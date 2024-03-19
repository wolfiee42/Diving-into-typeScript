function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
};

greet('Ashik');
// greet(42) //error

function myFavNum(): number {
    return 42;
}
// console.log(myFavNum());

async function getFavFriend(): Promise<string> {
    return 'ashik';
};

const getFavFaculty = async (): Promise<string> => {
    return 'Jhank Sir'
}

// console.log(getFavFriend());
// console.log(getFavFaculty());






///////////////////// Anonymous func


const randomNames001 = ["Ashik", "Saide", "Shahin", "Amin", "Ali"];


// normal function calling inside forEach method
randomNames001.forEach(function (s) {
    console.log(s.toUpperCase());
});


// all this time i used arrow function inside any methods i have been working
randomNames001.forEach(s =>{
    console.log(s.toLowerCase());
})