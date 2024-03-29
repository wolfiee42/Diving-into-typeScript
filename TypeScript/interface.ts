interface Person {
    name: string;
    getPersonDetail(): string;
}
interface dogOwner {
    dogName: string;
};
interface Person {
    age: number
}
const guy01: Person = {
    name: "Ashik",
    age: 20,
    getPersonDetail() {
        return `${this.name} is ${this.age} years old.`
    },
};

// console.log(guy01.getPersonDetail());

interface Employee extends Person {
    employyeID: number
}

const employee: Employee = {
    name: "Shahin Alam",
    age: 22,
    employyeID: 89765,
    getPersonDetail() {
        return `${this.name} is ${this.age} years old. his Employee ID is ${this.employyeID}`
    },
};

// console.log(employee.getPersonDetail());

interface Manager extends Person, dogOwner {
    managePeople(): void
}

const person03: Manager = {
    name: 'bob the builder',
    age: 20,
    dogName: "REx the dog",
    getPersonDetail() {
        return `${this.name} is ${this.age} years old.`
    },
    managePeople() {
        console.log("Manageing people 1 2 3");
    },
}

// person03.managePeople()
