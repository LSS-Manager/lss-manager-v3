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
  $sqllink = mysqli_connect("hostname","user","password","database");
  if(!$sqllink->connect_errno>0){
    $data = $sqllink->real_escape_string($_POST['data']);
    $user = $sqllink->real_escape_string($_POST['uid']);
    $name = $sqllink->real_escape_string($_POST['uname']);
    $game = $sqllink->real_escape_string($_POST['game']);
    $notrack = $sqllink->query("SELECT id FROM notrack WHERE id LIKE '".$user."';");
    $notrack = $notrack->num_rows;
    if($notrack>0){
      $return['success'] = false;
      $return['msg'] = "Not tracking";
    }else{
      $data = $sqllink->real_escape_string(mb_convert_encoding($_POST['data'],"utf8"));
      $date = $sqllink->real_escape_string(time());
      if($return['success'] == true){
        $query = "INSERT INTO users (user,game,name,time,data,origin) VALUES ('".$user."','".$game."',''".$name."','".$date."','".$data."','DE') ON DUPLICATE KEY UPDATE name='".$name."', time='".$date."', data='".$data."';";
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
}
echo json_encode($return);
?>