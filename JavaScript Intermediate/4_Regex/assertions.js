// Mencocokkan awal dari string ^
const regex = /^I/g;
const word = "Indonesia";
console.log(word.match(regex)); // Output: ['I']
const regex = /^i/g;
const word = "Indonesia";
console.log(word.match(regex)); // Output: null

// Mencocokkan akhir dari string $
const regex = /a$/g;
const word = "Indonesia";
console.log(word.match(regex)); // Output: ['a']
const regex = /A$/g;
const word = "Indonesia";
console.log(word.match(regex)); // Output: null

// Memberi batasan dari suatu string \b
const regex = /ee\b/gi;
const word = "Tree";
console.log(word.match(regex)); // Output: ['ee']

const regex = /oo\b/gi;
const word = "Moon";
console.log(word.match(regex)); // Output: null

// x(?=y) (lookahead): Hasilnya akan berupa 'x' hanya jika setelah 'x' diikuti oleh 'y' tanpa spasi.
const regex = /Moon(?=Child)/
const word = "MoonChild"
console.log(word.match(regex)); // Output: ["Moon"]

const regex = /Moon(?=Child)/
const word = "Moon child"
console.log(word.match(regex)); // Output: null

// (?<=y)x (lookbehind): Hasilnya akan berupa 'x' hanya jika sebelum 'x' adalah 'y' tanpa spasi.
const regex = /(?<=Jekyll)Hyde/
const word = "JekyllHyde"
console.log(word.match(regex)); // Output: ["Hyde"]

const regex = /(?<=Jekyll)Hyde/
const word = "HydeJekyll"
console.log(word.match(regex)); // Output: null

// Latihan
const word = 'Cakes';

const firstChar = /^C/;
const lastChar = /s$/;
const lastTwoChars = /es\b/;

console.log(word.match(firstChar));
console.log(word.match(lastChar));
console.log(word.match(lastTwoChars));