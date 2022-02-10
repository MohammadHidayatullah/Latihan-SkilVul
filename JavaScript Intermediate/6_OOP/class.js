// Contoh pembuatan class Hewan dengan properti nama dan kaki dilengkapi dengan method .tidur():
class Hewan {
    constructor(nama, kaki) {
        this.nama = nama; // properti
        this.kaki = kaki; // properti
    }

    // Method
    tidur() {
        return `${this.nama} sedang tidur`;
    }
}

// Contoh membuat objek dari class Hewan yang telah kita buat di atas:

let hewan1 = new Hewan("Kucing", 4);
let hewan2 = new Hewan("Ayam", 2);

console.log(hewan1.nama); // Output: Kucing
console.log(hewan2.nama); // Output: Ayam
console.log(hewan1.tidur()); // Output: Kucing sedang tidur
console.log(hewan2.tidur()); // Output: Ayam sedang tidur

// Buat kode kamu dibawah ini
class Orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }
    bekerja() {
        return `${this.nama} sedang bekerja seperti biasa`;
    }
}
let user1 = new Orang("auzan", 8);

console.log(user1.bekerja());