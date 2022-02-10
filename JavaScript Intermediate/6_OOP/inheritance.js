// Contoh di bawah ini kita akan membuat sebuah class Hewan. 
// Lalu kita akan membuat class Kucing yang mewarisi sifat dari class Hewan menggunakan extends:
class Hewan {
    constructor(nama, kaki) {
        this.nama = nama;
        this.kaki = kaki;
    }

    tidur() {
        return `${this.nama} sedang tidur`;
    }
}

// class Hewan mewarisi class Kucing
class Kucing extends Hewan {
    constructor(nama, kaki, makanan) {
        super(nama, kaki);
        this.makanan = makanan;
    }

    mencuri() {
        return `${this.nama} mencuri ${this.makanan}`;
    }
}

// membuat objek dari class Kucing
let kucing = new Kucing("Tom", 4, "ikan");
console.log(kucing.nama); // Tom
console.log(kucing.tidur()); // Tom sedang tidur
console.log(kucing.mencuri()); // Tom mencuri ikan



// Latihan
class Orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    tidur() {
        return `${this.nama} sedang tidur`;
    }

    makan() {
        return `${this.nama} sedang makan`;
    }
}

// Tulis kode kamu di bawah ini

class Pelajar extends Orang {
    constructor(nama, umur, namaSekolah) {
        super(nama, umur);
        this.namaSekolah = namaSekolah;
    }
    belajar() {
        return `${this.nama} belajar di ${this.namaSekolah}`;
    }
}

let user = new Pelajar("Terra", 17, "Skilvul");

console.log(user);