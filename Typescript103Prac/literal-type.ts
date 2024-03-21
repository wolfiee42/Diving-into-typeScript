let changingString = 'Hello World!';

changingString = 'Ola Mundo';

changingString = 'Everything alright!'

changingString;



const constantString = "Sup! dog!";

constantString;

function printText(s: string, alighment: "left" | "center" | "right") {

};

printText("hello, world", "right");
// printText("G'Day, mate", "centre"); 
// wrong, cz the assigned variable is not from the top three

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
};

interface Options {
    width: number;
}

const configure = (x: Options | 'auto') => {

};

configure({ width: 30 });
configure('auto');
// configure('automatic');
// wrong, cz the assigned variable is not from the interface



// //////////////////////////////////       literal Interface
const obj22 = {
    counter: 0
};

const someRandomCondition = ''
if (someRandomCondition) {
    obj22.counter = 1
}