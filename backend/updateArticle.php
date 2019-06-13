<?php

	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: PUT');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token, token, TOKEN');
	require 'getUserID.php';

	$postdata = file_get_contents("php://input");

	if(isset($postdata) && !empty($postdata)) {

		$request = json_decode($postdata);
		$id = $request->article->id;
		$headline = $request->article->headline;
		$text = $request->article->text;
		$photourl = $request->article->photourl;
		$publishedon = $request->article->publishedon;
		$publishedby = $request->token;

		if(trim($headline) === '' || trim($text) === '' || trim($photourl) === '' || trim($publishedon) === '') {
	    echo json_encode(['error'=>"Please fill in all the fields!"]);
		  return http_response_code(400);
		}

		$userid = getUserID($publishedby);

		$sql = "UPDATE `articles` SET `text`='{$text}' WHERE `id` = '{$id}' LIMIT 1";
    if(mysqli_query($con,$sql)) {
		  http_response_code(201);
		  $article = [
				'headline' => $headline,
				'text' => $text,
				'photourl' => $photourl,
				'publishedon' => $publishedon,
				'publishedby' => $userid
		  ];
		  echo json_encode(['data'=>$article]);
    }
    else{
	 	 echo json_encode(['error'=>'Database error!']);
     http_response_code(422);
    }
  }

?>
