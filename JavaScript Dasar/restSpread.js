// JavaScript Rest dan Spread

function menentukanPanjangArray(...parameters) {
    console.log(parameters)
    console.log(`Panjang array tersebut adalah ${parameters.length}`)
}

menentukanPanjangArray(1, 2, 3, 4, "hallo", "iya")

const angka = [1, 2, 3, 4]
console.log(...angka)

const person = {
    name: "Dayat",
    umur: 21,
    pekerjaan: "Mahasiswa"
}

const { name, ...sisaKeyDanValuenya } = person

console.log(sisaKeyDanValuenya)

const nama = "Dayat"

console.log([...nama])