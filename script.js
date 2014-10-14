
var startbutton = document.getElementById("startbutton");
var duck = document.getElementById("duck");

duck.setAttribute("class", "duck-icon hidden");

startbutton.addEventListener("click", function(e) {
	document.getElementById("water").setAttribute("class", "water expand");
	startbutton.setAttribute("class", "hidden");
	duck.setAttribute("class", "duck-icon");
	
	setTimeout(function() {
		duck.setAttribute("class", "duck-icon swim");
		// duck.setAttribute("style", "left: 500px;");
	}, 300);
	
});