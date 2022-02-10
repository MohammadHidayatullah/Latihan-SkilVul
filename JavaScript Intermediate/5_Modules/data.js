// data.js
export function congratulation() {
    console.log(`Selamat!!! kamu telah berhasil`);
}

// Contoh

// export pada variabel :
export let name = "Thoriq";

// export pada objek JavaScript:
export let orang = {
    nama: "Thoriq",
    umur: 25,
    alamat: "Jl. Kemang Raya",
};

// export sebuah function:
export function sayHello(user) {
    console.log(`Hello, ${user}!`);
}

// meng-export variabel objek dan function sekaligus:
export let name = "Thoriq";

export let orang = {
    nama: "Thoriq",
    umur: 25,
    alamat: "Jl. Kemang Raya",
};

export function sayHello(user) {
    console.log(`Hello, ${user}!`);
}

// export secara terpisah untuk semua kode yang ingin kita export seperti contoh di bawah ini:
let name = "Thoriq";

let orang = {
    nama: "Thoriq",
    umur: 25,
    alamat: "Jl. Kemang Raya",
};

function sayHello(user) {
    console.log(`Hello, ${user}!`);
}

// Mengexport variable name, object orang dan function sayHello sekaligus
export { name, orang, sayHello };