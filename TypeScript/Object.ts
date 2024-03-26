interface Cars {
    brand: string;
    model: number;
    Suv?: boolean;
}

type CarInfo = {
    brand: string;
    model: number;
    type: "new" | "used"
}

interface AllCars {
    readonly brand: string;
    model: number;
    Suv?: boolean;
    type?: "new" | "used"
}

let car: Cars = { brand: 'Toyota', model: 2022, Suv: true }
let car02: Cars = { brand: 'Honda', model: 2025 }

let car03: CarInfo = { brand: 'Hyundai', model: 2017, type: 'used' }
let car04: CarInfo = { brand: 'Audi', model: 2023, type: "new" }


let allCars: AllCars[] = [car, car02, car03, car04];

// console.log(allCars);
// allCars[0].brand = "Lamburghini"; //shows an error because in interface i set brands as readonly;

// console.log(allCars);


let product01 = { title: "Shirt", price: 20 };
let product02 = { title: "Pants" };
let product03 = { title: "Shoe", price: 30 };


let products: { title: string; price?: number }[] = [product01, product02, product03];

products.push({ title: "tie" });
products.push({ title: "Belt", price: 5 });


// console.log(products);
