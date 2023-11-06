// JavaScript Document
console.log("Howdy!");

// bel 1 
var kwal1 = document.querySelector ("li:nth-of-type(1) img");
var tekstBel1 = document.getElementById("bel1");
var bel1 = document.querySelector ("#bel1");

function toggleBel1(){
    tekstBel1.classList.toggle("belZichtbaar");
    console.log("bel 1 zichtbaar");
}

function sluitBel1() {
    if (tekstBel1.classList.contains("belZichtbaar")) {
        tekstBel1.classList.remove("belZichtbaar");
    }
}

kwal1.onclick = toggleBel1;
bel1.onclick = sluitBel1;

// bel 2
var kwal2 = document.querySelector ("li:nth-of-type(2) img");
var tekstBel2 = document.getElementById("bel2");
var bel2 = document.querySelector ("#bel2");

function toggleBel2(){
    tekstBel2.classList.toggle("belZichtbaar");
    console.log("bel 2 zichtbaar");
}

function sluitBel2() {
    if (tekstBel2.classList.contains("belZichtbaar")) {
        tekstBel2.classList.remove("belZichtbaar");
    }
}

kwal2.onclick = toggleBel2;
bel2.onclick = sluitBel2;
