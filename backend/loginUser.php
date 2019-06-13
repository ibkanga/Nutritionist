<?php

	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: GET, POST');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token, token, TOKEN');
	require 'connect.php';

	$username = isset($_GET['username']) ? $_GET['username'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';
	$pass = md5($password);

	if($username === '' || $password === '') {
	  echo json_encode(['error'=>'Please enter your username and password!']);
	  return http_response_code(400);
	}

	$sql = "SELECT * FROM users WHERE username='{$username}' AND password='{$pass}'";
	$result = mysqli_query($con, $sql);
	$num_rows = $result->num_rows;

	if($num_rows > 0) {
	  $token = sha1(uniqid());
	  $sql2 = "UPDATE users SET token='{$token}' WHERE username='{$username}'";
	  $result2 = mysqli_query($con, $sql2);
	  http_response_code(201);
	  echo json_encode(['data'=>$token]);
	}
	else {
	  echo json_encode(['error'=>'Invalid username/password!']);
	  return http_response_code(401);
	}

?>
