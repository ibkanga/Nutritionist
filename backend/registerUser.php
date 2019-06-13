<?php

	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token, token, TOKEN');
	require 'checkIfUserExists.php';

	$postdata = file_get_contents("php://input");

	if(isset($postdata) && !empty($postdata)) {

		$request = json_decode($postdata);

		if(trim($request->data->username) === '' || trim($request->data->password) === '' ||
		   trim($request->data->firstName) === '' || trim($request->data->lastName) === '' ||
		   trim($request->data->email) === '') {
		  echo json_encode(['error'=>"Please fill in all the fields!"]);
		  return http_response_code(400);
		}

		$firstName = $request->data->firstName;
		$lastName = $request->data->lastName;
		$email = $request->data->email;
		$username = $request->data->username;
		$password = $request->data->password;
		$pass = md5($password);
		$token = sha1(uniqid());

		if(checkIfUserExists($username)) {
		  echo json_encode(['error'=>"Username already exists!"]);
		  return http_response_code(409);
		}

		$sql = "INSERT INTO `users`(`username`, `password`, `email`, `firstname`, `lastname`, `token`) VALUES ('{$username}', '{$pass}', '{$email}', '{$firstName}', '{$lastName}', '{$token}')";

		if(mysqli_query($con,$sql)) {
		  http_response_code(201);
		  echo json_encode(['data'=>$token]);
	  }
	  else{
		 echo json_encode(['error'=>'Database error!']);
		 return http_response_code(422);
	  }

	}

?>
