console.log('JavaScript Arrow Function')
console.log('------------------------------------')

// function operasiPenambahan (angkaPertama, angkaKedua) {
//     console.log(angkaPertama + angkaKedua)
// }

// var operasiPenambahan = function(angkaPertama, angkaKedua) {
//     console.log(angkaPertama + angkaKedua)
// }

var operasiPenambahan = (angkaPertama, angkaKedua) => {
    console.log(angkaPertama + angkaKedua)
}
operasiPenambahan(1, 2)