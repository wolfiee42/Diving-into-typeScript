// type assertion means i am telling ts that i know the data type far more than him. so he better shut his mouth.


let ashik: any;

ashik = 'amar bhondu';
// ashik.  not getting intellisence
// (ashik as string).  i am getting intellisence
// console.log(<string>ashik.length)  // we can do this too


ashik = 20;
// ashik.  not getting intellisence
// (ashik as number). i am getting intellisence

function kgToGramConverter(itemsInKg: number | string): string | number | undefined {
    if (typeof itemsInKg === 'number') {
        const itemsInGram = itemsInKg * 1000;
        console.log(`${itemsInKg}kg in gram is ${itemsInGram} gram.`);
    }
    if (typeof itemsInKg === 'string') {
        const itemsInGram = parseFloat(itemsInKg) * 1000;
        console.log(`${itemsInKg}kg in gram is ${itemsInGram} gram.`);
    }
    return ('Please provide valid input.')
}

const result = kgToGramConverter(10) as number;
const result02 = kgToGramConverter('30') as string;




// tryCatch

type ErrorType = {
    message: string;
}

try {

} catch (error) {
    console.log((error as ErrorType).message);

}