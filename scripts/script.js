console.log("Spongebob!");

// overlay
var overlay = document.querySelector(".overlay")



// bel 1 
var kwal1 = document.querySelector ("li:nth-of-type(1) button");
var tekstBel1 = document.getElementById("bel1");
var bel1 = document.querySelector ("#bel1");

function toggleBel1(){
    overlay.classList.add("show-overlay")
    tekstBel1.classList.toggle("belZichtbaar");
    console.log("bel 1 zichtbaar");
}

function sluitBel1() {
    if (tekstBel1.classList.contains("belZichtbaar")) {
        tekstBel1.classList.remove("belZichtbaar");
        overlay.classList.remove("show-overlay")
    }
}

kwal1.onclick = toggleBel1;
bel1.onclick = sluitBel1;

// bel 2
var kwal2 = document.querySelector ("li:nth-of-type(2) button");
var tekstBel2 = document.getElementById("bel2");
var bel2 = document.querySelector ("#bel2");

function toggleBel2(){
    overlay.classList.add("show-overlay")
    tekstBel2.classList.toggle("belZichtbaar");
    console.log("bel 2 zichtbaar");
}

function sluitBel2() {
    if (tekstBel2.classList.contains("belZichtbaar")) {
        tekstBel2.classList.remove("belZichtbaar");
        overlay.classList.remove("show-overlay");
    }
}

kwal2.onclick = toggleBel2;
bel2.onclick = sluitBel2;

// bel 3
var kwal3 = document.querySelector ("li:nth-of-type(3) button");
var tekstBel3 = document.getElementById("bel3");
var bel3 = document.querySelector ("#bel3");

function toggleBel3(){
    overlay.classList.add("show-overlay")
    tekstBel3.classList.toggle("belZichtbaar");
    console.log("bel 3 zichtbaar");
}

function sluitBel3() {
    if (tekstBel3.classList.contains("belZichtbaar")) {
        tekstBel3.classList.remove("belZichtbaar");
        overlay.classList.remove("show-overlay")
    }
}

kwal3.onclick = toggleBel3;
bel3.onclick = sluitBel3;

//  bel 4
var kwal4 = document.querySelector ("li:nth-of-type(4) button");
var tekstBel4 = document.getElementById("bel4");
var bel4 = document.querySelector ("#bel4");

function toggleBel4(){
    overlay.classList.add("show-overlay")
    tekstBel4.classList.toggle("belZichtbaar");
    console.log("bel 4 zichtbaar");
}

function sluitBel4() {
    if (tekstBel4.classList.contains("belZichtbaar")) {
        tekstBel4.classList.remove("belZichtbaar");
        overlay.classList.remove("show-overlay")
    }
}

kwal4.onclick = toggleBel4;
bel4.onclick = sluitBel4;


// bel 5 
var kwal5 = document.querySelector ("li:nth-of-type(5) button");
var tekstBel5 = document.getElementById("bel5");
var bel5 = document.querySelector ("#bel5");

function toggleBel5(){
    overlay.classList.add("show-overlay")
    tekstBel5.classList.toggle("belZichtbaar");
    console.log("bel 5 zichtbaar");
}

function sluitBel5() {
    if (tekstBel5.classList.contains("belZichtbaar")) {
        tekstBel5.classList.remove("belZichtbaar");
        overlay.classList.remove("show-overlay")
    }
}

kwal5.onclick = toggleBel5;
bel5.onclick = sluitBel5;


//  code van de JS oefening van Sanne
//  audio
var geluid = document.querySelector("audio");
var spongeBob = document.querySelector("main>button:first-of-type");

spongeBob.onclick = audioSpongebob; 


function audioSpongebob() {
  if (geluid.paused) {
    geluid.play();
  }
}




//  Bronnen van content staan op miro