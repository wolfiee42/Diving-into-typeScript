let shunaMiya: any;

// shunaMiya. // getting nothing 

// (shunaMiya as number).  // getting Intellisence 

function kgToGram(kg: string | number): number | string | undefined {
    if (typeof kg === 'string') {
        const intGram = parseFloat(kg) * 1000;
        console.log(`function returned kg in string - > ${kg}kg into gram is ${intGram} gram.`);
    } else if (typeof kg === 'number') {
        const intGram = kg * 1000;
        console.log(`${kg}kg into gram is ${intGram} gram.`);
    } else {
        console.log("Please return a valid variable type.");
        return undefined;
    }
};

kgToGram('10') as string;
kgToGram(50) as number;