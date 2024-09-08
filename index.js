//Ricardo Cabrera
//CSCI 130
//Lab 8 Exercise 1


/*
Mech class properties:

mechName;
mechModel;
mechType;

combatRole;

headHeight;
emptyMass;
maxMass;

armorType;

introDate;
variants;
engine;
equipment
armament;
productionType;

developedInto;
developmentType;

maxSpeed;

numberOfVariants;

*/

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
    //variants; //an array of the Mech's variants
    engine; //the engine of the Mech
    //equipment; //an array of the Mech's special equipment
    //armament; //an array of the Mech's primary armament 
    //productionType;

    //developedInto; //an array of Mechs this Mech can be developed into
    developmentType; //the development type of the Mech (production/protype) -> (true/false)

    //maxSpeed;

    numberOfVariants; //the number of variants the Mech has

    numberOfArmaments; //the number of weapons the Mech has
    numberOfOptionalArmaments; //the number of optional weapons the mech can take

    image; //an image for the Mech


    //Default Constructor
    /*
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
        variants,
        engine,
        equipment,
        armament,
        developedInto,
        developmentType,
        numberOfVariants,
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
        this.variants = variants;
        this.engine = engine;
        this.equipment = equipment;
        this.armament = armament;
        //this.productionType = productionType;

        this.developedInto = developedInto;
        this.developmentType = developmentType;

        //this.maxSpeed = maxSpeed;

        this.numberOfVariants = numberOfVariants;
        this.image = image;


    }
    */


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


let mechName1 = "RX-78-2 Gundam";
let mechModel1 = "RX-78-2";
let mechType1 = "Prototype Close Quarters Combat Mobile Suit";
let combatRole1 = "Close Quarters Combat";
let headHeight1 = "18.0 meters";
let emptyMass1 = "43.4 metric tons";
let maxMass1 = "60.0 metric tons";
let armorType1 = "Luna Titanium";
let introDate1 = "September 18, 0079 U.C."
let variants1 = [
    "FA-78-1 Full Armor Gundam",
    "RX-78-2 Gundam C-Armor",
    "RX-78-2 Gundam Real Type",
    "RX-78-2 Solomon Express G-2"
];
let engine1 = "Minovsky Ultracompact Fusion Reactor";
let equipment1 = [
    "Core Block System",
    "Hardpoints",
    "Learning Computer",
    "Magnet Coating",
    "Heatproof Film/Heatproof Field",
    "Autopilot"
];
let armament1 = [
    "2 x 60mm Vulcan Gun",
    "BOWA-XBR-M-79-07G Beam Rifle",
    "RX-M-SH-008/S-01025 Shield",
    "2 x Beam Saber"
];
let developedInto1 = [
    "RGM-79 GM",
    "RX-78-3 G-3 Gundam"
];
let developmentType1 = "Prototype";
let numberOfVariants1 = 4;
let numberOfArmaments1 = 4;
let numberOfOptionalArmaments1 = 4; 
let image1 = "images/Rx-78-2gundam-BO2.png";

let myMech1 = new Mech(
    mechName1,
    mechModel1,
    mechType1,
    combatRole1,
    headHeight1,
    emptyMass1,
    maxMass1,
    armorType1,
    introDate1,
    engine1,
    developmentType1,
    numberOfVariants1,
    numberOfArmaments1,
    numberOfOptionalArmaments1,
    image1
    
);

//////////////////////////////////////////////////////
let mechName2 = "RX-77-2 Guncannon";
let mechModel2 = "RX-77-2";
let mechType2 = "Limited Production Middle Range Support Mobile Suit";
let combatRole2 = "Middle-Range Support";
let headHeight2 = "17.5 meters";
let emptyMass2 = "51.0 metric tons";
let maxMass2 = "70.0 metric tons";
let armorType2 = "Luna Titanium";
let introDate2 = "September 18, 0079 U.C."
let variants2 = [
    "RX-77-3 Guncannon Heavy Custom"
];
let engine2 = "Thermonuclear Fusion Reactor";
let equipment2 = [
    "Core Block System"
];
let armament2 = [
    "2 x 60mm Vulcan Gun",
    "2 x 240mm Cannon",
    "XBR-M-79a Beam Rifle",
    "2 x Hand Grenade"
];
let developedInto2 = [
    "RGC-80 Prototype GM Cannon",
    "RX-77D Guncannon Mass Production Type",
    "RX-77[G] Guncannon Ground Type",
    "RX-78-1 Prototype Gundam"
];
let developmentType2 = "Production";
let numberOfVariants2 = 1;
let numberOfArmaments2 = 4;
let numberOfOptionalArmaments2 = 2;
let image2 = "images/GBO2-Guncannon.png";

let myMech2 = new Mech(
    mechName2,
    mechModel2,
    mechType2,
    combatRole2,
    headHeight2,
    emptyMass2,
    maxMass2,
    armorType2,
    introDate2,
    engine2,
    developmentType2,
    numberOfVariants2,
    numberOfArmaments2,
    numberOfArmaments2,
    image2
    
);


let myMech3 = new Mech(
    "MS-06F Zaku II",
    "MS-06F",
    "Mass Produced General-Purpose Mobile Suit",
    "General-Purpose",
    "17.5 meters",
    "58.1 metric tons",
    "73.3 metric tons",
    "Super Hard Steel Alloy",
    "January 15, 0079 U.C.",
    "Unknown",
    "Production",
    8,
    4,
    10,
    "images/GBO2-Zaku_II.png"
);



let myMech4 = new Mech(
    "RX-75 Guntank",
    "RX-75",
    "Prototype Long-Range Support Mobile Suit",
    "Long-Range Support",
    "15.6 meters",
    "56.0 metric tons",
    "80.0 metric tons",
    "Luna Titanium",
    "March 20, 0079 U.C.",
    "Minovsky Ultracompact Fusion Reactor",
    "Prototype",
    0,
    2,
    0,
    "images/GBO2-Guntank.png"
);

let myMech5 = new Mech(
    "RGM-79 GM",
    "RGM-79",
    "Mass Produced General-Purpose Mobile Suit",
    "General-Purpose",
    "18.5 meters",
    "41.2 metric tons",
    "58.8 metric tons",
    "Titanium Alloy",
    "November, 0079 U.C.",
    "Minovsky Ultracompact Fusion Reactor",
    "Production",
    9,
    4,
    11,
    "images/GBO2-GM.png"
);

