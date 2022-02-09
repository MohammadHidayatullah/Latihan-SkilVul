// Java Script Array
// - Deklarasi Array
//     - object literal
//     - new Array()
// - Index dan length
// - Mengakses Element didalam Array
//     - salah satu
//     - terkahir
// - Mengubah data element di Array
// - Array build in method
//     - to String
//     - join
//     - Pop, push, shift dan unshift
//     - concat, slice
//     - sort, reverse
// - Menambah, Menghapus dan mengganti element array dengan splice()

var murid = ['Dayat', 'Sinta', 'Mirza']
var angka = [0, 3, 5, 6, 100, 10]
    // var murid = new Array('dayat', 'sinta')
    // murid[2] = 'Rozi'
    // murid.pop()
    // murid.push('Raya')
    // murid.shift()
    // murid.unshift('Raya')
var muridBaru = ['Raya']
var muridAmbil = murid.slice(0, 2)
murid.splice(2, 0, 'Rodat')
murid.splice(2, 2)
murid.splice(0, 1, 'Dayat007')

console.log(murid.sort())
console.log(angka.sort((a, b) => a - b))
console.log(angka.reverse())
console.log(murid.concat(muridBaru))
console.log(muridAmbil)
console.log(murid.length)
console.log(murid[0])
console.log(murid[murid.length - 1])
console.log('------------------')
console.log(murid)
console.log(murid.toString())
console.log(murid.join(" "))