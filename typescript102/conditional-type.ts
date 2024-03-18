// when a type is depanded on another type, is called conditional type

type variable001 = string;
type variable002 = variable001 extends string ? string : null;
type variable003 = undefined;;
type variable004 = number;


// nested conditional type
type variable005 = variable001 extends string ? string : variable002 extends number ? number : variable003 extends null ? null : never;



// example
type Sheikh = {
    mobile: string;
    cars: string;
};

type checkProperty<T, K> = K extends keyof T ? true : false;
type checkCars = checkProperty<Sheikh, 'cars'>;


// matha noshto example
type friends = "Ashik" | "Ali" | "Nahin";
type RemoveFriends<T, K> = T extends K ? never : T;
type CurrentBhondu = RemoveFriends<friends, "Nahin">;