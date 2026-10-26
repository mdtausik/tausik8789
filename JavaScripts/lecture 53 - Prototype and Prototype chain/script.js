
// let user = {
//     name : "nishant",
//     age : 12
// }

// // console.log(user);

// Object.prototype.allInOne = function (){
//     console.log("All in one hu mai laddle");
// }

// Array.prototype.printItems = function (){
//     for(let i = 0 ; i < this.length ; i++){
//         console.log(this[i]);
//     }
// }


// let arr = [1, 2, 3]

// // console.log(arr.__proto__.__proto__ === user.__proto__);
// console.log(arr.__proto__);

// let colors = ["red" , "green" , "orange"]
// arr.printItems()
// colors.printItems()

// String.prototype.firstTwoCharacters = function(){ 
//     console.log(this[0]+this[1]);
//     return this[0]+this[1]
// }

// "nishant".firstTwoCharacters()

// "erwfvsc".allInOne()
// arr.allInOne()
// user.allInOne()


// function random(){

// }

// random.allInOne()

// Number(1).allInOne()



// shadowing


let common = {
    eat(){
        console.log("eat");
    },
    name : "adas"
}

let person = Object.create(common)

person.walk = function (){
    console.log("walk");
}

let student = Object.create(person)

student.study = function(){
    console.log("study");
}

console.log(person);
console.log(student);

console.log(student.hasOwnProperty("study"));
console.log(student.hasOwnProperty("eat"));

console.log(Object.getPrototypeOf(Object.getPrototypeOf(student)));

// Object.setPrototypeOf(person , {
//     hello(){}
// })

console.log(Object.getPrototypeOf(student));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(student)));

console.log(student.__proto__);
console.log(student.__proto__.__proto__);



// let obj  = Object.create({})

// console.log(obj);


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

// console.log(u1);
// console.log(u2);

u1.printName()
// u2.printName()

// console.log(u1.printName() === u2.printName());

// console.log(u1 instanceof User);


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

// console.log(acc1 instanceof User);
// console.log(acc1 instanceof BankAccount);
// console.log(Number(1) instanceof Object);  // false
// console.log(new Number(1) instanceof Object); // true
