/* 12.Terdapat bilangan array integer, buat function untuk menampilkan bilangan genap saja.
      Gunakan split() method untuk merubah string menjadi array */

let arr = [2,3,4,5,6,7];
let genap = [];
let i = 0;
	for(i; i <arr.length; i++){
		if (arr[i] % 2 == 0) {
			genap.push(arr[i]);
            
		}
	}
		console.log(genap);

