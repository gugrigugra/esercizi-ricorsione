// convertire un numero decimale in binario

let num = 5;

function convert(num) {
	if (num === 0) {
		return "";
	} else {
		return convert(Math.floor(num / 2)) + (num % 2);
	}
}

console.log(convert(num));
