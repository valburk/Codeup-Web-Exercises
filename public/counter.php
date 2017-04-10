
<?php

function pageController(){
	$data = [];
	if (isset($_GET['i'])){
		$data['det'] = $_GET['i']; 
	}else{
		$data['det'] = NULL;
	}

	if(isset($_GET['r'])){
		$data['counter'] = $_GET['r'];
	}else{
		$data['counter'] = 0;
	}	

	return $data;
}
extract(pageController());

if($det === 'ping'){
	$counter++;
}elseif($det === 'pong'){
	$counter--;
}

  ?>

<!DOCTYPE html>
<html>
<head>
    <title> Counter </title>
</head>
<body>
	<h1> counter </h1>
    <h3>
 		<?= $counter ?>
 	</h3>
 	<a href="/counter.php?i=ping&r=<?= $counter ?>">up</a>
 	<a href="/counter.php?i=pong&r=<?= $counter ?>">down</a>
</body>
</html>