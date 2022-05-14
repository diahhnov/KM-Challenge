const getSplitName = (personName) => {
	const splittedName = personName.toString().split(' ');
	if (typeof personName !== 'string') {
		return 'ERROR: ini bukan string';
	} else {
		if (splittedName.length === 3) {
			return {
				firtsname: splittedName[0],
				middlename: splittedName[1],
				lastname: splittedName[2],
			};
		} else if (splittedName.length === 2) {
			return {
				firtsname: splittedName[0],
				middlename: null,
				lastname: splittedName[1],
			};
		} else if (splittedName.length === 1) {
			return {
				firtsname: splittedName[0],
				middlename: null,
				lastname: null,
			};
		} else {
			return 'ERROR: This Function is only for 3 Characters';
		}
	}
};
console.log(getSplitName('Diah Novi Anti'));
console.log(getSplitName('Diah Novi'));
console.log(getSplitName('Diah'));
console.log(getSplitName('Diah Novi Anti canss'));
console.log(getSplitName(0));

module.exports = getSplitName;
