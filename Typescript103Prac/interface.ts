interface Point001 {
    x: number;
    y: number;
};

const printNumber001 = (pt: Point001) => {
    console.log("The coordinate'x x value is " + pt.x);
    console.log("The coordinate'x y value is " + pt.y);
};

printNumber001({ x: 3, y: 4 });




// differnet between interface and type is that interface is expanable, wherease type is bit more complicated to expand.



// Interface
interface Animal {
    name: string;
};

interface Bear extends Animal {
    honey: boolean;
};

interface Lion extends Animal {
    bull: boolean;
}

const something001: Animal = {
    name: 'Not bear'
}

const something: Bear = {
    name: 'Polar Bear',
    honey: true,
};

const sopmething002: Lion = {
    name: 'King of the Jungle AKA Lion',
    bull: true
}


type Bird = {
    name: string;
}

type Breed = Bird & {
    breed: string;
}

const bird001: Bird = {
    name: 'Pigeon',
}

const bird002: Breed = {
    name: 'chicken',
    breed: 'Which ever it is, if it is Chicken! i am down!!'
}
