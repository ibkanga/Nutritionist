<?php

	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token, token, TOKEN');
	require 'getUserID.php';

	$postdata = file_get_contents("php://input");

	if(isset($postdata) && !empty($postdata)) {

		$request = json_decode($postdata);

		if(trim($request->article->headline) === '' || trim($request->article->text) === '' || trim($request->article->photourl) === '' || trim($request->token) === '') {
		  echo json_encode(['error'=>'Please fill in all the fields!']);
		  return http_response_code(400);
		}

		$headline = $request->article->headline;
		$text = $request->article->text;
		$photourl = $request->article->photourl;
		$publishedby = $request->token;

		$userid = getUserID($publishedby);

		$sql = "INSERT INTO `articles`(`headline`, `text`, `photourl`, `publishedon`, `publishedby`) VALUES ('{$headline}', '{$text}', '{$photourl}', CURDATE(), '{$userid}')";

		if(mysqli_query($con,$sql)) {
		  http_response_code(201);
		  $article = [
				'headline' => $headline,
				'text' => $text,
				'photourl' => $photourl,
				'publishedby' => $userid
		  ];
		  return json_encode(['data'=>$article]);
	   }
	   else{
		   echo json_encode(['error'=>'Database error!']);
	       http_response_code(422);
	   }
	}

?>
