var css = document.querySelector("h3");
var background_color = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");



function setGradient(){
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = `Gradient: ${color1.value} ${color2.value}`; 
	background_color.textContent = `${body.style.background};`;
}
setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//Button for random background

function componentToHex(c){
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function RGBToHex(rgb){
	return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
}

function hexToComponent(hex){
	return parseInt(hex, 16);
}

function hexToRGB(hex){
	const r = hexToComponent(hex.substring(1,3));
	const g = hexToComponent(hex.substring(3,5));
	const b = hexToComponent(hex.substring(5)); 
	return [r,g,b];
}

function convertColor(color){
	if(color.length === 3){
		return RGBToHex(color);
	}else if(color.length === 7){
		return hexToRGB(color);
	}else{
		return "The input is not valid";
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

randomButton.addEventListener("click", function() {
	const rgb1 = [getRandomInt(255), getRandomInt(255), getRandomInt(255)]
	const rgb2 = [getRandomInt(255), getRandomInt(255), getRandomInt(255)]
	hex1 = convertColor(rgb1);
	hex2 = convertColor(rgb2);
	color1.value = hex1;
	color2.value = hex2;
	setGradient();
})
