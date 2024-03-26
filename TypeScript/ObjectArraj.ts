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

let car: Cars = { brand: 'Toyota', model: 2022, Suv: true }
let car02: Cars = { brand: 'Honda', model: 2025 }

let car03: CarInfo = { brand: 'Hyundai', model: 2017, type: 'used' }
let car04: CarInfo = { brand: 'Audi', model: 2023, type: "new" }