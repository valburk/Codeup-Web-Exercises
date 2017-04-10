<?php
require_once "../Auth.php";
session_start();

if(!Auth::check()){
	header('Location: login.php');
	die();

}
?>


<!DOCTYPE html>
<html>
<head>
    <title> Woohoo </title>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<link href='http://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.13.1/jquery.validate.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="CSS2/login.css">
</head>
<body>
	<div class="text-center testz" style="padding:50px 0">
	<h1> Welcome, Guest! 
	 </h1>
	<a href="/logout.php">Log out</a>
	</div>

</body>
</html>