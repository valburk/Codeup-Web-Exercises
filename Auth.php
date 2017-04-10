<?php
  class Auth{
  	public static $username = "admin";
  	 public static $password = '$2y$10$SLjwBwdOVvnMgWxvTI4Gb.YVcmDlPTpQystHMO2Kfyi/DS8rgA0Fm';

  	public static function check() { 
  		return isset($_SESSION['logged_in_user']);	

  	}

  	public static function user(){
  		if(self::check()){
  			return $_SESSION['logged_in_user'];	
  		}else{
  			return false;
  		}
  	}

  	public static function attempt($username, $password){

  		if($username === "admin" && password_verify($password, self::$password)){
  			$_SESSION['logged_in_user'] = $username;
  			return true;
  		}else {
  			return false;
  		}
  	}

  	public static function logout(){

	    // clear $_SESSION array
	    session_unset();

	    // delete session data on the server
	    session_destroy();

	    // ensure client is sent a new session cookie
	    session_regenerate_id();

	    // start a new session - session_destroy() ended our previous session so
	    // if we want to store any new data in $_SESSION we must start a new one
	    session_start();

  	}

  }