<?php

	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token, token, TOKEN');
	require 'connect.php';

	$postdata = file_get_contents("php://input");

	if(isset($postdata) && !empty($postdata)) {

		$request = json_decode($postdata);

		if(trim($request->data->name) === '' || trim($request->data->email) === '' || trim($request->data->message) === '') {
			echo json_encode(['error'=>"Please fill in all the fields!"]);
			return http_response_code(400);
		}

		$name = $request->data->name;
		$email = $request->data->email;
		$message = $request->data->message;

		$sql = "INSERT INTO `contact`(`name`, `email`, `message`) VALUES ('{$name}', '{$email}', '{$message}')";

		if(mysqli_query($con, $sql)) {
		  http_response_code(201);
		  $contact = [
			  'name' => $name,
			  'email' => $email,
			  'message' => $message
		  ];
		  echo json_encode(['data'=>$contact]);
	   }
	   else{
		 echo json_encode(['error'=>'Database error!']);
	     return http_response_code(422);
	   }
	}

?>
