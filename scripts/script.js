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

// bel 3
var kwal3 = document.querySelector ("li:nth-of-type(3) img");
var tekstBel3 = document.getElementById("bel3");
var bel3 = document.querySelector ("#bel3");

function toggleBel3(){
    tekstBel3.classList.toggle("belZichtbaar");
    console.log("bel 3 zichtbaar");
}

function sluitBel3() {
    if (tekstBel3.classList.contains("belZichtbaar")) {
        tekstBel3.classList.remove("belZichtbaar");
    }
}

kwal3.onclick = toggleBel3;
bel3.onclick = sluitBel3;