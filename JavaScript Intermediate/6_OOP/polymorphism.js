// membuat method pada child class dengan nama yang sama pada parent class tetapi isinya berbeda.
// Cara seperti ini disebut dengan overriding.
class Hewan {
    constructor(nama) {
        this.nama = nama;
    }

    suara() {
        console.log("suara hewan");
    }
}

class Kucing extends Hewan {
    constructor(nama) {
        super(nama);
    }

    // Overriding
    suara() {
        console.log("miaaaw");
    }
}

let kucing = new Kucing("TOM");
kucing.suara(); // Output: miaaaw


// Latihan
class Hewan {
    constructor(nama) {
        this.nama = nama;
    }

    makan() {
        return "Hewan sedang makan";
    }
}

// Buat kode kamu di bawah ini

class Harimau extends Hewan {
    constructor(nama) {
        super(nama);
    }
    makan() {
        return `${this.nama} makan daging`;
    }
}

let harimauSumatra = new Harimau("Harimau Sumatra");

console.log(harimauSumatra.makan());