import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();


// var hamb = document.getElementById("myLinks")
var hamb = document.getElementById("hamb");
var nav = document.getElementById("nav");
console.log(hamb);
hamb.addEventListener("click", function() {
	// console.log("click");
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		nav.classList.add("solid");
    	x.style.display = "none";
  	} else {
  		nav.classList.remove("solid");
    	x.style.display = "block";
  }
})

// function hamburger() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }