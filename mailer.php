<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$phone = $_POST['phone'];
$msg = $_POST['message'];

$to = "info@9930i.com";
$subject = $subject;
$txt = "Name : ".$name.", Email : ".$email.", Contact No. : ".$phone.", message : ".$msg;
$headers = "From: info@shahsoftsol.com" . "\r\n" ."CC: info@9930i.com";

$result = mail($to,$subject,$txt,$headers);
if($result==true){
	echo "Thank You. Your Request has been submitted. Our team will reach you soon.";
}else{
	echo 'Unable to send request. Please try again.';
	$errorMessage = error_get_last()['message'];
	echo $errorMessage;
}
// echo $name." ".$email." ".$subject." ".$phone." ".$msg;
// echo "Your Request Submitted. Our team will reach you soon.";
?>