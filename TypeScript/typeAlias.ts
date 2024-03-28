
// Type alias
type UserInfo = { id: number; name: string; isActive: boolean }

const john: UserInfo = {
    id: 1,
    name: 'john',
    isActive: true,
};
const susan: UserInfo = {
    id: 1,
    name: 'susan',
    isActive: false,
};

function createUser(user: UserInfo): UserInfo {
    console.log(`Hello there ${user.name.toUpperCase()} !!!`);
    return user;
};



// challenge
type Employee = {
    id: number;
    name: string;
    department: string
};

type Manager = {
    id: number;
    name: string;
    employee: Employee[];
}

type Staff = Employee | Manager;

function printStaffFunction(staff: Staff) {
    if ("employee" in staff) {
        console.log(`${staff.name} is a Manager and he has ${staff.employee.length} memners in his team.`);
    } else {
        console.log(`${staff.name} is from ${staff.department} department.`);
    }
};

const saif: Employee = { id: 1, name: "saif", department: "development" };
const shahin: Employee = { id: 1, name: "shahin", department: "sales" };
const ovijit: Employee = { id: 1, name: "ovijit", department: "production" };
const ashik: Manager = { id: 1, name: "ashik", employee: [saif, shahin, ovijit] };


// printStaffFunction(saif);
// printStaffFunction(shahin);
// printStaffFunction(ashik);


interface Book {
    readonly isbn: number;
    name: string;
    author: string;
    genre?: string;
    // method
    printAuthor(): void;
    printMessage(message: string): void;
}

const book1: Book = {
    isbn: 321,
    name: "software engineer alap",
    author: "shamim",
    printAuthor() {
        console.log(this.author);
    },
    printMessage(message) {
        console.log(`${this.name} ${message}`);
    }
};
book1.printAuthor();
book1.printMessage("is a great book")
// book1.isbn = 11221


const book2: Book = {
    isbn: 2112,
    name: "rahiq al makhtum",
    author: "anonymus",
    genre: "historical",
    printAuthor: () => {
        console.log(book1.author);
    },
    printMessage: (message) => {
        console.log(`${book1.name} ${message}`);
    }
};
// book2.printMessage('is a must read book.')