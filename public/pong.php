
<?php
require 'functions.php';

function pageController(){
	$data = [];
	if(inputHas('i')){
		$data['det'] = inputGet('i');
	} else {
		$data['det'] = 0;
	}
	// if (isset($_GET['i'])){
	// 	$data['det'] = 8$_GET['i']; 
	// }else{
	// 	$data['det'] = NULL;
	// }
	
	if(inputHas('r')){
		$data['counter'] = inputGet('r');
	} else {
		$data['counter'] = 0;
	}

	// if(isset($_GET['r'])){
	// 	$data['counter'] = $_GET['r'];
	// }else{
	// 	$data['counter'] = 0;
	// }	

	return $data;
}
extract(pageController());

if($det === 'hit'){
	$counter++;
}elseif($det === 'miss'){
	$counter = 0;
}

  ?>

<!DOCTYPE html>
<html>
<head>
    <title> Pong </title>
</head>
<body>
	<h1> Pong </h1>
    <h3>
 		<?= escape($counter); ?>
 	</h3>
 	<a href="/ping.php?i=hit&r=<?= $counter ?>">hit</a>
 	<a href="/ping.php?i=miss&r=<?= $counter ?>">miss</a>
</body>
</html>