const getSplitName = require('../Challenge-5');

describe('Susunan Nama', () => {
	test('3 kata', () => {
		expect(getSplitName('Diah Novi Anti')).toStrictEqual({
			firtsname: 'Diah',
			middlename: 'Novi',
			lastname: 'Anti',
		});
		expect(getSplitName('Diah Novi')).toStrictEqual({
			firtsname: 'Diah',
			middlename: null,
			lastname: 'Novi',
		});
		expect(getSplitName('Diah')).toStrictEqual({
			firtsname: 'Diah',
			middlename: null,
			lastname: null,
		});
		expect(getSplitName('Diah Novi Anti canss')).toBe(
			'ERROR: This Function is only for 3 Characters'
		);
	});
});

describe('Bukan sebuah huruf', () => {
	test('3 kata', () => {
		expect(getSplitName(0)).toStrictEqual('ERROR: ini bukan string');
	});
});
