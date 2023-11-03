// JavaScript Document
console.log("Howdy!");

var kwal1 = document.querySelector ("li:nth-of-type(1) img");
var tekstBel1 = document.getElementById("bel1");

kwal1.onclick = zichtbaarBel1;

function zichtbaarBel1(){
    tekstBel1.classList.toggle("bel1zichtbaar");
    console.log("Howdy!");

  }
