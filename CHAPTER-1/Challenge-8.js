const dataPenjualanNovel = [
	{
		idProduct: 'BOOK002421',
		namaProduk: 'Pulang - Pergi',
		penulis: 'Tere Liye',
		hargaBeli: 60000,
		hargaJual: 86000,
		totalTerjual: 150,
		sisaStok: 17,
	},
	{
		idProduct: 'BOOK002351',
		namaProduk: 'Selamat Tinggal',
		penulis: 'Tere Liye',
		hargaBeli: 75000,
		hargaJual: 103000,
		totalTerjual: 171,
		sisaStok: 20,
	},
	{
		idProduct: 'BOOK002941',
		namaProduk: 'Garis Waktu',
		penulis: 'Fiersa Besari',
		hargaBeli: 67000,
		hargaJual: 99000,
		totalTerjual: 213,
		sisaStok: 5,
	},
	{
		idProduct: 'BOOK002941',
		namaProduk: 'Laskar Pelangi',
		penulis: 'Andrea Hirata',
		hargaBeli: 55000,
		hargaJual: 68000,
		totalTerjual: 20,
		sisaStok: 56,
	},
];
function getInfoPenjualan(dataPenjualan) {
	const dataPenjualanobj = {
		totalKeuntungan: '',
		totalModal: '',
		persentaseKeuntungan: '',
		produkBukuTerlaris: '',
		penulisTerlaris: '',
	};
	const mapObj = dataPenjualan.map((data) => {
		let namaPenulis = data.penulis;
		let namaBuku = data.namaProduk;
		let hargaJual = data.hargaJual;
		let hargaBeli = data.hargaBeli;
		let totalTerjual = data.totalTerjual;
		let sisaStok = data.sisaStok;

		const penjualan = hargaJual * totalTerjual;
		const totalItem = totalTerjual + sisaStok;

		//mencari total modal
		const modal = hargaBeli * totalItem;
		//mencari total keuntungan
		const keuntungan = penjualan - modal;

		return {
			keuntungan,
			modal,
			totalTerjual,
			namaPenulis,
			namaBuku,
		};
	});

	let totalKeuntungan = 0;
	let totalModal = 0;
	let terjual = [];

	mapObj.forEach((nilai, index) => {
		totalModal += nilai['modal'];
		totalKeuntungan += nilai['keuntungan'];
		terjual[index] = nilai['totalTerjual'];
	});
	// ECMAScript Internationalization
	dataPenjualanobj['totalKeuntungan'] = Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
	})
		.format(totalKeuntungan)
		.split(',')[0];
	dataPenjualanobj['totalModal'] = Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
	})
		.format(totalModal)
		.split(',')[0];

	//presentasi keuntungan
	let totalPresentasi =
		String(Math.round((totalKeuntungan / totalModal) * 100)) + '%';
	dataPenjualanobj['persentaseKeuntungan'] = totalPresentasi;

	//buku terlaris dan penulis terlaris
	let terjualTertinggi = terjual.sort().reverse()[0];

	let bukuTerlaris = mapObj.filter((obj) => {
		return obj.totalTerjual === terjualTertinggi;
	});

	let namaBuku = bukuTerlaris[0]['namaBuku'];
	let namaPenulis = bukuTerlaris[0]['namaPenulis'];

	dataPenjualanobj['produkBukuTerlaris'] = namaBuku;
	dataPenjualanobj['penulisTerlaris'] = namaPenulis;

	return dataPenjualanobj;
}
console.log(getInfoPenjualan(dataPenjualanNovel));

module.exports = getInfoPenjualan;
