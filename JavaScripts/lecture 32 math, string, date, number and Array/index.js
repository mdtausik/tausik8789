

// function convertToPositiveNumber(num){
    
//     return num * -1 ;

// }
// let PositiveNum = convertToPositiveNumber(-10)
// console.log(PositiveNum);




// let PositiveNum2 = Math.abs(10)
// console.log(PositiveNum2);


// console.log(Math.PI);
// console.log(Math.pow(2,3));
// console.log(2**3);
// console.log(Math.sqrt(-1));
// console.log(Math.min(2,56,45,3,4,567,89,7,-6));
// console.log(Math.max(2,3,2,4,8,9,9));

// console.log(Math.round(5.6));
// console.log(Math.round(3.3));
// console.log(Math.round(7.3));
// console.log(Math.round(8.9));
// console.log(Math.round(5.5));

// console.log(Math.round(2.634345));

// console.log(Math.ceil(4.7));
// console.log(Math.floor(5.2));     



// let min = 1;
// let max = 6;
// let result = Math.floor(Math.random() * (max - min + 1)) + min
// console.log(result);

// console.log(Number.isFinite(8374));
// console.log("56");
// console.log(Number.parseInt("56"));


// let num1 = "45";
// let num2 = "75";
// console.log(num1 + num2);  //2 string ko add karna hai 
// console.log(parseInt(num1) + parseInt(num2)); 


// let num = 423.467224
// // console.log(num.toFixed(2));
// console.log(num.toPrecision(4));

// console.log("tausik".toUpperCase());

// let str = "hello dosto"
// console.log(str.includes("ello"));

// let email = "example@gmail.com"
// console.log(email.includes("@") && email.includes("."));


// let filename = "image.pdf"
// console.log(filename.endsWith(".png") || filename.endsWith(".jpg"));


// let greet = "hello dosto, hello bachoo";
// console.log(greet.replace("hello","hii"));
// console.log(greet.replaceAll("hello","hii"));


//Date

console.log(Date.now());  // to get current unix timestamp

let date = new Date ();
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getFullYear());

console.log(date.toLocaleDateString());

console.log(date.toLocaleTimeString());

console.log(date.toDateString());