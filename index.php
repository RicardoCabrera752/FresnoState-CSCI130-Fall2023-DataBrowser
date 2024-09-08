<?php

//or you can just load the json using php by itself
//then rebuild the array
//send the index thorugh JS
//get the object you need
//encode that as JSON 

$myarray = (isset($_GET['myArray'])) ? json_decode($_GET['myArray']) : ['0'];

if (count($myarray)==1 && $myarray[0]==0) 
{
	echo "Nothing from the GET or POST <BR>";
	//$do_example=1;
}
else
{
	//$do_example=0;
    //echo "Hello";

    echo json_encode($myarray);
}


?>