myArr = [myMech1, myMech2, myMech3, myMech4, myMech5]; //manually created array of Mech Objects
//myArr.push(myMech1);

console.log(JSON.stringify(myArr)); //print the array as JSON to terminal
console.log("yo");

///////////////////////////////////////////////
//Ajax Stuff


var httpRequest; //variable used to make the httpRequest
var typeRequestAction; //variable used to check the type of action we should perform once we get the request
var data; //variable used to store the JSON received from a request as a Mech Object
var str; //variable used to store a Mech Object as a string

let mechObjectsFromJSON = []; //dynamic array of Mech Objects that is created using the JSON from the HTML page
let sortedMechObjectsFromJSON = [];
let oldMechObjectsFromJSON = [];
let tempMechObject; //Mech object used to push data to the Mech Objects array

let mechObjectKeyNames = []; //array used to store the key names for a Mech Object ie ["mechName", "mechModel", "mechType", .....]


//let tempMechObjectKeyNames = Object.keys(myMech1);
//let numProperties = 

let currentIndex = 0; //variable used to keep track of which Mech Object from the Mech Objects array we are displaying
//by default we are looking at the first Mech Object
let previousIndex;

let firstIndex = 0;
let lastIndex;

let imageData;
let imageName;
let dataForm;

let operationType;

let sorted;

let sortValue;


//Function that displays the Mech JSON onto the HTML web page
function printMechJSON(){

    try{ //try to do this

        if(httpRequest.readyState === XMLHttpRequest.DONE){ //if the readyState === 4
            if(httpRequest.status === 200){ //if the status === 200
                //Do something
                data = JSON.parse(httpRequest.responseText); //convert the Mechs JSON from sting back to Object format
                str = JSON.stringify(data); //convert the Mech JSON to a string so that we can append it to the div in the HTML web page
                //alert("Mech JSON is Ready");

                

                let myDiv = document.getElementById("myDynamicMechJSON"); //handler for the div

                myDiv.replaceChildren(); //clear the previous content of the div

                //let myP = document.createElement('P');

                //myP.appendChild(document.createTextNode(str));

                //myDiv.appendChild(myP);

                myDiv.appendChild(document.createTextNode(str));
                //////////////////////////////////////////////////////////

                //alert("Creating JSON Objects");


                let myJSONDiv = document.getElementById("myDynamicMechJSON");
            
                ////////////////////////////////////////////////////////////////////////
                //create objects using Mech class using the JSON we received from GET
                let rawJSONData = myJSONDiv.innerText;
            
                let backToMechObject = JSON.parse(rawJSONData);
                createMechObjectsFromJSON(backToMechObject);


                ///////////////////////////////////////////
                //create display mech button

                let myDisplayButtonDiv = document.getElementById("displayMechObject");

                myDisplayButtonDiv.replaceChildren();

                let displayMechButton = document.createElement('INPUT');
                displayMechButton.type = "button";
                displayMechButton.value = "Press the Button to Display a Mech";
                displayMechButton.onclick = function(){
                    handleHTTPRequest(2)
                }
                myDisplayButtonDiv.appendChild(displayMechButton);
                
                
                //alert(rawJSONData);
            
                //alert("Size:" +  Object.keys(backToMechObject).length);
            
                //alert(mechObjectsFromJSON[0].mechName);
            
                console.log(mechObjectsFromJSON);
            }else{
                alert("Error: There was a problem with the request");
            }
        }




    }catch(err){ //if something went wring catch the error
        alert("Error: Caught Exception: " + err); //show the error on the screen
        console.log("Error: Caught Exception: " + err); //show the error on the console
    }

}


function generateMechJSON(){


    //alert("Generating the Mech JSON");
    httpRequest = new XMLHttpRequest();

    if(!httpRequest){
        alert("Error: Cannot Create an XMLHTTP Instance");
        return false;
    }

    httpRequest.onreadystatechange = printMechJSON;
    //httpRequest.open('GET', "mechs2.JSON", true)
    httpRequest.open('GET', "myDatabase3.JSON", true);
    httpRequest.send();



};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createMechObjectsFromJSON(argMechObject){

    //let myJSONDiv = document.getElementById("myDynamicMechJSON");

    //let rawJSONData = myJSONDiv.innerText;

    //let backToJSON = JSON.parse(rawJSONData);

    //get the number of elements for the JSON

    let size = Object.keys(argMechObject).length;

    

    for(let i = 0; i < size; i++){

        tempMechObject = new Mech(

            
            argMechObject[i].mechName,
            argMechObject[i].mechModel,
            argMechObject[i].mechType,
            argMechObject[i].combatRole,
            argMechObject[i].headHeight,
            argMechObject[i].emptyMass,
            argMechObject[i].maxMass,
            argMechObject[i].armorType,
            argMechObject[i].introDate,
            argMechObject[i].engine,
            argMechObject[i].developmentType,
            argMechObject[i].numberOfVariants,
            argMechObject[i].numberOfArmaments,
            argMechObject[i].numberOfOptionalArmaments,
            argMechObject[i].image
        );

        mechObjectsFromJSON.push(tempMechObject);
    };

    //mechObjectKeyNames = Object.keys(mechObjectsFromJSON[0]).length;
    mechObjectKeyNames = Object.keys(mechObjectsFromJSON[0]);
    lastIndex = mechObjectsFromJSON.length - 1;

    sortedMechObjectsFromJSON = mechObjectsFromJSON;
    

}




function handlePrevButton(){

    if(currentIndex == 0){
        currentIndex = mechObjectsFromJSON.length - 1;
    }else{
        currentIndex = currentIndex - 1;
    }

    displayMechObjectAsTable();


}

function handleNextButton(){

    if(currentIndex == mechObjectsFromJSON.length - 1){
        currentIndex = 0;
    }else{
        currentIndex = currentIndex + 1;
    }

    displayMechObjectAsTable();
}


function handleFirstButton(){

    //alert("First");

    currentIndex = 0;

    displayMechObjectAsTable();
}

