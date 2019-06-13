<?php

	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: GET');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token ,Authorization, Token, token, TOKEN');
	require 'getUserID.php';

	if(isset($_GET['token']) && isset($_GET['id'])){
    echo checkUpdateArticle($_GET['token'], $_GET['id']);
	}

	function checkUpdateArticle($token, $id){
		global $con;
		$userid = getUserID($token);
		$sql = "SELECT articles.id FROM articles WHERE articles.id = '{$id}' AND publishedby='{$userid}'";
		$result = mysqli_query($con, $sql);
		$num_rows = $result->num_rows;
	  if($num_rows > 0)
		  return true;
	  else
	  	  return false;
	}

?>
