function deliverNum(input: string | number) {
    if (typeof input === "number") {
        return input * 2;
    }
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    return "Input have to be String or Number";
};

// easy version of upper function 
function deliverNum02(input: string | number) {
    if (typeof input === "string") {
        console.log(input.toUpperCase());
    } else {
        console.log(input * 2);
    }
}

const testCase01 = deliverNum(10);
const testCase02 = deliverNum('not a number');

// console.log(testCase01);
// console.log(testCase02);



// object as a parameter
function sayHOLAA({ id }: { id: number }): { id: number; isActive: boolean } {
    return { id, isActive: id % 2 === 0 }
};

const testcase03 = sayHOLAA({ id: 2 });
const testcase04 = sayHOLAA({ id: 1 });

// console.log(testcase03, testcase04);


// Problem Solving
function processInput(input: number | string, config: { reverse: boolean }): number | string {
    if (typeof input === "number") {
        return input * input;
    }
    if (typeof input === "string") {
        if (config.reverse) {
            return input.toUpperCase().split("").reverse().join("");
        } else {
            return input.toUpperCase()
        }
    }

    return "please, provide a valid input"
}

const testCase06 = processInput(3, { reverse: false })
const testCase07 = processInput("Hello", { reverse: true })
const testCase08 = processInput("lorem ipsum", { reverse: false })

// console.log(testCase06, testCase07, testCase08);


function processData(
    input: string | number,
    config: { reverse: boolean } = { reverse: false }
): string | number {
    if (typeof input === "number") {
        return input * input
    } else {
        if (config.reverse) {
            return input.toUpperCase().split("").reverse().join("");
        } else {
            return input.toUpperCase();
        }
    }
};

const testCase09 = processData(42)
const testCase10 = processData("javaScript", { reverse: false })
const testCase11 = processData("typescript", { reverse: true })

// console.log(testCase09, testCase10, testCase11);

function processData2(
    input: number | string,
    config: { reverse: boolean } = { reverse: false }
): number | string {
    if (typeof input === "number") {
        return input * input;
    } else {
        if (!config.reverse) {
            return input.toUpperCase();
        } else {
            return input.toUpperCase().split("").reverse().join("")
        }
    }
};

const testCase12 = processData2(22);
const testCase13 = processData2("fc barcelona");
const testCase14 = processData2('real mardrid', { reverse: true });


console.log(testCase12, testCase13, testCase14);