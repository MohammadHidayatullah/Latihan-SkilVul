console.log('JavaScript Template Literals')
console.log('------------------------------------')

const manusia = {
    namaDepan: 'Mohammad',
    namaBelakang: 'Hidayatullah'
}

console.log(`Halo ${manusia.namaDepan} ${manusia.namaBelakang} apa kabar?`)

console.log('------------------------------------')
    //operasi matematika
let umur = 16;

let kalimat = `Umur saya tahun depan adalah ${umur + 1}`;

console.log(kalimat); // Output: Umur saya tahun depan adalah 17

let kalimat2 = `Tahun depan saya ${umur + 1 >= 17 ? 'bisa' : 'tidak bisa'} ikut pemilu`;

console.log(kalimat2); // Output: Tahun depan saya bisa ikut pemilu

console.log('------------------------------------')
    // funtion

// fungsi yang mengembalikan sebuah string
function namaSaya() {
    return "Dayat";
}

let kalimatPerkenalan = `Halo nama saya adalah ${namaSaya()}`;

console.log(kalimatPerkenalan); // Output: Halo nama saya adalah Dayat