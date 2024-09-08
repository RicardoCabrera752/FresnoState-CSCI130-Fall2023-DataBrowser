<?php

//Database login information

$serverName = "localhost";
$userName = "Ricardo";
$password = "wabisabi69";
$dataBaseName = "testDB";


//Create Connection
$connection = new mysqli($serverName, $userName, $password);

//Check Connection
if($connection->connect_error){

    die("Connection Failed: " . $connection->connect_error . "<br>");
}

echo "Connected sucessfully <br>";


//Creation of Database
$sqlQuery = "CREATE DATABASE " . $dataBaseName;
if($connection->query($sqlQuery) === TRUE){
    echo "Database " . $dataBaseName . "created successfully<br>";
}else{
    echo "Error creating database" . $connection->error . "<br>";
}

//Close Connection
$connection->close();

?>