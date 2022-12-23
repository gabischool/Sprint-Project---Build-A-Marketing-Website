// Add your Javascript work here

// Task 1: Create a basic Calculator

/* 

1. Start creating three prompts, the first two for the two numbers and the second one for the operation
2. Also declare another variable for the result.
3. Using conditional statement, check if the operation is addition, subtraction, division or multipilcation
4. Add the output to the result variable you created.
5. Console.log the result.

*/
let number1=10;  //prompt("enter number 1");
let number2=9;  //prompt("enter number 2");
let operation='-'  //prompt("enter an operation");
let result=0;
if (operation=='+'){
    result=number1+number2;
    console.log( number1 + " + "+ number2 +  " = "+ result);
}
else if(operation=='-'){
    result=number1-number2;
  console.log( number1 + " - "+ number2 +  " = "+ result);
}
else if(operation=='*'){
    result=number1*number2;
  console.log(number1 + " * "+ number2 +  " = "+ result);
}
else if(operation=='/'){
    result=number1/number2;
  console.log( number1 + " / "+ number2 + " = "+ result);
}
else {
    console.log("you entered a wrong operation please try again")
}

