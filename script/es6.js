// convertire un numero decimale in binario

let num = 5;

function convert(num) {
	if (num === 0) {
		return "";
	} else {
		return convert(Math.floor(num / 2)) + (num % 2);
	}
}

let input = document.querySelector(".input");
let output = document.querySelector("#output");
input.innerHTML = `numero da convertire --> 5`;
output.innerHTML = `l'output è di ${convert(num)}`;
