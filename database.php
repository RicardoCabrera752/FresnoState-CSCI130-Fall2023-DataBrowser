<?php


$serverName = "localhost";
$userName = "Ricardo";
$passWord = "wabisabi69";
$databaseName = "testDB";


//Create connection
$connection = new mysqli($serverName, $userName, $passWord);

//Check Connection
if($connection->connect_error){

    die("Connection Failed: " . $connection->connect_error . "<br>");
}

echo "Connected sucessfully <br>";


//Creation of Database

?>
