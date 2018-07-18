<?php
   $servername = "www.oswalcorns.com";
   $username = "app_spade_9930";
   $password = "APP@Spade@9930";
   $dbname = "spade_users";
   $conn = new mysqli($servername, $username, $password, $dbname);
   $email = $_GET['email'];

   date_default_timezone_set('Asia/Kolkata');
   $date_today=date("Y-m-d H:i:s");
   // $userIP = gethostbyname(trim(`hostname`));
   $userIP = get_client_ip();
   // echo $userIP;

  //  if ($conn->connect_error){
  //    	die("Connection failed: " . $conn->connect_error);
 	// }
 	$sql= "INSERT INTO mail_clicks (ip,email,time_stamp) VALUES ('".$userIP."','".$email."','".$date_today."')";
	if (!mysqli_query($conn,$sql)){
  		// echo("Error description: " . mysqli_error($conn));
  		header('Location: http://www.croptrails.farm/');
  	}else{
  		header('Location: http://www.croptrails.farm/');
  	}

    mysqli_close($conn);

    function get_client_ip(){
        $ipaddress = '';
        if (getenv('HTTP_CLIENT_IP'))
            $ipaddress = getenv('HTTP_CLIENT_IP');
        else if(getenv('HTTP_X_FORWARDED_FOR'))
            $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
        else if(getenv('HTTP_X_FORWARDED'))
            $ipaddress = getenv('HTTP_X_FORWARDED');
        else if(getenv('HTTP_FORWARDED_FOR'))
            $ipaddress = getenv('HTTP_FORWARDED_FOR');
        else if(getenv('HTTP_FORWARDED'))
           $ipaddress = getenv('HTTP_FORWARDED');
        else if(getenv('REMOTE_ADDR'))
            $ipaddress = getenv('REMOTE_ADDR');
        else
            $ipaddress = 'UNKNOWN';
        return $ipaddress;
    }

?>