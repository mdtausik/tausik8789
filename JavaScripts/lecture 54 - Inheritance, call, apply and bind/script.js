

let user1 = {
    name: "Ranit",
    age: 23,
}

let user2 = {
    name: "Mansi",
    age: 22,
}

let user3 = {
    name: "Taushif",
    age: 200,
}

function printName(country, state) {
    console.log(`Hii , I am ${this.name}, from ${country}, ${state}`);
}

// user1.printName()

// user1.printName.call(user2)
// user1.printName.call(user3)


// printName.call(user1, "India", "Delhi")
// printName.call(user2, "Australia", "Melbourne")
// printName.call(user3, "Sri Lanka", "Colombia")

// printName.apply(user1, ["India", "Delhi"])
// printName.apply(user2, ["Australia", "Melbourne"])
// printName.apply(user3, ["Sri Lanka", "Colombia"])

const newFun = printName.bind(user1 ,"India", "Delhi")
console.log(newFun);

newFun()