function handleLastButton(){
    //alert("Last");

    currentIndex = lastIndex;

    displayMechObjectAsTable();
}




function resetReadOnly(){

    let myMechTable = document.getElementById("myMechTable");
    let tableRows = myMechTable.getElementsByTagName("tr");
    let tableData;

    for(let i = 0; i < tableRows.length; i++){
        tableData = tableRows[i].getElementsByTagName("input");

        for(let j = 0; j < tableData.length; j++){

           

            let status = tableData[j].readOnly;
            tableData[j].readOnly = !status;

            
            
        }
        
    }

    //alert(tableRows.length);

}


function handleEditButton(){

    //alert("oof");

    let editMode = document.getElementById("editButton");

    if(editMode.value == "Edit[Off]"){
        editMode.value = "Edit[On]";
    }else {
        editMode.value = "Edit[Off]";
    }
    

    //editMode.value = "Edit[On]";

    resetReadOnly();

    /*
    let myMechTable = document.getElementById("myMechTable");
    let tableRows = myMechTable.getElementsByTagName("tr");
    let tableData;

    for(let i = 0; i < tableRows.length; i++){
        tableData = tableRows[i].getElementsByTagName("input");

        for(let j = 0; j < tableData.length; j++){

           

            let status = tableData[j].readOnly;
            tableData[j].readOnly = !status;

            
            
        }
        
    }

    alert(tableRows.length);
    */


}

function handleSaveButton(){

    //alert(mechObjectsFromJSON[currentIndex]["mechName"]);

    let tempMechName = document.getElementById("mechName");
    let tempMechModel = document.getElementById("mechModel");
    let tempMechType = document.getElementById("mechType");
    let tempCombatRole = document.getElementById("combatRole");
    let tempHeadHeight = document.getElementById("headHeight");
    let tempEmptyMass = document.getElementById("emptyMass");
    let tempMaxMass = document.getElementById("maxMass");
    let tempArmorType = document.getElementById("armorType");
    let tempIntroDate = document.getElementById("introDate");
    let tempEngine = document.getElementById("engine");
    let tempDevelopmentType = document.getElementById("developmentType");
    let tempNumberOfVariants = document.getElementById("numberOfVariants");
    let tempNumberOfArmaments = document.getElementById("numberOfArmaments");
    let tempNumberOfOptionalArmaments = document.getElementById("numberOfOptionalArmaments");


    let saveIndex;

    for(let i = 0; i < mechObjectsFromJSON.length; i++){

        if(mechObjectsFromJSON[i]["mechModel"] == tempMechModel.value){
            saveIndex = i;
        };

       

    }


    mechObjectsFromJSON[saveIndex]["mechName"] = tempMechName.value;
    mechObjectsFromJSON[saveIndex]["mechModel"] = tempMechModel.value;
    mechObjectsFromJSON[saveIndex]["mechType"] = tempMechType.value;
    mechObjectsFromJSON[saveIndex]["combatRole"] = tempCombatRole.value;
    mechObjectsFromJSON[saveIndex]["headHeight"] = tempHeadHeight.value;
    mechObjectsFromJSON[saveIndex]["emptyMass"] = tempEmptyMass.value;
    mechObjectsFromJSON[saveIndex]["maxMass"] = tempMaxMass.value;
    mechObjectsFromJSON[saveIndex]["armorType"] = tempArmorType.value;
    mechObjectsFromJSON[saveIndex]["introDate"] = tempIntroDate.value;
    mechObjectsFromJSON[saveIndex]["engine"] = tempEngine.value;
    mechObjectsFromJSON[saveIndex]["developmentType"] = tempDevelopmentType.value;
    mechObjectsFromJSON[saveIndex]["numberOfVariants"] = tempNumberOfVariants.value;
    mechObjectsFromJSON[saveIndex]["numberOfArmaments"] = tempNumberOfArmaments.value;
    mechObjectsFromJSON[saveIndex]["numberOfOptionalArmaments"] = tempNumberOfOptionalArmaments.value;



    sortedMechObjectsFromJSON[currentIndex]["mechName"] = tempMechName.value;
    sortedMechObjectsFromJSON[currentIndex]["mechModel"] = tempMechModel.value;
    sortedMechObjectsFromJSON[currentIndex]["mechType"] = tempMechType.value;
    sortedMechObjectsFromJSON[currentIndex]["combatRole"] = tempCombatRole.value;
    sortedMechObjectsFromJSON[currentIndex]["headHeight"] = tempHeadHeight.value;
    sortedMechObjectsFromJSON[currentIndex]["emptyMass"] = tempEmptyMass.value;
    sortedMechObjectsFromJSON[currentIndex]["maxMass"] = tempMaxMass.value;
    sortedMechObjectsFromJSON[currentIndex]["armorType"] = tempArmorType.value;
    sortedMechObjectsFromJSON[currentIndex]["introDate"] = tempIntroDate.value;
    sortedMechObjectsFromJSON[currentIndex]["engine"] = tempEngine.value;
    sortedMechObjectsFromJSON[currentIndex]["developmentType"] = tempDevelopmentType.value;
    sortedMechObjectsFromJSON[currentIndex]["numberOfVariants"] = tempNumberOfVariants.value;
    sortedMechObjectsFromJSON[currentIndex]["numberOfArmaments"] = tempNumberOfArmaments.value;
    sortedMechObjectsFromJSON[currentIndex]["numberOfOptionalArmaments"] = tempNumberOfOptionalArmaments.value;


    //alert(myData.value);
    

    console.log(mechObjectsFromJSON);
    console.log(sortedMechObjectsFromJSON);

    displayMechObjectAsTable();
}


