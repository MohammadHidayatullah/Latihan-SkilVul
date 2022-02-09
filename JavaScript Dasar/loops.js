// JavaScript Loops

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

let nilai = 0

// while (nilai <= 10) {
//     console.log(nilai++)
// }

do {
    nilai += 1
    console.log(nilai)
} while (nilai < 10)

const buku = {
    judul: "Harry Potter and The Philosopher's Stone",
    pengarang: "J. K. Rowling",
    tahun: 1997
};
for (x in buku) {
    console.log(x, ':', buku[x]);
}