<?php 

function inputHas($key){
	(isset($_REQUEST[$key])){
}


function inputGet($key){ 
	if (inputHas($key) === true){
		return $_REQUEST[$key];
	}else{
		return NULL;
	} 
}


function escape($input){
	return htmlspecialchars(strip_tags($input));
}

?>