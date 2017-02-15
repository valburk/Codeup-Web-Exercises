"use strict";

var myNameIs = 'Val'; // TODO: Fill in your name here.

// TODO:
function sayHello(name) {
	console.log(" Hello " + name)
}

// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.

// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

sayHello(myNameIs);
// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random
var random = Math.floor((Math.random()*100)+1);

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// // The log should tell the number passed in and whether it is odd or not.
// function isOdd (random){
	
// 	var remainder = input % 2;
//     if (remainder !=== 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// }
function isOdd(number) {
    var remainder = number % 2;
    if (remainder === 0) {
		return false;
		
    } else {
        return true;
       
   } 
// var message = (number % 2 == 0) ? number +"is even" : number + " Is odd";
// console.log(message)
}
if (isOdd(random)) {
	console.log(random + " is odd");
} else {
	console.log(random + " is even");
}
// console.log(isOdd(random));
// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.