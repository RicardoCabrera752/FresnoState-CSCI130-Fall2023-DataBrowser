<?php

// You should have file_uploads = On in C:\xampp\php\php.ini (if you have xampp)
$target_dir = "images/"; // you must create this directory in the folder where you have the PHP file

// Loop through each uploaded file
foreach ($_FILES["fileup"]["tmp_name"] as $key => $tmp_name) {

    $target_file = $target_dir . basename($_FILES["fileup"]["name"][$key]);

    //echo "<p>Upload information</p><ul>";
    //echo  "<li>Target folder for the upload :" . $target_file . "</li>";
    
    // basename: Returns the base name of the given path
    $uploadOk = 1;

    $imageFileType = pathinfo($target_file, PATHINFO_EXTENSION);

    // Verify if the image file is an actual image or a fake image
    if (isset($_POST["submit"])) {
        $check = getimagesize($_FILES["fileup"]["tmp_name"][$key]);
        if ($check !== false) {
            $uploadOk = 1;
        } else {
            $uploadOk = 0;
        }
    }

    // Verify if file already exists
    if (file_exists($target_file)) {
        $uploadOk = 2;
    }

    // Verify the file size
    if ($_FILES["fileup"]["size"][$key] > 500000) {
        $uploadOk = 0;
    }

    // Verify certain file formats
    if ($imageFileType != "jpg" && $imageFileType != "png") {
        $uploadOk = 0;
    }

    // Verify if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        echo "false";
    } 
    elseif ($uploadOk == 2) {
        echo "exists";
    }
    else { // upload file
        if (move_uploaded_file($_FILES["fileup"]["tmp_name"][$key], $target_file)) {
            echo "true";
        } else {
            echo "false";
        }
    }
}

?>