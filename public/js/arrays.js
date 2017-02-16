(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
var names = [Sandy, Patrick, Squidward, Spongebob]
//     // TODO: Create a log statement that will log the number of elements in the names array.
//     names.length();

//     // TODO: Create log statements that will print each of the names array elements individually.
// })();
// console.log("name one is " names[0])
// console.log("name 2 is " names[1])
// console.log("name 3 is " names[2])
// console.log("name 4 is " names[3])



for (var i = 0; i < names.length; i++) {
    console.log('The name at index ' + i + ' is: ' + shapes[i]);
};


names.forEach(function (element, index, array) {

    console.log('The name at index ' + index + ' is: ' + element);
});