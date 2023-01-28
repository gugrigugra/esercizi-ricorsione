let array = [1, 5, 10, 15, 22];

//la condizione base è quando l'indice del vettore arriva a zero

function sum(n) {
	if (n == 0) {
		return n;
	} else {
		return array[n] + sum(array[n - 1]);
	}
}

console.log(sum(5))