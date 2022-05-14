const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
function getAngkaTerbesarKedua(dataNumbers) {
	if (typeof dataNumbers === 'object') {
		const data = dataNumbers.sort().reverse();
		const arr = [...new Set(data)];
		return arr[1];
	} else if (
		typeof dataNumbers === 'number' ||
		typeof dataNumbers === 'string'
	) {
		return 'Error: Invalid type data';
	} else {
		return 'Error: No Parameter';
	}
}

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());

module.exports = getAngkaTerbesarKedua;
