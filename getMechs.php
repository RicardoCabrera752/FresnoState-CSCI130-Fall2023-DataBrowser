<?php


$serverName = "localhost";
$userName = "Ricardo";
$password = "wabisabi69";
$dataBaseName = "testDB";



$connection = new mysqli($serverName, $userName, $password, $dataBaseName);


$sqlQuery = "SELECT mechName, mechModel, mechType, combatRole, headHeight, emptyMass, maxMass, armorType, introDate, engine, developmentDate, numberOfVariants, numberOfArmaments,
numberOfOptionalArmaments, image FROM Test";

$sqlQuery = "SELECT mechName, mechModel, mechType, combatRole, headHeight, emptyMass, maxMass, armorType, introDate, engine, developmentType, numberOfVariants, numberOfArmaments,
numberOfOptionalArmaments, image FROM Test";

$result = $connection->query($sqlQuery);

$data = array();

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        
        array_push($data,$row);
    }
} else {
    echo "0 results";
}

echo json_encode($data);




//Close Connection
$connection->close();








?>