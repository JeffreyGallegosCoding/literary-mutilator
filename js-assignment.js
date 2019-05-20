
function messWithWordColor() {


	console.log("Hello World");

//Change the font color function
	document.getElementById('changeColorText').addEventListener('click', function(event) {
			document.body.style.color = "red";
			//document.getElementById("changeColorText").src = "./js-assignment.js";
		}
	);
}

function messWithWordFont() {

//Change the text font function
	document.getElementById('changeTextFont').addEventListener('click', function(event) {
			document.body.style.fontFamily = "verdana";
			//document.getElementById("changeTextFont").src = "./js-assignment.js";
	}

	);
}



//Shuffling around words
//Do not use var anymore it is an outdated version - use const or let
function shufflize() {
	const txt = document.getElementById("shuffleWords").textContent;
	const words = txt.split(" ");
	words.map(function(t) {
		for(i = (words.length - 1); i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = words[i];
			words[i] = words[j];
			words[j] = temp;
		}
		document.getElementById("shuffleWords").textContent = words.join(" ")
	});
}


