const printID = (idNum: string | number) => {
    console.log(`Your ID number is ${idNum}`);
};

// printID(101)  //ok
// printID("202")  //ok
// printID({id:404})  //not ok

const printID002 = (idNum: string | number) => {
    if (typeof idNum === 'string') {
        console.log(`Your ID number is ${idNum.toUpperCase()}`);
    } else {
        console.log(`Your ID number is ${idNum}`);
    }
};

// printID002(101)  //ok
// printID002("twelve")  //ok
// printID002({ id: 404 })  //not ok

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log("Hello! " + x.join(" and "));
        // console.log("Hello! " + x);
    } else {
        console.log("Welcome, lone traveller! " + x);
    }
}

// welcomePeople('fahad');
// welcomePeople(['shariar', 'mamun', 'imran'])

function getFirstThree(x: string[] | string) {
    return x.slice(0, 3)
}
console.log(getFirstThree(['saif', 'ali', 'fahad', 'ashik']));
console.log(getFirstThree('Saiful islam')); 