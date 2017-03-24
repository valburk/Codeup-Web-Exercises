<?php

$adjectives = [ 'Wgly', 'Sassy', 'Feisty', 'Freaky', 'Chunky', 'Wild', 'Phat', 'Slick', 'Slippery', 'Floppy' ];

$nouns = [ 'Hoodrat', 'Mama', 'Dawg', 'Homie', 'Lizard', 'Gangsta', 'Ese', 'Thug', 'Thang', 'Boi'];

function generate($nouns, $adjectives){
shuffle($adjectives);
shuffle($nouns);
echo  "$adjectives[0] "; 
echo "$nouns[0] ";
 } ?>

<!DOCTYPE html>
<html>
<head>
    <title>Server Name Generator</title>
</head>
<body>
<h1> Server Name: </h1>
    <h3><?php echo generate($nouns, $adjectives);

 ?>

 	
 </h3>
</body>
</html>




