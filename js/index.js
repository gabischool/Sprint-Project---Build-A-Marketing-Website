// Add your Javascript work here

// Task 1: Create a basic Calculator

/* 

1. Start creating three prompts, the first two for the two numbers and the second one for the operation
2. Also declare another variable for the result.
3. Using conditional statement, check if the operation is addition, subtraction, division or multipilcation
4. Add the output to the result variable you created.
5. Console.log the result.

*/
// console.log("heloo")
// let result=num1 + num2
// if (operation="+"){
//     console.log(result)

// // }
// console.log("heyy")
let num1=prompt("enter the first number")
let num2=prompt("enter the first number")
num1= parseInt(num1)
num2= parseInt(num2)



let opperation=prompt("enter an operation")
if (opperation== "+"){
    let result= num1 + num2
   
    console.log( "the result is",result)
}
 else if (opperation== "-"){
    let result= num1 - num2
    console.log( "the result is",result)

    
}
else if (opperation== "*"){
    let result= num1 * num2
    console.log( "the result is",result)

    
}
else if (opperation== "/"){
    let result= num1 / num2
    console.log( "the result is",result)

    
}
else{
  console.log("select an arithmetic operation")
}














