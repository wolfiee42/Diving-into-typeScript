const doSomething = (x: string | null) => {
    if (x === null) {
        // do nothing
    } else {
        console.log(`hello! ${x!.toUpperCase()}`); // here !. syntax after x is called non-null assertion
    }
};


const liveDangously = (x?: number | null) => {
    // no error
    console.log(x!.toFixed()); // x? syntax means sure that type x is not null whether undefined.
}