function buttonClicked() {

	let line = document.getElementById('svgLine');

	line.classList.remove('')

	line.classList.add('orange');


	document.getElementById('svgLine').style.

}

function mouseOver() {

	document.getElementById('svgCirc').class = "green";

}

function mouseOut() {

	document.getElementById('svgCirc').class = "red";

}

document.getElementById("button").addEventListener("click", buttonClicked);

document.getElementById("svgCirc").addEventListener("onmouseover", mouseOver);

document.getElementById("svgCirc").addEventListener("onmouseout", mouseOut);

