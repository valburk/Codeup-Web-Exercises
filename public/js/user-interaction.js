"use strict";

// TODO: Ask the user for their name.
do{ 
var response = prompt("What is your name?")//       Keep asking if an empty input is provided.
} while (!response) // prompt("What is your name?"); 


// TODO: Show an alert message that welcomes the user based on their input.

alert(" Wow cool name, " + response );

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
// var confirmed = confirm("do you like pizza");
if(confirm("do you like pizza?")){
	alert("Pizza is good!")
} else {
	alert("you're weird")
}