let parola = "anna";
let nMax = parola.length - 1;
let nMin = 0;
let n = parola.length;
let parolaDaComporre = "";

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
