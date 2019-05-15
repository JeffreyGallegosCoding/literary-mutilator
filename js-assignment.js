window.onload = function() {


	console.log("Hello World");

//Change the font color function
document.getElementById('changeColorText').addEventListener ('click', function (event) {
		document.body.style.color = "red";
		//document.getElementById("changeColorText").src = "./js-assignment.js";
	}
);

//Change the text font function
	document.getElementById('changeTextFont').addEventListener ('click', function (event) {
			document.body.style.fontFamily = "verdana";
			//document.getElementById("changeTextFont").src = "./js-assignment.js";
		}
	);

	//Shuffle words function
	string.prototype.shuffle = function() {
		var a = this.split(""),
			n = a.length;

		for(var i = n; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
		}
	}
};



