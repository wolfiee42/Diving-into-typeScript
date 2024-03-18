// normal JS map
const arrOfNumber = [1, 2, 3]; //  ['1', '2,' '3']
const arrOfString = arrOfNumber.map(number => number.toString());

console.log(arrOfString);


type Volume = {
    height: number;
    width: number;
    depth: number
}

// type A = AreaNumber['height']   //look up types
// type B = keyof AreaNumber  // 'width' | 'height'

type Area<T> = {
    // [key in keyof Volume]: Volume[key] // proper solution.
    // to make it more generic

    [key in keyof T]: T[key]
}

const area001: Area<{ name: string }> = { name: 'wolfie' };