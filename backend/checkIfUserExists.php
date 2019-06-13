<?php
	
	require 'connect.php';
	
	function checkIfUserExists($username){
		global $con;
		$sql = "SELECT * FROM users WHERE username='{$username}'";
		$result = mysqli_query($con, $sql);
		$num_rows = $result->num_rows;
		
		if($num_rows > 0) {
			return true;
		}
		else{
			return false;
		}
	}
	
?>