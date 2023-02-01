let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = array.length;
let massimo = array[0];

function max(array, n) {
	if (n === 0) {
		return massimo;
	} else {
		if (array[n] > massimo) {
			massimo = array[n];
		}
		return max(array, n - 1);
	}
}

console.log(max(array, n - 1));