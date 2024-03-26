// function sayHi(name: string) {
//     console.log(`hi ${name.toUpperCase()}`);
// }
// // sayHi("saide"); // okay
// // sayHi(2) // error

// function discountedPrice(price: number): number {
//     const IsnotDiscount = 'nothing';
//     if (IsnotDiscount) {
//         // return "Product doesnt have any discount"; //error
//         // return price; //okay
//     }
//     return price * 0.9;
// }

// const friends: string[] = ["ashik", "ali", "nahin", "rayan", "ashraf"];

// function checkingsFriends(name: string): boolean {
//     return friends.includes(name);
// };

// // let verifingFriends = "saif" //not okay
// let verifingFriends = "ashik" //okay

// if (checkingsFriends(verifingFriends)) {
//     console.log(`${verifingFriends} is in the array!`);
// } else {
//     console.log(`${verifingFriends} is not in the array!`);
// }




// // Optional chaining 

// const calculateMonthlyMeal = (myExpenses: number, iSpented?: number): number => {
//     return myExpenses - (iSpented || 0);
// }

// const saifsExpenses = calculateMonthlyMeal(5000, 2900);
// const aminsExpenses = calculateMonthlyMeal(5000);


// // Default parameters

// const savingCalculation = (income: number, spent: number = 0): number => {
//     return income - spent;
// };

// const marchSaving = savingCalculation(8000, 4000);
// const aprilSaving = savingCalculation(8000);



function calculateExpenses(message: string, ...expenses: number[]): string {
    const doubledCost = expenses.map((num) => num * 2);
    // return `${message} ${doubledCost}`;
    let previousValue: number = 5000;
    let totalCost = expenses.reduce((pre, cur) => {
        return pre + cur
    }, previousValue);

    return `${message} ${totalCost}`;
}

let aprilExpense = calculateExpenses("Total expense of the 5 members of the house are", 2000, 3000, 1000, 5000, 1500);
console.log(aprilExpense);
