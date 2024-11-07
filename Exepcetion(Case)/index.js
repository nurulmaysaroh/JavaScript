function bagiDuaAngka(angka1, angka2) {
    try {
        // Memeriksa apakah kedua input adalah angka
        if (typeof angka1 !== 'number' || typeof angka2 !== 'number') {
            throw new Error('Input harus berupa angka.');
        }

        // Memeriksa apakah pembagian dengan nol
        if (angka2 === 0) {
            throw new Error('Pembagian dengan nol tidak diperbolehkan.');
        }

        // Mengembalikan hasil pembagian jika semua pengecekan lulus
        return angka1 / angka2;
    } catch (error) {
        // Menangkap dan menampilkan pesan kesalahan
        console.error('Terjadi kesalahan:', error.message);
    }
}

// Contoh penggunaan
console.log(bagiDuaAngka(10, 2));  // Output: 5
console.log(bagiDuaAngka(10, 0));  // Output: Pembagian dengan nol tidak diperbolehkan.
console.log(bagiDuaAngka(10, 'a'));  // Output: Input harus berupa angka.