function handleSaveAllButton(){

    //alert("Save All");


    sendPostRequest('saveAll.php', 1);

    displayMechObjectAsTable();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function uploading()
{
    let myImage = document.getElementById("user_image");

    files = myImage.files;

    imageName = "images/" + myImage.files[0].name;

    if( files.length === 0)
    {
        imageGood = false;
        return;
    }

    dataForm = new FormData();
    console.log(dataForm);

    for(i = 0; i <  files.length; i++)
    {
        dataForm.append("fileup[]", myImage.files[i]);
    }
    console.log(dataForm);

    dataForm.append("submit", true);
    console.log(dataForm);
    
    uploadPHP();
}

function uploadPHP()
{
    var phpFile = "imageUpload.php";
    httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = alertContents_upload;
    httpRequest.open("POST", phpFile, true);
    //httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send(dataForm);

}

function alertContents_upload()
{
    try
    {
        if(httpRequest.readyState === XMLHttpRequest.DONE)
        {
            if(httpRequest.status === 200)
            {
                let result = (httpRequest.responseText);
                if(result == "true")
                {
                    //insertOp();
                }
                else
                {
                    if(result == "exists")
                    {
                        alert("Image Already Exists");
                        //insertOp();
                    }
                    else
                    {
                        alert("ERROR");
                        return;    
                    }
                }
            }
        }
    }
    catch(e)
    {
        alert("Caught Exception: " + e.description);
    }
 
}





////////////////////////////////////////////////////////////////////////////////////////////////////////////
function handleConfirmInsertButton(){

    //alert("Confirm");

    //Process the Image First

    /*
    let myImage = document.getElementById("user_image");

    //let imageData = myImage.files;

    let myFiles = myImage.files;

    //alert(myImage.files[0].name);

    console.log(myImage.files[0]);
    console.log(myImage.value);


    //make the form
    dataForm = new FormData();

    dataForm.append("fileup[]", myImage.files[0]);

    dataForm.append("submit", true);

    console.log(dataForm);

    sendPostRequest('imageUpload.php', 2);
    */

    uploading();


    //Process Everything Else
    let tempMechName = document.getElementById("user_mechName");
    let tempMechModel = document.getElementById("user_mechModel");
    let tempMechType = document.getElementById("user_mechType");
    let tempCombatRole = document.getElementById("user_combatRole");
    let tempHeadHeight = document.getElementById("user_headHeight");
    let tempEmptyMass = document.getElementById("user_emptyMass");
    let tempMaxMass = document.getElementById("user_maxMass");
    let tempArmorType = document.getElementById("user_armorType");
    let tempIntroDate = document.getElementById("user_introDate");
    let tempEngine = document.getElementById("user_engine");
    let tempDevelopmentType = document.getElementById("user_developmentType");
    let tempNumberOfVariants = document.getElementById("user_numberOfVariants");
    let tempNumberOfArmaments = document.getElementById("user_numberOfArmaments");
    let tempNumberOfOptionalArmaments = document.getElementById("user_numberOfOptionalArmaments");
    
    let mechObjectToInsert = new Mech(
        tempMechName.value,
        tempMechModel.value,
        tempMechType.value,
        tempCombatRole.value,
        tempHeadHeight.value,
        tempEmptyMass.value,
        tempMaxMass.value,
        tempArmorType.value,
        tempIntroDate.value,
        tempEngine.value,
        tempDevelopmentType.value,
        tempNumberOfVariants.value,
        tempNumberOfArmaments.value,
        tempNumberOfOptionalArmaments.value,
        imageName
    );

    console.log("Mechs before insert: ", mechObjectsFromJSON);
    console.log("Sorted before insert: ", mechObjectsFromJSON);

    mechObjectsFromJSON.push(mechObjectToInsert);
    //sortedMechObjectsFromJSON.push(mechObjectToInsert);

    if(sortValue != "pKey" || sortValue != "mechName"){
        sortedMechObjectsFromJSON = mechObjectsFromJSON;
    }else{
        sortedMechObjectsFromJSON.push(mechObjectToInsert);
    }
    
    
    console.log("Mech to insert: " , mechObjectToInsert);
    console.log("Mechs after insert: ", mechObjectsFromJSON);
    console.log("Sorted after insert: ", sortedMechObjectsFromJSON);
    //console.log(sortedMechObjectsFromJSON);

    lastIndex = mechObjectsFromJSON.length - 1;
    currentIndex = 0;

    sendPostRequest('insertMech.php', 1);


    /*
    if(sortValue == "pKey"){
        sendPostRequest('sortBy.php', 3);
    }else if(sortValue == "mechName"){
        sendPostRequest('sortBy.php', 4);
    }
    */

    //displayMechObjectAsTable();

    //displayMechObjectAsTable();

    //sortedMechObjectsFromJSON.push(mechObjectToInsert);

    console.log(mechObjectsFromJSON);
    console.log(sortedMechObjectsFromJSON);

}


function handleCancelInsertButton(){

    //alert("Cancel");
    displayMechObjectAsTable();
    
}


function handleInsertButton(){

    //alert("Insert");

    //replace div with insert mech form

    let insertButtonDiv = document.getElementById("insertMech");

    insertButtonDiv.replaceChildren();

    let myHr = document.createElement('HR');
    let myBr = document.createElement('BR');

    insertButtonDiv.appendChild(myHr);

    /////////////////////////////

    let myTable = document.createElement('TABLE'); //create the HTML table

    myTable.border = '1'; //set the border size to 1px
    myTable.style.borderCollapse = 'collapse'; //set the border collapse style to collapse

    let myTableBody = document.createElement('TBODY'); //create the table body

    myTable.appendChild(myTableBody); //add the table body to the table



    let numRows = Object.keys(mechObjectsFromJSON[0]).length;

    let keyNameText;

    //let mechInput = document.createElement('INPUT');
    let combatRoleBox = document.createElement('SELECT');
    let developmentTypeBox = document.createElement('SELECT');
    let fileUpload = document.createElement('INPUT');

    for(let i = 0; i < numRows; i++){

        let tr = document.createElement('TR'); //create the tr element
        myTableBody.appendChild(tr); //add the tr to the table body

        
        let keyNameTd = document.createElement('TD');
        keyNameTd.width = '50';

        keyNameText = mechObjectKeyNames[i].charAt(0).toUpperCase() + mechObjectKeyNames[i].slice(1);
        keyNameText = keyNameText.replace(/([A-Z])/g, ' $1').trim();
        //keyNameTd.appendChild(document.createTextNode(mechObjectKeyNames[i]));
        keyNameTd.appendChild(document.createTextNode(keyNameText));
        tr.appendChild(keyNameTd);


        if(keyNameText == "Image"){ //handle image


            let mechTd = document.createElement('TD');
            mechTd.width = '50';
            mechTd.align = "center";

            fileUpload.type = "file";
            fileUpload.id = "user_image";

            mechTd.appendChild(fileUpload);
            tr.appendChild(mechTd);

        }else if(keyNameText == "Development Type"){ //handle Development Type


            let mechTd = document.createElement('TD');
            mechTd.width = '50';
            mechTd.align = "center";

            developmentTypeBox.id = "user_developmentType";

            let prototypeOption = document.createElement('OPTION');
            prototypeOption.appendChild(document.createTextNode("Prototype"));
            developmentTypeBox.appendChild(prototypeOption);

            let productionOption = document.createElement('OPTION');
            productionOption.appendChild(document.createTextNode("Production"));
            developmentTypeBox.appendChild(productionOption);

            mechTd.appendChild(developmentTypeBox);
            tr.appendChild(mechTd);

        }else if(keyNameText == "Combat Role"){ //handle Combat Role

            
            let mechTd = document.createElement('TD');
            mechTd.width = '50';
            mechTd.align = "center";

            combatRoleBox.id = "user_combatRole";

            let closeQuartersCombat = document.createElement('OPTION');
            closeQuartersCombat.appendChild(document.createTextNode("Close Quarters Combat"));
            combatRoleBox.appendChild(closeQuartersCombat);

            let generalPurpose = document.createElement('OPTION');
            generalPurpose.appendChild(document.createTextNode("General-Purpose"));
            combatRoleBox.appendChild(generalPurpose);

            let longRangeSupport = document.createElement('OPTION');
            longRangeSupport.appendChild(document.createTextNode("Long-Range Support"));
            combatRoleBox.appendChild(longRangeSupport);

            let middleRangeSupport = document.createElement('OPTION');
            middleRangeSupport.appendChild(document.createTextNode("Middle-Range Support"));
            combatRoleBox.appendChild(middleRangeSupport);

            let artillery = document.createElement('OPTION');
            artillery.appendChild(document.createTextNode("Artillery"));
            combatRoleBox.appendChild(artillery);

            let amphibious = document.createElement('OPTION');
            amphibious.appendChild(document.createTextNode("Amphibious Operations"));
            combatRoleBox.appendChild(amphibious);

            let ground = document.createElement('OPTION');
            ground.appendChild(document.createTextNode("Ground Operations"));
            combatRoleBox.appendChild(ground);

            let space = document.createElement('OPTION');
            space.appendChild(document.createTextNode("Space Operations"));
            combatRoleBox.appendChild(space);


            mechTd.appendChild(combatRoleBox);
            tr.appendChild(mechTd);

        }else{ //handle others

            let mechTd = document.createElement('TD');
            mechTd.width = '50';

            let mechInput = document.createElement('INPUT');
            //mechInput.id = mechObjectKeyNames[i];
            mechInput.id = "user_" + mechObjectKeyNames[i];
            mechInput.type = "text";
            mechInput.size = '50';
            
           
            //mechInput.value = mechInput.id;
            mechTd.appendChild(mechInput);

            //mechTd.appendChild(document.createTextNode(mechObjectsFromJSON[currentIndex][mechObjectKeyNames[i]]));
            tr.appendChild(mechTd);



        }

           


    }

    insertButtonDiv.appendChild(myTable); //add the table to the div
    insertButtonDiv.appendChild(myBr);


    //add insert and cancel buttons


    //confirm insert button
    let confirmInsertButton = document.createElement('INPUT');
    confirmInsertButton.type = "button";
    confirmInsertButton.value = "Confirm";
    confirmInsertButton.onclick = function() {
        handleConfirmInsertButton();
    }
    insertButtonDiv.appendChild(confirmInsertButton);


    //cancel insert button
    let cancelInsertButton = document.createElement('INPUT');
    cancelInsertButton.type = "button";
    cancelInsertButton.value = "Cancel";
    cancelInsertButton.onclick = function() {
        handleCancelInsertButton();
    }
    insertButtonDiv.appendChild(cancelInsertButton);
}

function handleDeleteButton(){

    console.log("Delete");

    let myIndex = currentIndex;
    let deleteIndex;

    let tempMechModel = document.getElementById("mechModel");

    for(let i = 0; i < mechObjectsFromJSON.length; i++){

        if(mechObjectsFromJSON[i]["mechModel"] == tempMechModel.value){
            deleteIndex = i;
        }
    }

    console.log(mechObjectsFromJSON);
    console.log(sortedMechObjectsFromJSON);

    if(myIndex > -1){
        //mechObjectsFromJSON.splice(myIndex, 1);
        sortedMechObjectsFromJSON.splice(myIndex, 1);
    }

    if(deleteIndex > -1){
        mechObjectsFromJSON.splice(deleteIndex, 1);
    }

    console.log(mechObjectsFromJSON);
    console.log(sortedMechObjectsFromJSON);


    currentIndex = 0;
    lastIndex = mechObjectsFromJSON.length - 1;

    sendPostRequest('deleteMech.php', 1);

    /*
    if(sortValue == "pKey"){
        sendPostRequest('sortBy.php', 3);
    }else if(sortValue == "mechName"){
        sendPostRequest('sortBy.php', 4);
    }
    */

    displayMechObjectAsTable();
}


function handleSortByIndexButton(){

    sorted = 0;
    sortValue = "pKey";

    sendPostRequest('sortBy.php', 3);

    //displayMechObjectAsTable();
}


function handleSortByNameButton(){

    sorted = 1;
    sortValue = "mechName";

    sendPostRequest('sortBy.php', 4);

    //displayMechObjectAsTable();
}


function displayMechObjectAsTable(){

    /*
    alert("Creating JSON Objects");


    let myJSONDiv = document.getElementById("myDynamicMechJSON");

    ////////////////////////////////////////////////////////////////////////
    //create objects using Mech class using the JSON we received from GET
    let rawJSONData = myJSONDiv.innerText;

    let backToMechObject = JSON.parse(rawJSONData);
    createMechObjectsFromJSON(backToMechObject);

    //alert(rawJSONData);

    //alert("Size:" +  Object.keys(backToMechObject).length);

    //alert(mechObjectsFromJSON[0].mechName);

    console.log(mechObjectsFromJSON);
    */

    //////////////////////////////////////////////////////////////////////
    //Display the first Mech 

    let myMechObjectDiv = document.getElementById("myMechFromJSON");

    myMechObjectDiv.replaceChildren();

    //////////////////////

    let myTable = document.createElement('TABLE'); //create the HTML table
    myTable.id = "myMechTable";

    myTable.border = '1'; //set the border size to 1px
    myTable.style.borderCollapse = 'collapse'; //set the border collapse style to collapse

    let myTableBody = document.createElement('TBODY'); //create the table body

    myTable.appendChild(myTableBody); //add the table body to the table


    //let numRows = mechObjectsFromJSON.length;
    lastIndex = mechObjectsFromJSON.length - 1;
    let numRows = Object.keys(mechObjectsFromJSON[0]).length;

    //console.log("NumRows:" + numRows);

    //currentIndex = 0;
    //previousIndex = 0;

    //console.log(mechObjectKeyNames);

    let keyNameText;


    for(let i = 0; i < numRows; i++){ //create and populate each row in the table

        let tr = document.createElement('TR'); //create the tr element
        myTableBody.appendChild(tr); //add the tr to the table body

        
        let keyNameTd = document.createElement('TD');
        keyNameTd.width = '50';

        keyNameText = mechObjectKeyNames[i].charAt(0).toUpperCase() + mechObjectKeyNames[i].slice(1);
        keyNameText = keyNameText.replace(/([A-Z])/g, ' $1').trim();
        //keyNameTd.appendChild(document.createTextNode(mechObjectKeyNames[i]));
        keyNameTd.appendChild(document.createTextNode(keyNameText));
        tr.appendChild(keyNameTd);

        //let currentKey = mechObjectKeyNames[i];

        //let mechTd = document.createElement('TD');
        //mechTd.width = '50';
        //mechTd.appendChild(document.createTextNode(mechObjectsFromJSON[currentIndex][mechObjectKeyNames[i]]));
        //tr.appendChild(mechTd);

        if(i == numRows - 1){ //handle image property

            let mechTd = document.createElement('TD');
            mechTd.width = '50';
            mechTd.align = "center";

            let mechImage = document.createElement('IMG');
            //mechImage.src = mechObjectsFromJSON[currentIndex][mechObjectKeyNames[i]];
            mechImage.src = sortedMechObjectsFromJSON[currentIndex][mechObjectKeyNames[i]];

            // objectarr[i][property] -> value

            //mechTd.appendChild(document.createTextNode(mechObjectsFromJSON[currentIndex][mechObjectKeyNames[i]]));
            mechTd.appendChild(mechImage);
            tr.appendChild(mechTd);
            

        }else if(keyNameText == "Development Type1"){ //set to "Development Type1" to disable this check
            
            let mechTd = document.createElement('TD');
            mechTd.width = '50';

            let mechInput = document.createElement('SELECT');
            mechInput.disabled = true;
            
            let opGroup = document.createElement('OPTGROUP');
            opGroup.disabled = true;
            mechInput.appendChild(opGroup);

            let protoOp = document.createElement('OPTION');
            protoOp.appendChild(document.createTextNode(mechObjectsFromJSON[currentIndex][mechObjectKeyNames[i]]));
            opGroup.appendChild(protoOp);

            let devOp = document.createElement('OPTION');

            if(mechObjectsFromJSON[currentIndex][mechObjectKeyNames[i]] == "Production"){

                devOp.appendChild(document.createTextNode("Prototype"));
                opGroup.appendChild(devOp);

            }else{
                devOp.appendChild(document.createTextNode("Production"));
                opGroup.appendChild(devOp);
            }


            mechTd.appendChild(mechInput);
            tr.appendChild(mechTd);


            
        }else{ //handle other properties

            let mechTd = document.createElement('TD');
            mechTd.width = '50';

            let mechInput = document.createElement('INPUT');
            mechInput.id = mechObjectKeyNames[i];
            mechInput.type = "text";
            mechInput.size = '50';
            mechInput.readOnly = true;
            //mechInput.value = mechObjectsFromJSON[currentIndex][mechObjectKeyNames[i]];
            mechInput.value = sortedMechObjectsFromJSON[currentIndex][mechObjectKeyNames[i]];
            //mechInput.value = mechInput.id;
            mechTd.appendChild(mechInput);

            //mechTd.appendChild(document.createTextNode(mechObjectsFromJSON[currentIndex][mechObjectKeyNames[i]]));
            tr.appendChild(mechTd);

        }

        /*
        let mechNameTd = document.createElement('TD');
        mechNameTd.width = '50';
        mechNameTd.appendChild(document.createTextNode(mechObjectsFromJSON[currentIndex].mechName));
        tr.appendChild(mechNameTd);

        let mechModelTd = document.createElement('TD');
        mechModelTd.width = '50';
        mechModelTd.appendChild(document.createTextNode(mechObjectsFromJSON[currentIndex].mechModel));
        tr.appendChild(mechModelTd);

        let mechTypeTd = document.createElement('TD');
        mechTypeTd.width = '50';
        mechTypeTd.appendChild(document.createTextNode(mechObjectsFromJSON[currentIndex].mechType));
        tr.appendChild(mechTypeTd);
        */


        /////////////////////////////////////////////
        /*
        let indexTD = document.createElement('TD'); //create the td element for the index of the prime number
        indexTD.width = '50'; //set the cell width to 50
        indexTD.appendChild(document.createTextNode(i + 1)); //add the text content to the index td
        tr.appendChild(indexTD); //add the index td to the tr

        let valueTD = document.createElement('TD'); //create the td element for the value of the prime number
        valueTD.width = '50'; //set the cell width to 50
        valueTD.appendChild(document.createTextNode(myPrimeNums[i])); //add the text content to the value td
        tr.appendChild(valueTD); //add the value td to the tr
        */

    }

    let indexTr = document.createElement('TR');
    myTableBody.appendChild(indexTr);

    let indexTd = document.createElement('TD');
    indexTd.size = '50';
    indexTd.appendChild(document.createTextNode("Index:"));

    indexTr.appendChild(indexTd);

    let actualIndexTd = document.createElement('TD');
    actualIndexTd.size = '50';
    actualIndexTd.id = "realIndex";
    actualIndexTd.appendChild(document.createTextNode(currentIndex));

    //let indexInput = document.createElement('INPUT');
    //indexInput.readOnly = true;
    //indexInput.size = '50';
    //indexInput.value = currentIndex;
    //actualIndexTd.appendChild(indexInput);
    indexTr.appendChild(actualIndexTd);


    let totalIndexTr = document.createElement('TR');
    myTable.appendChild(totalIndexTr);

    let totalIndexTd = document.createElement('TD');
    totalIndexTd.size = '50';
    totalIndexTd.appendChild(document.createTextNode("Total Elements: "));
    totalIndexTr.appendChild(totalIndexTd);

    let actualTotalIndexTd = document.createElement('TD');
    actualTotalIndexTd.size = '50';
    actualTotalIndexTd.appendChild(document.createTextNode(mechObjectsFromJSON.length));
    totalIndexTr.appendChild(actualTotalIndexTd);
    
    /////////////////////////////////////////////////////////////////////////////////////////////
    let myBR = document.createElement('BR'); //create a br element

    myMechObjectDiv.appendChild(myTable); //add the table to the div
    
    myMechObjectDiv.appendChild(myBR); //add the br to the div


    //create prev and next buttons

    let myPrevNextDiv = document.getElementById("prevAndNext");

    myPrevNextDiv.replaceChildren();


    //First Button
    let firstMechButton = document.createElement('INPUT');
    firstMechButton.type = "button";
    firstMechButton.value = "First";
    firstMechButton.onclick = function(){
        handleFirstButton();
    }
    myPrevNextDiv.appendChild(firstMechButton);

    //Regular Prev Button
    let previousButton = document.createElement('INPUT');
    previousButton.type = "button";
    previousButton.value = "Previous";
    previousButton.onclick = function(){
        handlePrevButton();
    }
    myPrevNextDiv.appendChild(previousButton);

    //Regular Next Button
    let nextButton = document.createElement('INPUT');
    nextButton.type = "button";
    nextButton.value = "Next";
    nextButton.onclick = function(){
        handleNextButton();
    }
    myPrevNextDiv.appendChild(nextButton);


    //Last Button
    let lastMechButton = document.createElement('INPUT');
    lastMechButton.type = "button";
    lastMechButton.value = "Last";
    lastMechButton.onclick = function(){
        handleLastButton();
    }
    myPrevNextDiv.appendChild(lastMechButton);



    //Delete
    let removeMechButton = document.createElement('INPUT');
    removeMechButton.type = "button";
    removeMechButton.value = "Delete";
    removeMechButton.onclick = function(){
        handleDeleteButton();
    }
    myPrevNextDiv.appendChild(removeMechButton);

    //Sort by index

    //Sort by other

    myPrevNextDiv.appendChild(myBR);

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    //Lab 10

    //Edit Button
    let editButton = document.createElement('INPUT');
    editButton.id = "editButton";
    editButton.type = "button";
    editButton.value = "Edit[Off]";
    editButton.onclick = function() {
        handleEditButton();
    }
    myPrevNextDiv.appendChild(editButton);


    //Save Button
    let saveButton = document.createElement('INPUT');
    saveButton.type = "button";
    saveButton.value = "Save";
    saveButton.onclick = function() {
        handleSaveButton();
    }
    myPrevNextDiv.appendChild(saveButton);


    //Save All Button
    let saveAllButton = document.createElement('INPUT');
    saveAllButton.type = "button";
    saveAllButton.value = "Save All";
    saveAllButton.onclick = function() {
        handleSaveAllButton();
    }
    myPrevNextDiv.appendChild(saveAllButton);




    //Sort By Index Button
    let sortByIndexButton = document.createElement('INPUT');
    sortByIndexButton.type = "button";
    sortByIndexButton.value = "Sort By Pkey";
    sortByIndexButton.onclick = function() {
        handleSortByIndexButton();
    }
    myPrevNextDiv.appendChild(sortByIndexButton);


    //Sort by Name Button
    let sortByNameButton = document.createElement('INPUT');
    sortByNameButton.type = "button";
    sortByNameButton.value = "Sort By Name";
    sortByNameButton.onclick = function() {
        handleSortByNameButton();
    }
    myPrevNextDiv.appendChild(sortByNameButton);


    myPrevNextDiv.appendChild(myBR);

    //PHP Prev Button
    /*

    let prevMech = document.createElement('INPUT');
    prevMech.type = "button";
    prevMech.value = "Previous Mech";
    prevMech.onclick = function (){
        alert("Hi");
        sendGetRequest();
    }
    myPrevNextDiv.appendChild(prevMech);


    //PHP Next Button
    let nextMech = document.createElement('INPUT');
    nextMech.type = "button";
    nextMech.value = "Next Mech";
    nextMech.onclick = function (){
        alert("Yo");
        sendGetRequest();
    }
    myPrevNextDiv.appendChild(nextMech);
    */


    //////////////////////////////////////////////////////////////////

    //Insert Button

    let myInsertDiv = document.getElementById("insertMech");
    myInsertDiv.replaceChildren();

    let insertButton = document.createElement('INPUT');
    insertButton.type = "button";
    insertButton.value = "Insert";
    insertButton.onclick = function() {
        handleInsertButton();
    }
    myInsertDiv.appendChild(insertButton);
    
    
    


    
}


//////////////////////////////////////////////////////////////////////////////////////////////


function getPHPResults(){
    
     //1 Insert, Delete, SaveAll
    //2 Upload Image
    //3 Sort by Index
    //4 Sort by Name
    //5 Get
    try{

        if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status === 200){

               

                if(operationType == 1){

                    console.log("Got Post Results");
                    
                    //var response  = JSON.parse(httpRequest.responseText);
                    var str = httpRequest.responseText;

                    //var response = JSON.parse(httpRequest.responseText);

                    //var mechObjects = JSON.parse(httpRequest.responseText);
                    //alert(response);
                    //console.log(mechObjects);
                    console.log(str);
                    console.log("Current Index:" + currentIndex);
                    //console.log(response);

                    displayMechObjectAsTable();
                    
                    //var resStr = JSON.stringify(response);

                    //alert(httpRequest.responseText);


                }else if(operationType == 2){

                    var str = httpRequest.responseText;

                    console.log("Got Post Results");

                    console.log(str);

                }else if(operationType == 3 || operationType == 4){

                    var str = httpRequest.responseText;

                    var data = JSON.parse(httpRequest.responseText);

                    console.log("Got Post Results");

                    console.log(str);
                    console.log(data);
                    console.log("Current Index:" + currentIndex);

                    sortedMechObjectsFromJSON = data;


                    //oldMechObjectsFromJSON = mechObjectsFromJSON;

                    //currentIndex = 0;
                    //mechObjectsFromJSON = sortedMechObjectsFromJSON;

                    displayMechObjectAsTable();

                }

                /*
                
                if(httpRequest.responseText == "oof"){
                    console.log("Did Not Get Post Results");
                }else{
                    console.log("Got Post Results");
                    
                    //var response  = JSON.parse(httpRequest.responseText);
                    var str = httpRequest.responseText;

                    //var mechObjects = JSON.parse(httpRequest.responseText);
                    //alert(response);
                    //console.log(mechObjects);
                    console.log(httpRequest.responseText);
                    //var resStr = JSON.stringify(response);

                    //alert(httpRequest.responseText);

                }
                */
                

                
            }else{
                alert("There was a problem with the request");
            }
        }



    }catch(err){
        alert("Error: Caught Exception: " + err);
    }
};


