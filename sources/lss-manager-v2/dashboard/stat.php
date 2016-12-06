<?php
$sqllink = mysqli_connect("SERVER","USERNAME","PASSWORD","TABELLE") or die("Error: " . mysqli_error($link));
$return = array();
$return['success'] = true;
if(!$sqllink->connect_errno>0){
	foreach($_REQUEST as $key=>$value){ $_REQUEST[$key] = htmlspecialchars($value); }
	foreach($_GET as $key=>$value){ $_GET[$key] = htmlspecialchars($value); }
	foreach($_POST as $key=>$value){ $_POST[$key] = htmlspecialchars($value); }
	$user = $sqllink->real_escape_string($_GET['user']);
	$notrack = $sqllink->query("SELECT id FROM notrack WHERE id LIKE '".$user."';");
	$notrack = $notrack->num_rows;
	if($notrack>0){
		$return['success'] = true;
		$return['msg'] = "Not tracking";
	}else{
		$name = $sqllink->real_escape_string($_GET['name']);
		$data = $sqllink->real_escape_string(mb_convert_encoding($_POST['data'],"utf8"));
		if(!isset($user) || strlen($user)==0){
			$return['success'] = false;
			return false;
		}elseif(!isset($name) || strlen($name)==0){
			$return['success'] = false;
			return false;
		}elseif(!isset($data) || strlen($data)<2){
			$return['success'] = false;
			return false;
		}
		$date = time();
		
		if($return['success'] == true){
			$query = "INSERT INTO users (user,name,time,data,origin) VALUES ('".$user."','".$name."','".$date."','".$data."','DE') ON DUPLICATE KEY UPDATE name='".$name."', time='".$date."', data='".$data."';";
			$result = $sqllink->query($query);
			$id = $sqllink->insert_id;
			if(!$result){
				$return['success'] = false;
				$return['msg'] = "SQL fail?";
			}
		}
	}
}else{
	$return['success'] = false;
	$return['msg'] = "No Database Connection";
}
echo json_encode($return);
?>
