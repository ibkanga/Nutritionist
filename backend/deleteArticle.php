<?php

	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: DELETE');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token, token, TOKEN');
	require 'connect.php';

	$id = isset($_GET['id']) ? intval($_GET['id']) : '';

	if($id === ''){
	  echo json_encode(['error'=>'An error occurred. Please refresh the page and try again!']);
    return http_response_code(400);
	}

	$sql = "DELETE FROM `articles` WHERE `id`='{$id}' LIMIT 1";

	if(mysqli_query($con, $sql)){
	  return http_response_code(204);
	}
	else {
	  echo json_encode(['error'=>'Database error!']);
	  return http_response_code(422);
	}

?>
