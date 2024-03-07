const searchName = (value: string | null) => {
    if (value === null) {
        console.log('there is nothing to search');
    } else {
        console.log('Searching');
    }
}

// searchName('saif');
// searchName(null);




// get my car speed from km/h to m/s
const getMyCarSpeed = (speed: unknown) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    else if (typeof speed === 'string') {
        const [value, unit] = speed.split(" ");
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    } else {
        console.log('Provide Number or String Value');
    }
    
}

getMyCarSpeed(10);
getMyCarSpeed("10 re");
getMyCarSpeed(undefined)





// to throw random error for no reason :)
function throwError(message: string) {
    throw new Error(message);
}

// throwError('Bhai! Ki problem?')