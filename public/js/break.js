

console.log("random odd number skipping is " + luckyNumber);

do{
	luckyNumber = Math.floor((Math.random()* 50)+1);
} while  (luckyNumber % 2 !==0)

for (var i = 1; i < 100; i++) {
	if (i === 3) { 
		console.log("skiping this number: " + luckyNumber);
		continue;
	}	
	


	if (i % 2 !==0) {
		console.log("heres an odd number" + i);

	}
}// break; 

 // continue;