//////////////////////////////////////////////////////////////////////////////////
//GET Method



function populateMechObjectArray(){

    try{ //try to do this

        if(httpRequest.readyState === XMLHttpRequest.DONE){ //if the readyState === 4
            if(httpRequest.status === 200){ //if the status === 200
                //Do something
                data = JSON.parse(httpRequest.responseText); //convert the Mechs JSON from sting back to Object format
                str = JSON.stringify(data); //convert the Mech JSON to a string so that we can append it to the div in the HTML web page
                //alert("Mech JSON is Ready");

                //console.log(httpRequest.responseText);
                console.log(data);
                
            
                //let backToMechObject = JSON.parse(rawJSONData);
                createMechObjectsFromJSON(data);

                console.log(mechObjectsFromJSON);
                //console.log(sortedMechObjectsFromJSON);

                


                ///////////////////////////////////////////
                //create display mech button

                let myDisplayButtonDiv = document.getElementById("firstButton");

                myDisplayButtonDiv.innerHTML = "";

                displayMechObjectAsTable();

                /*
                let myDisplayButtonDiv = document.getElementById("displayMechObject");

                myDisplayButtonDiv.replaceChildren();

                let displayMechButton = document.createElement('INPUT');
                displayMechButton.type = "button";
                displayMechButton.value = "Press the Button to Display a Mech";
                displayMechButton.onclick = function(){
                    handleHTTPRequest(2)
                }
                myDisplayButtonDiv.appendChild(displayMechButton);
                */
                
                
                
                //alert(rawJSONData);
            
                //alert("Size:" +  Object.keys(backToMechObject).length);
            
                //alert(mechObjectsFromJSON[0].mechName);
            
                //console.log(mechObjectsFromJSON);
            }else{
                alert("Error: There was a problem with the request");
            }
        }




    }catch(err){ //if something went wring catch the error
        alert("Error: Caught Exception: " + err); //show the error on the screen
        console.log("Error: Caught Exception: " + err); //show the error on the console
    }

}





