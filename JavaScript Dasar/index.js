// ----- Tipe Data -----
// number
// string
// undefined
// null
// boolean
// symbol
// object

// var nama = "Dayat";
// var harga = 2000;
// var apakahSudahMenikah = false;
// let jumlahAnak;
// let namaVariabel1 = "hello";
// const namaVariabel2 = "Wolrd";

// console.log(nama)
// console.log(harga)
// console.log(apakahSudahMenikah)
// console.log(jumlahAnak)
// console.log(namaVariabel1)
// console.log(namaVariabel2)

// operator aritmatika
// + penjumlahan; - pengurangan; * perkalian; / pembagian;
//** eksponen(pangkat); % modulus; ++ increment; -- decrement
console.log("operator aritmatika")

var operatorAritmatika = 10
operatorAritmatika--

console.log(operatorAritmatika)
console.log("------------------")

// operator assignment
console.log("operator asignment")

var operatorAssignment = 10
operatorAssignment += 2

console.log(operatorAssignment)
console.log("------------------")

// operatoer string dan number
console.log("operator string dan number")

var namaDepan = "Mohammad"
var namaBelakang = "Hidayatullah"

console.log(namaDepan + " " + namaBelakang)
console.log("------------------")

// operator perbandingan
console.log("operator perbandingan")
    // == === != !== <= >=
console.log(3 >= 2)
console.log("------------------")

// Operator Logika
console.log("operator logika")
    // && || !
var sudahMenikah = false
var sudahPunyaAnak = false

console.log(!sudahMenikah || sudahPunyaAnak)
console.log("------------------")
console.log("-------------------------------------------------")

// Mendeklarasikan Fungsi
console.log("mendeklarasikan fungsi")
console.log("------------------")

// function penambahan(parameter1, parameter2) {
//     console.log(parameter1 + parameter2)
// }

var penambahan = function(parameter1, parameter2) {
    return parameter1 + parameter2
}

console.log(penambahan(10, 2))
console.log("-------------------------------------------------")

// JavaScript Hoisting
console.log("JavaScript Hoisting")
console.log("------------------")


let manusia = {
    nama: "Dayat",
    pekerjaan: "Programer"
}
const sapaSiManusia = function() {
    console.log(`Hai ${manusia.nama}, apakah benar anda seorang ${manusia.pekerjaan}`)
}
sapaSiManusia()
console.log(manusia)

console.log("------------------")
let carName = 'Kijang';

function displayCarName() {
    let carName = 'Honda';

    return 'Mobil ini bermerk ' + carName;
}

console.log(displayCarName());