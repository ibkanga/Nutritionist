<?php
	require 'connect.php';

	function getUserID($token){
		global $con;
		$user = '';
		$sql = "SELECT id FROM users WHERE token='{$token}'";
		$result = mysqli_query($con, $sql);
		$row = mysqli_fetch_assoc($result);
		$user = $row;
		return $user['id'];			
	}

?>
