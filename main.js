function buttonClicked() {

	var element = document.getElementById("svgLine");
  	element.classList.toggle("green");
}

function mOver() {

	var circle = document.getElementById('svgCirc');
	circle.classList.toggle('orange');
}

function mOut() {

	var circle = document.getElementById('svgCirc');
	circle.classList.toggle('orange');
}

document.getElementById("button").addEventListener("click", buttonClicked);

document.getElementById("svgCirc").addEventListener("mouseover", mOver);

document.getElementById("svgCirc").addEventListener("mouseout", mOut);

