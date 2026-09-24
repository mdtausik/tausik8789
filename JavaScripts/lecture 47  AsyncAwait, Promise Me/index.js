"use strict"

// async function fun2() {
//     // console.log("Hii");
//     return 11
// }

// function fun1() {
//     // console.log("Hello");

//     // return Promise.resolve(10)
//     return 10
// }

// // console.log(fun2());
// fun2().then((data) => {
//     console.log(data);
// })
// console.log(fun1());




// console.log("a");

// async function fun3(){
//     console.log("b");
// }

// console.log("c");


// fun3()




// async function fun3() {
//     return "hello"
// }

// function fun4() {
//     return Promise.resolve("hiiii")
// }
// console.log("1");
// async function fun5() {

//     // fun3().then(data => {
//     //     console.log(data);
//     // })

//     console.log("2");
//     let data = await fun3()
//     console.log("3");
//     let data2 = await fun4()
//     console.log("4");
//     console.log(data,data2);
// }

// console.log("nishant");

// fun5()

// console.log("5");



// console.log("a");

// async function random() {


//     console.log("b");

//     await 1

//     console.log("c");

// }

// random()

// console.log("d");





// let data;

// async function userData() {
//     return { name: "nishant" }
// }

// function fun4() {
//     return Promise.reject("error aa gaya")
// }

// async function fun5() {
//     try {
//         data = await userData()
//         let data2 = await fun4()
//         console.log(data, data2);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log("mai toh hamesha run karunga");
//     }
// }

// fun5()



function searchPizza() {
    return new Promise(function (resolve, reject) {
        console.log("Pizza searching...");
        setTimeout(function fun1() {
            console.log("Here is the Pizza's Menu.");
            let price = 500;
            // a(price)
            resolve(price)
        }, 2000)
    })
}

function addToCart() {
    return new Promise(function (resolve, reject) {
        console.log("Pizza adding to cart...");
        setTimeout(function fun2() {
            console.log("Pizza Added to cart");
            resolve()
        }, 3000)
    })
}

function paymet(price) {
    return new Promise(function (resolve, reject) {
        console.log(`Payment Initiated , Amount : ${price}`);
        setTimeout(function fun3() {

            let isPaymentSuccessful = false

            if (isPaymentSuccessful) {
                console.log(`Payment Completed, Amount : ${price}`);
                resolve()
            } else {
                reject("Bhaiya payment failed")
            }


        }, 5000)
    })
}

// let res = searchPizza()

// res.then(function (price) {
//     return addToCart(price)
// }).then(function (price) {
//     return paymet(price)
// }).then(function () {
//     console.log("Bss Aa hee gaya Pizza");
// }).catch(function (err) {
//     console.log(err);
// })


async function orderFood() {
    try {
        let price = await searchPizza()
        await addToCart()
        await paymet(price)
        console.log("Bss Aa hee gaya Pizza");
    } catch (error) {
        console.log(error);
    }
}

orderFood()
