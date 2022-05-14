const checkTypeNumber = require('../Challenge-2');

describe('Cek Tipe Angka', () => {
	describe('Bilangan Genap', () => {
		test('2', () => {
			expect(checkTypeNumber(2)).toBe('2 adalah bilangan GENAP');
		});
	});
	describe('Bilangan Ganjil', () => {
		test('9', () => {
			expect(checkTypeNumber(9)).toBe('9 adalah bilangan GANJIL');
		});
	});
});

describe('Cek Tipe data Angka', () => {
	describe('Error', () => {
		test('it should odds', () => {
			expect(checkTypeNumber('9')).toBe('error: Invalid type data');
		});
		test('it should odds', () => {
			expect(checkTypeNumber([])).toBe('error: Invalid type data');
		});
		test('it should odds', () => {
			expect(checkTypeNumber({})).toBe('error: Invalid type data');
		});
	});
});

describe('Parameter Kosong', () => {
	describe('Error', () => {
		test('it should odds', () => {
			expect(checkTypeNumber('9')).toBe('error: Invalid type data');
		});
	});
});
