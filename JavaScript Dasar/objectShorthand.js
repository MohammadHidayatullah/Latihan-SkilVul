console.log('JavaScript Object Shorthand')
console.log('------------------------------')

let namaDepan = "Mohammad"
let namaBelakang = "Hidayatullah"

let manusia = {
    // namaDepan: namaDepan,
    namaDepan,
    // namaBelakang: namaBelakang
    namaBelakang
}

console.log(manusia)
console.log('------------------------------')

function ucapkanSalam(nameDepan, nameBelakang) {
    let manusie = {
        // nameDepan: nameDepan,
        nameDepan,
        // nameBelakang: nameBelakang
        nameBelakang
    }
    console.log(`Halo ${manusie.nameDepan} ${manusie.nameBelakang} apa kabar?`)
}

ucapkanSalam("Mohammad", "Hidayatullah")
console.log('------------------------------')

let human = {
    namaaDepan: "Dayat",
    namaaBelakang: "Hidayat",
    ucaapkanSalam /*: function*/ () {
        console.log(`Halo ${this.namaaDepan} ${this.namaaBelakang} apa kabar?`)
    }
}

human.ucaapkanSalam()