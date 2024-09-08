Ricardo Cabrera
CSCI 130
Data Browser Project
************************************************

This project is a data browser for a collection of Mech objects.
The following JavaScript class was used for this project:

//Mech Class
class Mech{

    mechName; //the name of the Mech
    mechModel; //the model designation for the Mech
    mechType; //the type of the mech

    combatRole; //the designated combat role for the Mech

    headHeight; //the height of the mech in meters
    emptyMass; //the empty mass of the mech in tons
    maxMass; //the combat mass of the mech in tons

    armorType; //the type of armor for the mech

    introDate; //the date the Mech was first seen in combat
    engine; //the engine of the Mech

    developmentType; //the development type of the Mech (production/protype) -> (true/false)

    numberOfVariants; //the number of variants the Mech has
    numberOfArmaments; //the number of weapons the Mech has
    numberOfOptionalArmaments; //the number of optional weapons the mech can take

    image; //an image for the Mech


    //Default Constructor
    constructor(
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

    ){

        this.mechName = mechName;
        this.mechModel = mechModel;
        this.mechType = mechType;

        this.combatRole = combatRole;

        this.headHeight = headHeight;
        this.emptyMass = emptyMass;
        this.maxMass = maxMass;

        this.armorType = armorType;

        this.introDate = introDate;
        //this.variants = variants;
        this.engine = engine;
        //this.equipment = equipment;
        //this.armament = armament;
        //this.productionType = productionType;

        //this.developedInto = developedInto;
        this.developmentType = developmentType;

        //this.maxSpeed = maxSpeed;

        this.numberOfVariants = numberOfVariants;
        this.numberOfArmaments = numberOfArmaments;
        this.numberOfOptionalArmaments = numberOfOptionalArmaments;
        this.image = image;


    }




}

**********************************************************************

Before running the data browser you must do the folling steps:

1) Install XAMPP onto your machine using the follwing link: https://www.apachefriends.org/index.html

2) Once installed go to your htdocs folder in your XAMPP installation

3) Once you are in the htdocs folder, create a folder called mysite

4) In your mysite folder create a new folder an name it DataBrowser

5) Open the DataBrowser folder

6) Extract the CSCI_130_DataBrowser_RicardoCabrera.zip file into the DataBrowser folder

**********************************************************************

How to Run the Program:

1) Open your XAMPP control panel, it should be a file called xampp-control.exe

2) Start your Apache server

3) Start your MySQL server

4) Run the makeDB.php script by opening the following link in your web browser: https://localhost/mysite/DataBrowser/makeDB.php

5) Run the initDB.php script by opening the folling link in your web browser: https://localhost/mysite/DataBrowser/initDB.php

6) Start the main Data Browser program by opening the following link in your web browser: https://localhost/mysite/DataBrowser/index.html

7) You have successfully started the data browser