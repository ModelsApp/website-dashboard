<?php
$server = "localhost";
$username = "testsquareapp";
$password = "";
$database = "my_testsquareapp";

$con = new mysqli($server,$username,$password,$database);
if (!$con){
die('Could not connect: ' . mysqli_connect_error($con));
}
?>
