const checkTypeNumber = (givenNumber) => {
	if (!givenNumber) {
		return `error: hey, where is parameter`;
	} else if (givenNumber && typeof givenNumber !== 'number') {
		return `error: Invalid type data`;
	} else {
		if (givenNumber % 2 === 0) {
			return `${givenNumber} adalah bilangan GENAP`;
		} else {
			return `${givenNumber} adalah bilangan GANJIL`;
		}
	}
};

console.log(checkTypeNumber(2));
console.log(checkTypeNumber(9));
console.log(checkTypeNumber('9'));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber());

// console.log({
// 	no1: checkTypeNumber(2),
// 	no2: checkTypeNumber(9),
// });

module.exports = checkTypeNumber;
