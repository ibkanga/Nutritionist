<?php

	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: GET');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token, token, TOKEN');
	require 'connect.php';

	$id = isset($_GET['id']) ? intval($_GET['id']) : '';

	$article = [];
	$sql = "SELECT articles.id, headline, text, photourl, publishedon, username FROM articles
			    JOIN users ON articles.publishedby = users.id AND articles.id='{$id}'";

	if($result = mysqli_query($con, $sql)) {
		$num_rows = $result->num_rows;
		if($num_rows > 0) {

			$row = mysqli_fetch_assoc($result);

			$article['id'] = $row['id'];
			$article['headline'] = $row['headline'];
			$article['text'] = $row['text'];
			$article['photourl'] = $row['photourl'];
			$article['publishedon'] = $row['publishedon'];
			$article['publishedby'] = $row['username'];

			echo json_encode(['data'=>$article]);
		}
		else{
			echo json_encode(['error'=>"Not found!"]);
		  return http_response_code(404);
		}
	}
	else{
		return http_response_code(404);
	}

?>
