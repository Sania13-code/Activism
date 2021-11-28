/* .js files add interaction to your website */
var factList = [
  "Around the world 59 million children of primary school age are being denied an education, and almost 65 million adolescents are without access to a secondary school.",/*0*/
  "With access to education for the women, it has been easy to empower them to take decisions regarding reproductive health and raising of children in a “modern” or a manner that is healthy. This has led to low mortality rates and voluntary participation in birth control programs. ",/*1*/
  "2",/*2*/
  "3"];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

try{
  myButton.addEventListener("click", displayFact);
}
catch(err){
  console.log(err);
  console.log("oopsie");
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
/*
KEY FEATURE: Personalize it*/


var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

console.log(scriptBtn);
console.log(scriptBtn == true);

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}


function generateScript() {
  console.log("wow");
  var name = document.getElementById("name").value;

   displayScript.innerHTML = "Today, I <b>" + name + "</b> make a commitment to raise my level of awareness about the cause and assist anyone in need. I am aware of my advantages. I am a compassionate human being who dreams of a better world and will continue to contribute to its advancement.";
}

