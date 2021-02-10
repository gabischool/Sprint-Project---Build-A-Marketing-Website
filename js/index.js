// Add your Javascript work here

// Task 1: Create a basic Calculator

/* 

1. Start creating three prompts, the first two for the two numbers and the second one for the operation
2. Also declare another variable for the result.
3. Using conditional statement, check if the operation is addition, subtraction, division or multipilcation
4. Add the output to the result variable you created.
5. Console.log the result.

*/
// this challange i did it before

var a = parseInt(prompt('enter your first number'));
var b = prompt('enter your operator like +,-,*,/');
var c = parseInt(prompt('enter your second number'));
switch (b) {
 case ('+'):
 b=a+c;
console.log('your answer is : ' + b);
 break;

 case ('-'):
 b=a-c;
 console.log('your answer is : '+b);
 break;

 case ('*'):
 b=a*c;
 console.log('your answer is : '+b);
 break;   

 case ('/'):
 b=a/c;
 console.log('your answer is  '+ b);
 break;

 default:
    console.log('you enter incorrect symbol');
}
