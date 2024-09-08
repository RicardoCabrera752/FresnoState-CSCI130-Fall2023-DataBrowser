<?php

//or you can just load the json using php by itself
//then rebuild the array
//send the index thorugh JS
//get the object you need
//encode that as JSON


$serverName = "localhost";
$userName = "Ricardo";
$password = "wabisabi69";
$dataBaseName = "testDB";

//Check the POST First
$sortBy = (isset($_POST['sortBy'])) ? $_POST['sortBy'] : "No";

if($sortBy == "No"){

    $do_something = 1;

}else{

    $do_something = 0;

}


if($do_something){

    echo "Did not get nothing from POST or GET";

}else{

    $connection = new mysqli($serverName, $userName, $password, $dataBaseName);


   

    $sqlQuery = "SELECT mechName, mechModel, mechType, combatRole, headHeight, emptyMass, maxMass, armorType, introDate, engine, developmentType, numberOfVariants, numberOfArmaments,
    numberOfOptionalArmaments, image FROM Test ORDER BY $sortBy ASC";

    //$sqlQuery = "SELECT * FROM Test ORDER BY $sortBy ASC";

    $result = $connection->query($sqlQuery);

    $data = array();

    //$dummy = $result->fetch_assoc();

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            
            array_push($data,$row);
        }
    } else {
        echo "0 results";
    }





    //Close Connection
    $connection->close();



    //echo $mechJSON;

    echo json_encode($data);

    //echo $sortBy;

    //echo "yep";

}




?>