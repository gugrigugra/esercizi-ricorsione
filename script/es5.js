let parola = "anna";
let nMax = parola.length - 1;
let nMin = 0;
let n = parola.length;
let parolaDaComporre = "";
let isPalindrom = false;

function checkPalindrom(parola, n) {
	if (n === 0) {
		return parolaDaComporre;
	} else {
		if (parola[nMin] == parola[nMax]) {
			parolaDaComporre += parola[nMin];
			nMin++;
			nMax--;
		}

		return checkPalindrom(parola, n - 1);
	}
}
console.log(checkPalindrom(parola, n));

let input = document.querySelector(".input");
let output = document.querySelector("#output");
input.innerHTML = `parola iniziale --> ${parola}`;

if (parolaDaComporre.toLowerCase === parola.toLowerCase) {
	output.innerHTML = `la parola è palindroma --> ${parolaDaComporre}`;
} else {
	output.innerHTML = `la parola non è palindroma`;
}
