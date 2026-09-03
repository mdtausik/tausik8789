// function totalMarks(studenName, matheMarks, scienceMaarks, sanakritMarks){
//     console.log(`${studenName} total marks : `, matheMarks + scienceMaarks + sanakritMarks);
// }
// totalMarks("Alok", 46,56,23);
// totalMarks("Addi", 46,56,43);
// totalMarks("Karan", 46,55,13);
// totalMarks("Anu", 46,76,63);




// function greetingMsg(userName="guest", greet="hii"){
//     console.log(`${greet},${userName}`);//iska use jyada hoga 
//     // console.log(greet+" "+userName); 
// }
// greetingMsg("priyanshu")
// greetingMsg("satyam", "Hello")
// greetingMsg("anshika")
// greetingMsg("saif")



// function calculator(num1, num2, operator) {
//     switch (operator) {
//         case "+":
//             console.log(`${num1} ${operator} ${num2} =`, num1 + num2);
//             break;
//         case "-":
//             console.log(`${num1} ${operator} ${num2} =`, num1 - num2);
//             break;
//         case "*":
//             console.log(`${num1} ${operator} ${num2} =`, num1 * num2);
//             break;
//         case "/":
//             console.log(`${num1} ${operator} ${num2} =`, num1 / num2);
//             break;
//     }
// }
// calculator(4, 5, "-")



function totalMarks(matheMarks, scienceMarks, sanakritMarks){

    return  matheMarks + scienceMarks + sanakritMarks;
}

function calPercentage(studenName, matheMarks, scienceMarks, sanakritMarks){
    let total = totalMarks( matheMarks , scienceMarks , sanakritMarks);
    let Percentage = (total/300)*100;
    console.log(`${studenName} Percentage`,Percentage)
    return Percentage
}


// // totalMarks("Alok", 46,56,23);
// // totalMarks("Addi", 46,56,43);
// // totalMarks("Karan", 46,55,13);
// // totalMarks("Anu", 46,76,63);

//after array class
let students = [["Alok", 46, 56, 23], ["Addi", 46, 56, 43], ["Karan", 46, 55, 13], ["Anu", 46, 76, 63]]

for (let i = 0; i < students.length; i++) {
    calPercentage(students[i][0],students[i][1],students[i][2],students[i][3])
}


// let response = calPercentage("Alok",46,56,23)
// console.log(response);


// //function decleration(here we can use before decleration)
// fun1()
// function fun1(){
//     console.log("function decleration");
// }


// //expression(it gives error you cannot use before initilisatin in function expresion ->because of hosting)
// console.log(add(5 , 7));
// let add = function(num1, num2){
//     return num1 + num2
// }


//arroe functions

//syntex 1
// let add = num1 => num1 + 4;

// //syntex 2
// let add = (num1 , num2) => num1 + num2;

//syntex 3
// let add = (num1 , num2) => {
//     //somethings
//     //somethings
//     return num1 + num2
// };

// console.log(add(5, 7));