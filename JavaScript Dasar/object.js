// JavaScript Object
// - Deklarasi Object
//      - object literal
//      - new object
// - Menambahkan properti baru kedalam object
// - Menghapus properti didalam object
// - Mengakses properti didalam object
// - Object method / fungsi

// var orang = new Object()
// orang.nama = 'dayat'
// orang.umur = 24
// orang.pekerjaan = 'programer'

var orang = {
    nama: 'dayat',
    umur: 24,
    pekerjaan: 'programer',
    menampilkanTanggalLahir: function() {
        console.log('15 Agustus 2000')
    }
}

orang.hobi = "jalan-jalan"
    // delete orang.umur
    // console.log(orang)
    // console.log(orang.nama)
console.log(orang['nama'])
console.log(orang['umur'])
console.log(orang['pekerjaan'])
orang.menampilkanTanggalLahir()