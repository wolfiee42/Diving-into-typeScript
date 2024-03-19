function printNum(pt: {
    x: number;
    y: number;
}) {
    console.log("The coordinates x value is " + pt.x);
    console.log("The coordinates x value is " + pt.y);
}
// printNum({ x: 3, y: 8 })



const printPersonDetail = (person001: {
    name: string;
    age: number;
    isMarried: boolean
}) => {
    console.log("This is Mr. " + person001.name + ".");
    console.log("He is " + person001.age + "years old.");
    if (person001.isMarried) {
        console.log("He is married");
    } else {
        console.log("He is yet not married");
    }
};

// printPersonDetail({ name: "Ashik", age: 20, isMarried: false });


function fullName(person: {
    name: string;
    lastName?: string;
}) {

    if (person.lastName !== undefined) {
        console.log(`his name is ${person.name} ${person?.lastName}`);
    } else {
        console.log(`his name is ${person.name}`);
    }
};

// fullName({ name: 'Saif', lastName: "siraj" })
// fullName({ name: 'Saif' })