// 'use strict';

// var i = 1;

// while (i < 65345) {
// 	i *= 2;
//     console.log(i);
//     i++;
// }


 



'use strict';

var i = 10;

var allCones = Math.floor(Math.random() * 50) + 50;
 // This is how you get a random number between 1 and 5

do {
	var cones = Math.floor(Math.random() * 5) + 1;
	if (cones <= allCones) {
		console.log("sold " + cones + " Cones")
	} else {
		console.log("I dont have more cones")
 	}
} while (allCones < 0); 


// 'use strict';

// var random = Math.floor(Math.random() * 5) + 1;

// while (random < 2) {
// 	random *= 2;
//     console.log(i);
//     random++;
// }


