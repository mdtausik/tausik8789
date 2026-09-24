
// console.log("Task 1");

// console.log("Task 2");

// for(let i = 0 ; i < 10000000000 ; i++){

// }

// let startTime = Date.now() // ms

// while(Date.now() - startTime < 10000){

// }


// console.log("Task 3");

// console.log(globalThis);
// console.log(document);




// console.log("task 1");

// setTimeout(function cb() {
//     console.log("task 2");
// }, 0)

// console.log("task 3");




// console.log("task 1");

// setTimeout(()=>{
//     console.log("task 2");
// }, 4000)

// let startTime = Date.now() // ms

// while(Date.now() - startTime < 3000){

// }

// setTimeout(()=>{
//     console.log("task 5");
// }, 1000)

// setTimeout(()=>{
//     console.log("task 4");
// }, 2000)

// console.log("task 3");




// let count = 1

// let id = setInterval(function () {
//     count++;
//     if (count > 5) {
//         clearInterval(id)
//     }
//     console.log("Hii");

// }, 0)


const body = document.querySelector("body")


let colorStr = "0123456789abcdef"



setInterval(() => {
    let color = ""
    for (let i = 0; i < 6; i++) {
        let randomValue = Math.floor(Math.random() * colorStr.length)
        color = color + colorStr[randomValue]

    }
    body.style.backgroundColor = `#${color}`

}, 500)