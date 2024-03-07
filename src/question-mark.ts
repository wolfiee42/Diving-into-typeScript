

//  //  // ternary operator
const age = 22;

// if else 
if (age >= 18) {
    console.log("He is Adult");
} else {
    console.log('He is Not an adult.');
}

// conditional rendering
const isAdult = age >= 18 ? "Yes, He is an adult." : "NO, He is not an adult."
console.log(isAdult);


//  //  // Nullish Coalesnace Operaor


// // Null and Undifined

const isAuthenticatedUser = true;

//  it works only for undefined and null. other then that, it doesn't work on other falsy value.
const userName = isAuthenticatedUser ?? 'Guest';
console.log(userName);


type Manush = {
    name: string;
    age: number;
    address: {
        city: 'No City',
        road: 'no Road',
        home?: string;
    }
}


const manush01: Manush = {
    name: 'saif',
    age: 22,
    address: {
        city: 'No City',
        road: 'no Road',
    }
}


const home = manush01?.address?.home ?? 'No Home';
console.log({ home });
