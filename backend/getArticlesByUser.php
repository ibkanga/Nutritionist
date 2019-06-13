<?php

	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: GET');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token, token, TOKEN');
	require 'getUserID.php';

	$token = '';
	if(isset($_GET['token'])){
	    $token = $_GET['token'];
	}

	$articles = [];
	$userid = getUserID($token);

	$sql = "SELECT articles.id, headline, text, photourl, publishedon, publishedby FROM articles
			    WHERE publishedby='{$userid}'";
	if($result = mysqli_query($con, $sql)) {
		$i = 0;
		while($row = mysqli_fetch_assoc($result)) {
			$articles[$i]['id'] = $row['id'];
			$articles[$i]['headline'] = $row['headline'];
			$articles[$i]['text'] = $row['text'];
			$articles[$i]['photourl'] = $row['photourl'];
			$articles[$i]['publishedon'] = $row['publishedon'];
			$articles[$i]['publishedby'] = $row['publishedby'];
			$i++;
		}
		echo json_encode(['data'=>$articles]);
	}
	else{
		return http_response_code(404);
	}

?>
