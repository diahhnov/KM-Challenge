const isValidPassword = require('../Challenge-4');

describe('it should valid', () => {
	test('cek password', () => {
		expect(isValidPassword('Meong2021')).toBe(isValidPassword(true));
	});
});
