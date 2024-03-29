// Challenges

interface Persons {
    name: string;
};

interface DogOwner extends Persons {
    dogName: string;
};

interface Manager extends Persons {
    managePeople(): void;
    delegateTasks(): void
};

function getEmployee(): Persons | DogOwner | Manager {
    const randomNumber = Math.random()
    if (randomNumber < 0.33) {
        return {
            name: "Ashik"
        };
    } else if (randomNumber < 0.66) {
        return {
            name: "Ali",
            dogName: "Rex"
        }
    } else {
        return {
            name: "Mr. Manager",
            managePeople() {
                console.log("Managing People");
            },
            delegateTasks() {
                console.log("Delegating tasks to every member");
            }
        };
    }
};

const employee: Persons | DogOwner | Manager = getEmployee();
// console.log(employee);


// manager checker

function isManager(object: Persons | DogOwner | Manager): object is Manager {
    return "managePeople" in object
}

if (isManager(employee)) {
    employee.delegateTasks();
}