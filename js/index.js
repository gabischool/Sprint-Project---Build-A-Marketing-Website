// Add your Javascript work here

// Task 1: Create a basic Calculator

/* 

1. Start creating three prompts, the first two for the two numbers and the second one for the operation
2. Also declare another variable for the result.
3. Using conditional statement, check if the operation is addition, subtraction, division or multipilcation
4. Add the output to the result variable you created.
5. Console.log the result.

*/

let num1 = Number(prompt("Enter Number1:"))
let num2 = Number(prompt("Enter Number2:"))
let op = prompt("Enter Operation:")
let result 

if(op === "+"){
    result = num1 + num2
    console.log(result)
}else if(op === "-"){
    result = num1 - num2
    console.log(result)
}else if(op === "/"){
    result = num1 / num2
    console.log(result)
}else if(op === "*"){
    result = num1 * num2
    console.log(result)
}else{
    console.log('Wrong input')
}

