


function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("fun1")
        }, 3000)
    })
}

function fun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("fun2")
        }, 5000)
    })
}

function fun3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("fun3")
        }, 0)
    })
}

// let result = Promise.all([fun1(), fun2(), fun3()])
// let result = Promise.allSettled([fun1(), fun2(), fun3()]) 
// let result = Promise.race([fun1(), fun2(), fun3()]) // jo phele settle ho gaya wo output hai
let result = Promise.any([ fun1(), fun2(), fun3()]) //  jo phele fulfill ho gaya wo output hai

result.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})