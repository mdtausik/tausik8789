// function outter() {
//     const random = () => {
//         console.log(this);
//     }
//     random()
// }

// outter()
// // random()

// console.log(this);


function Product(name, price) {
    this.name = name
    this.price = price
}
const p1 = new Product("Iphone 2324 pro max ultra galaxy fold", 3425235531);

const p2 = new Product("Samsung 54321 galaxy fold black hole spaceship", 4532528797);

// console.log(p1);
// console.log(p2.name);




class User {
    country = "india" // default property
    constructor(name, country2) {
        this.name = name // instance property
        this.country = country2 // instance property
    }


    printName() { // instance method
        console.log(this.name);
    }
}


const u1 = new User("Nishant", "India")
const u2 = new User("Akshay", "India")

// u1.name = "Name updated"
// console.log(u1);




class BankAccount {
    #balance; // this is private property
    static totalBankAccount = 0;
    constructor(initialBalance) {
        this.#balance = initialBalance
        BankAccount.totalBankAccount++;
    }

    get() { // method
        console.log(this.#balance);
    }

    withdraw(amount) { // method
        if (amount > this.#balance) {
            console.log("Bete itne paise na hai tere pass");
            return
        }

        this.#balance = this.#balance - amount
    }

    deposit(amount) { // method
        if (amount <= 0) {
            console.log("Bete pagal samjha hua kya, muje aate hai edge cases handle krne garib");
            return
        }
        this.#balance = this.#balance + amount
    }

    static calculateTax(){ // static method
        console.log("calculating tax...");
    }
}

let acc1 = new BankAccount(500);
let acc2 = new BankAccount(500);
let acc3 = new BankAccount(500);
let acc4 = new BankAccount(500);

// acc1.get()
// acc1.withdraw(500)
// acc1.get()
// acc1.deposit(14322)
// acc1.get()
// acc1.withdraw(14000)
// acc1.get()

// acc1.#balance = 1200213123 // Private field '#balance' must be declared in an enclosing class

acc1.get()

acc1.deposit(-111)
acc1.get()
// acc1.calculateTax() // acc1.calculateTax is not a function
// BankAccount.calculateTax 
console.log(BankAccount.totalBankAccount);