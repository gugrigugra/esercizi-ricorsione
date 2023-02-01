let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

let n = array.length;
//la condizione base è quando l'indice del vettore arriva a zero

function sum(array, n) {
	if (n === 0) {
		return n;
	} else {
		return n + sum(array, n - 1);
	}
}

console.log(sum(array, n)); //55
