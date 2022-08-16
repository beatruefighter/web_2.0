function edit(){
    
 
 var aageData = document.getElementById("aageData");
 var gennData = document.getElementById("gennData");

 


var updateData = document.getElementById("updateData");
var editData = document.getElementById("editData");
var signoutData = document.getElementById("signoutData");



aageData.style.display =  "block";



gennData.style.display =  "block";









signoutData.style.display = "none";
editData.style.display = "none";
updateData.style.display = "block";


}

function update(){


var aageData = document.getElementById("aageData");
var gennData = document.getElementById("gennData");





var signoutData = document.getElementById("signoutData");
var updateData = document.getElementById("updateData");
var editData = document.getElementById("editData");








var aageData = document.getElementById("aageData");
var gennData = document.getElementById("gennData");














var aageDataValue = document.getElementById("aageData").value;
var gennDataValue = document.getElementById("gennData").value;














aageData.innerHTML = aageDataValue;
gennData.innerHTML = gennDataValue;


aageData.style.display = "none";


gennData.style.display = "none";






signoutData.style.display = "block";
editData.style.display = "block";
updateData.style.display = "none";


}