function isValidPassword(givenPassword) {
	const result = new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{8})');
	if (typeof givenPassword !== 'string') {
		return 'ERROR: parameter yang dimasukkan tidak sesuai dengan kriteria password';
	} else {
		return result.test(givenPassword) ? true : false;
	}
}

console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('@eong'));
console.log(isValidPassword('Meong2'));
console.log(isValidPassword(0));
console.log(isValidPassword());

module.exports = isValidPassword;
