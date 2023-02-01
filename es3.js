let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = array.length;
let minimo = array[0];

function min(array, n) {
	if (n === 0) {
		return minimo;
	} else {
		if (array[n] < minimo) {
			minimo = array[n];
		}
		return min(array, n - 1);
	}
}

console.log(min(array, n - 1));