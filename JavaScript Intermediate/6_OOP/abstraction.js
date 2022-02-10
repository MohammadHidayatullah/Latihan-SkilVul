// Dari contoh di bawah, dapat kita lihat bahwa detil
// properti pada job disembunyikan ke dalam class Job. Dari sisi programmer,
// hal ini dilakukan agar kode terlihat lebih rapih dan terstruktur karena properti
// pada job dipisahkan ke dalam sistem yang lebih kecil,
// yaitu class Job. Namun dari segi pengguna, pengguna tidak dapat melihat dan
// tidak perlu mengetahui properti apa saja yang terdapat pada class Job.
class Person {
    constructor({ firstName, lastName, job }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.job = job;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Job {
    constructor(company, position, salary) {
        this.company = company;
        this.position = position;
        this.salary = salary;
    }
}

const salah = new Person({
    firstName: 'Muhammad',
    lastName: 'Salah',
    job: new Job('Liverpool', 'striker', 200000)
});

const christ = new Person({
    firstName: 'Christiano',
    lastName: 'Ronaldo',
    job: new Job('Juventus', 'striker', 1000000)
});


// Latihan
// Buat kode kamu di bawah ini
class PersegiPanjang {
    constructor(panjang, lebar) {
        this.panjang = panjang;
        this.lebar = lebar;
    }
    luas() {
        let hasil = this.panjang * this.lebar;
        return hasil;
    }
    keliling() {
        let hasil = 2 * (this.panjang + this.lebar);
        return hasil;
    }
}

let persegiPanjang = new PersegiPanjang(3, 4);
console.log(persegiPanjang.luas());
console.log(persegiPanjang.keliling());