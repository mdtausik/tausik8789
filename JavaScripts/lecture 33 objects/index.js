// let product1 = [56835, 4.5, 75, "iphone"]

// console.log(product1["7"]);
// console.log(typeof product1);
// let product2 = {

//     price : 50923,
//     avgRating : 4.5,
//     totalReviews :  75,
//     discount : 50,
//     productName : "iphone 22 pro mmax", 
//     printproductName : function(){
//         console.log(this.productName);
//     },
//     printdiscounts(){
//         console.log(this.discount)
//     }
// }

// let res =  product2.printproductName()
// // console.log(res);
// product2.printdiscounts()


// console.log(Object.keys(product2));
// console.log(Object.values(product2));
// console.log(Object.entries(product2));


// for( value of product1){ //array
//     console.log(value);
// }


// for( let i=0;i<product1.length;i++){  //objects
//     console.log(product1[i]);
// }


// product1.forEach(function(value, index){ //array
//     console.log(value, index);
// })


// let math2 = {
//     abs(){

//     },
//     ceil(){

//     },
//     floor(){

//     }
// }

// product2.first-name  // error
// product2["first-name "] 
// console.log(product2["first-name "]);


// math2.abs()



// function b (fun){
//     console.log("b");
//     console.log(fun);
//     fun()

// }

// b(function (){
//     console.log("a");
// })


// for ( value in product2){
//     console.log(product2[value]);
// }


//destructuring 

// let product1 = [56835, 4.5, 75, "iphone"]

// const [name, price, c, d] = [ "iphone", 56835, 4.5, 75,10]
// console.log(price);



let product2 = {

    price: 50923,
    avgRating: 4.5,
    totalReviews: 75,
    discount: 50,
    productName: "iphone 22 pro mmax",
    printproductName: function () {
        console.log(this.productName);
    },
    printdiscounts() {
        console.log(this.discount)
    }
}


// let{price, printdiscounts, avgRating} = product2  //react

// console.log(price, avgRating);

// for( [key, value] of Object.entries(product2)){
//     console.log(key,value);
// }

// let product1 = [56835, 4.5, 75, 10, "iphone"]

// const[n,p] = ["iphone",56835, 4.5, 75, 10]

// let arr = [53, 15, 626, 7, 43, 57, 23, 54, 752, 43]

// console.log(arr);
// console.log(...arr);

// console.log(Math.min(...arr));

// let a = [1, 2]
// let b = [3,4]

// let c = [...a , ...b]  //array marging by sperate operator
// console.log(...c);

// math.max()


// let product1 = [56835, 4.5, 75, 10, "iphone"]
// const[n,p,...hello] = ["iphone",56835, 4.5, 75, 10]
// console.log(hello);


function add(...numbers) {
    let total = 0;
    for (value of numbers) {
        total += value
    }
    return total;
}

// console.log(add(4, 5, 34, 234, 34242));


let {price, productName, ...remaining} = product2
console.log(price, productName, remaining);