function makeGetRequest(argURL){

    httpRequest = new XMLHttpRequest();
    if(!httpRequest){
        alert("Cannot create an XMLHTPP instance");
        return false
    }

    httpRequest.onreadystatechange = populateMechObjectArray;
    httpRequest.open('GET', argURL);
    httpRequest.send();
};

function sendGetRequest(argURL){
    //var myJSON = JSON.stringify(mechObjectsFromJSON); //send Array of Mech Objects
    //console.log(mechObjectsFromJSON); //log the array that was send
    makeGetRequest(argURL); //make the GET request to specified php file
    //alert("Get Sent");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//POST Method
function makePostRequest(argURL, argStr){

     //1 Insert, Delete, SaveAll
    //2 Upload Image
    //3 Sort by Index
    //4 Sort by Name
    //5 Get

    console.log(argStr);
    console.log(operationType)

    httpRequest = new XMLHttpRequest();
    if(!httpRequest){
        alert("Cannot create an XMLHTPP instance");
        return false
    }


    if(operationType == 1){

        httpRequest.onreadystatechange = getPHPResults;
        httpRequest.open('POST', argURL);
        httpRequest.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        httpRequest.send('mechObjectsFromJSON=' + argStr);

    }else if(operationType == 2){
        httpRequest.onreadystatechange = getPHPResults;
        httpRequest.open('POST', argURL, true);
        httpRequest.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        httpRequest.send(dataForm);
    }else if(operationType == 3 || operationType == 4){

        httpRequest.onreadystatechange = getPHPResults;
        httpRequest.open('POST', argURL);
        httpRequest.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        httpRequest.send('sortBy=' + argStr);


    }
   


}


function sendPostRequest(argURL, argType){

    //1 Insert, Delete, SaveAll
    //2 Upload Image
    //3 Sort by Index
    //4 Sort by Name
    //5 Get

    operationType = argType;

    var myJSON = JSON.stringify(mechObjectsFromJSON); //send the Array of Mech Objects
    console.log(mechObjectsFromJSON);
    console.log("Sent Post");
    console.log(argURL);

   if(operationType == 1){
    makePostRequest(argURL, myJSON);
   }else if(operationType == 2){
    makePostRequest(argURL, dataForm);
   }else if(operationType == 3){

        makePostRequest(argURL, "pKey");
   }else if(operationType == 4){
        makePostRequest(argURL, "mechName");
   }
    
}


function handleHTTPRequest(x){

    typeRequestAction = x;

    if(typeRequestAction == 1){
        generateMechJSON();
    }else if(typeRequestAction == 2){
        //displayMechObject();
        displayMechObjectAsTable();
    }else if(typeRequestAction == 3){
        sendGetRequest('getMechs.php');
    }


};


///////////////////////////////////////////////////////////////////


