// Sommare i numeri da 1 a 100
//ragione --> differenza tra un elemento ed il suo precedente
let n = 100

function sum(n) {
	if (n === 1) {
		//situazione base
		return n;
	} else {
		return n + sum(n - 1); //vado a chiamare la funzione in questo modo
		//facendo così il programma si bloccherà nella sua stessa funzione, fino a quando non verrà soddisfatta
		//la condiizone base
	}
}

let input = document.querySelector(".input")
let output = document.querySelector("#output")
input.innerHTML = `x --> 100`
output.innerHTML = `l'output è di ${sum(n)}`

console.log(sum(n)); // 5050