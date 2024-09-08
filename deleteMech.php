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
$mechObjectsFromJSON = (isset($_POST['mechObjectsFromJSON'])) ? json_decode($_POST['mechObjectsFromJSON'], true) : ['0'];

//If Nothing From POST Then Check the GET Next
if(count($mechObjectsFromJSON) == 1 && $mechObjectsFromJSON[0] == 0){

    $mechObjectsFromJSON = (isset($_GET['mechObjectsFromJSON'])) ? json_decode($_GET['mechObjectsFromJSON']) : ['0'];
}

//If Nothing from both then do default case
if(count($mechObjectsFromJSON) == 1 && $mechObjectsFromJSON[0] == 0){


    $do_something = 1;
}else{
    //Do Something
    $do_something = 0;

}


if($do_something){

    echo "Did not get nothing from POST or GET";

}else{

    $mechJSON = json_encode($mechObjectsFromJSON);


    $numOfMechs = sizeof($mechObjectsFromJSON); //get the number of Mech Objects

    //$numOfProperties = sizeof($mechObjectsFromJSON[0]); //get the number of properties a Mech Object has

    //echo $mechJSON;


    
    $connection = new mysqli($serverName, $userName, $password, $dataBaseName);


    //Truncate First
    $sqlQuery = "TRUNCATE TABLE Test";

    $connection->query($sqlQuery);

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
        echo "There is a problem with prepare";
        //echo $connection->error; // Need to connect/reconnect before the prepare call otherwise it doesnt work
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
        $mechName = $mechObjectsFromJSON[$i]["mechName"];
        $mechModel = $mechObjectsFromJSON[$i]["mechModel"];
        $mechType = $mechObjectsFromJSON[$i]["mechType"];
        $combatRole = $mechObjectsFromJSON[$i]["combatRole"];
        $headHeight = $mechObjectsFromJSON[$i]["headHeight"];
        $emptyMass = $mechObjectsFromJSON[$i]["emptyMass"];
        $maxMass = $mechObjectsFromJSON[$i]["maxMass"];
        $armorType = $mechObjectsFromJSON[$i]["armorType"];
        $introDate = $mechObjectsFromJSON[$i]["introDate"];
        $engine = $mechObjectsFromJSON[$i]["engine"];
        $developmentType = $mechObjectsFromJSON[$i]["developmentType"];
        $numberOfVariants = $mechObjectsFromJSON[$i]["numberOfVariants"];
        $numberOfArmaments = $mechObjectsFromJSON[$i]["numberOfArmaments"];
        $numberOfOptionalArmaments = $mechObjectsFromJSON[$i]["numberOfOptionalArmaments"];
        $image = $mechObjectsFromJSON[$i]["image"];
    
        $statement->execute();
    }
    
    //close the statement
    $statement->close();
    

    //Close Connection
    $connection->close();

    echo "Delete was successful";

    //echo "yep";

}




?>