// function outter(){
//     let x = 1;
//     function inner(){
//         console.log(x);
//     }
    
//     return inner
// }

// let res = outter()

// res()


// let arr = [1, 3, 4, 5 , 6]

// let output = arr.map((item) => {
//     if( item >= 5){
//         return item + 5
//     }
//     return item

// })

// console.log(output);


// document.querySelector("#inner").addEventListener("click" ,() => {
//     console.log("inner");
// })

// document.querySelector("button").addEventListener("click" ,(e) => {
//     e.stopPropagation()
//     console.log("button");
// })




function fun1(cb1){
    setTimeout(() => {
        let price = 500;
        cb1(price)
    }, 3000)
}

function fun2(cb2){
    setTimeout(() => {
        let discount = 50;
        cb2(discount)
    }, 3000)
}


fun1((price) => {
    fun2((dis) => {
        console.log(dis);
    })
})