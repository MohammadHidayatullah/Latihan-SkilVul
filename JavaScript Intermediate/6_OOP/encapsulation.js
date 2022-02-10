// Contoh penerapan encapsulation pada class:
class Hewan {
    constructor(nama) {
        let _nama = nama;
        this.getNama = function() {
            return _nama;
        };
        this.setNama = function(nama) {
            _nama = nama;
        };
    }
}

// Untuk mengakses properti tersebut,
// kamu perlu menggunakan getter untuk mengambil nilai atau setter untuk mengubah nilai:
let kucing = new Hewan("TOM"); // membuat instance object
console.log(kucing.getNama()); // memanggil getter. Output: TOM

// Update nama hewan
kucing.setNama('Delta'); // memanggil setter
console.log(kucing.getNama()); // memanggil getter. Output: Delta


// Latihan
// Buat kode kamu di bawah ini
class Pelajar {
    constructor(nama, sekolah) {
        let _nama = nama;
        let _sekolah = sekolah;
        this.getNama = function() {
            return _nama;
        };
        this.getSekolah = function() {
            return _sekolah;
        };
        this.setNama = function(nama) {
            _nama = nama;
        }
        this.setSekolah = function(sekolah) {
            _sekolah = sekolah;
        }
    }
    belajar() {
        return `${this.getNama()} belajar di ${this.getSekolah()}`;
    }
}

let pelajar = new Pelajar("Alpha", "Skilvul");
console.log(pelajar.belajar());