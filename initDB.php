<?php

//Database login information

$serverName = "localhost";
$userName = "Ricardo";
$password = "wabisabi69";
$dataBaseName = "testDB";


$myJSON = file_get_contents("myDatabase3.JSON"); //read the Mech Objects from the JSON file

$mechsObjectsFromJSON = json_decode($myJSON, true); //decode the JSON string into an array of Mech Objects

$numOfMechs = sizeof($mechsObjectsFromJSON); //get the number of Mech Objects

$numOfProperties = sizeof($mechsObjectsFromJSON[0]); //get the number of properties a Mech Object has

echo $numOfMechs . "<br>";
echo $numOfProperties . "<br>";

echo $mechsObjectsFromJSON[0]["mechName"] . "<br>";


//Create Connection
$connection = new mysqli($serverName, $userName, $password, $dataBaseName);

//Check Connection
if($connection->connect_error){

    die("Connection Failed: " . $connection->connect_error . "<br>");
}else{

    echo "Connected sucessfully <br>";
}


//Build Query for Table Creation
$sqlQuery = "CREATE TABLE Test (
pKey INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
mechName VARCHAR(50) NOT NULL,
mechModel VARCHAR(50) NOT NULL,
mechType VARCHAR(50) NOT NULL,
combatRole VARCHAR(50) NOT NULL,
headHeight VARCHAR(50) NOT NULL,
emptyMass VARCHAR(50) NOT NULL,
maxMass VARCHAR(50) NOT NULL,
armorType VARCHAR(50) NOT NULL,
introDate VARCHAR(50) NOT NULL,
engine VARCHAR(50) NOT NULL,
developmentType VARCHAR(50) NOT NULL,
numberOfVariants INT(3) NOT NULL,
numberOfArmaments INT(3) NOT NULL,
numberOfOptionalArmaments INT(3) NOT NULL,
image VARCHAR(50) NOT NULL
)";


//Check if the table already exists
//$tables = mysql-list-tables("testDB");
/*
$checkTables = ("SELECT 1 FROM Test LIMIT 1");


if($connection->query($checkTables) === FALSE){
    echo "Oof";
}else{
    echo "Good";
}
*/

/*
$checkTable = "SELECT 1 FROM Test LIMIT 1";
$checkIfExists = "SELECT IF(EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Test'), 1, 0)";
$alreadyExists = false;

if($connection->query($checkIfExists) !== FALSE){
    echo "Off" . "<br>";
    $alreadyExists = false;

    //$connection->query("DROP TABLE Test");
}else{
    echo "Bad <br>";
    $alreadyExists = true;

}
*/


//Check if the table was created
if($connection->query($sqlQuery) === TRUE){

    echo "Table Test created successfully <br>";
}else{

    echo "Error creating table: " . $connection->error . "<br>";
}


//Prepare the Query Statement
$statement = $connection->prepare("INSERT INTO Test (
mechName,
mechModel,
mechType,
combatRole,
headHeight,
emptyMass,
maxMass,
armorType,
introDate,
engine,
developmentType,
numberOfVariants,
numberOfArmaments,
numberOfOptionalArmaments,
image
) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

if($statement == FALSE){
    echo "There is a problem with prepare <br>";
    echo $connection->error; // Need to connect/reconnect before the prepare call otherwise it doesnt work
}

//Bind the parameters
$statement->bind_param("sssssssssssiiis",
$mechName,
$mechModel,
$mechType,
$combatRole,
$headHeight,
$emptyMass,
$maxMass,
$armorType,
$introDate,
$engine,
$developmentType,
$numberOfVariants,
$numberOfArmaments,
$numberOfOptionalArmaments,
$image
);

//Execute the INSERT Statements
for($i = 0; $i < $numOfMechs; $i++){
    //set parameters and execute
    $mechName = $mechsObjectsFromJSON[$i]["mechName"];
    $mechModel = $mechsObjectsFromJSON[$i]["mechModel"];
    $mechType = $mechsObjectsFromJSON[$i]["mechType"];
    $combatRole = $mechsObjectsFromJSON[$i]["combatRole"];
    $headHeight = $mechsObjectsFromJSON[$i]["headHeight"];
    $emptyMass = $mechsObjectsFromJSON[$i]["emptyMass"];
    $maxMass = $mechsObjectsFromJSON[$i]["maxMass"];
    $armorType = $mechsObjectsFromJSON[$i]["armorType"];
    $introDate = $mechsObjectsFromJSON[$i]["introDate"];
    $engine = $mechsObjectsFromJSON[$i]["engine"];
    $developmentType = $mechsObjectsFromJSON[$i]["developmentType"];
    $numberOfVariants = $mechsObjectsFromJSON[$i]["numberOfVariants"];
    $numberOfArmaments = $mechsObjectsFromJSON[$i]["numberOfArmaments"];
    $numberOfOptionalArmaments = $mechsObjectsFromJSON[$i]["numberOfOptionalArmaments"];
    $image = $mechsObjectsFromJSON[$i]["image"];

    $statement->execute();
}

//close the statement
$statement->close();


//Close Connection
$connection->close();

?>