<?php
$return = array();
$return['success'] = true;
foreach($_POST as $key=>$value){ $_POST[$key] = htmlspecialchars($value); }
if(!isset($_POST['uid']) || strlen($_POST['uid']) == 0)
{
  $return['success'] = false;
  $return['msg'] = "No User-ID given";
}
elseif(!isset($_POST['uname']) || strlen($_POST['uname']) == 0)
{
  $return['success'] = false;
  $return['msg'] = "No Username given";
}
elseif(!isset($_POST['data']) || strlen($_POST['data']) == 0)
{
  $return['success'] = false;
  $return['msg'] = "No Data given";
}
elseif(!isset($_POST['game']) || strlen($_POST['game']) == 0)
{
  $return['success'] = false;
  $return['msg'] = "No Game given";
}
else
{
  $sqllink = mysqli_connect("localhost","user","password","database");
  if(!$sqllink->connect_errno>0){
    $data = $sqllink->real_escape_string($_POST['data']);
    $user = $sqllink->real_escape_string($_POST['uid']);
	$secret = $sqllink->real_escape_string($_POST['key']);
    $name = $sqllink->real_escape_string($_POST['uname']);
    $game = $sqllink->real_escape_string($_POST['game']);
    $notrack = $sqllink->query("SELECT id FROM notrack WHERE id='".$user."';");
    $notrack = $notrack->num_rows;
	if(strlen($user) <= 0 || strlen($secret) <= 0)
	{
      $return['success'] = false;
      $return['msg'] = "";		
	}
    else if($notrack>0){
      $return['success'] = false;
      $return['msg'] = "Not tracking";
    }else{
      $data = $sqllink->real_escape_string(mb_convert_encoding($_POST['data'],"utf8"));
      $date = $sqllink->real_escape_string(time());
      if($return['success'] == true){
		// Haben wir die UID oder Secret bereits?
		$matches = $sqllink->query("SELECT user,secret FROM users WHERE user='".$user."' OR secret='".$secret."';");
		// Wir kennen weder UID, noch Secret. Wir speichern den neuen Nutzer
		if(!$matches->num_rows)
		{
			$query = "INSERT INTO users (user,secret,game,name,time,data) VALUES ('".$user."','".$secret."','".$game."','".$name."','".$date."','".$data."');";
			$result = $sqllink->query($query);
			$id = $sqllink->insert_id;
			if(!$result){
			  $return['success'] = false;
			  $return['msg'] = "SQL fail?";
			}
		}
		else
		{
			$valid = false;
			while ($row = $matches->fetch_assoc())
			{
				if($row['user'] == $user && $row['secret'] == $secret)
				{
					$valid = true;
					$query = "UPDATE users SET game='".$game."', name='".$name."', time='".$date."', data='".$data."' WHERE user='".$user."' AND secret='".$secret."';";
					$result = $sqllink->query($query);
					break;
				}
			}
			if(!$valid)
			{
				$return['success'] = false;
				$return['msg'] = "Possible Spam detected!";
			}
		}
      }
    }
  }else{
    $return['success'] = false;
    $return['msg'] = "No Database Connection";
  }
}
echo json_encode($return);
?>
