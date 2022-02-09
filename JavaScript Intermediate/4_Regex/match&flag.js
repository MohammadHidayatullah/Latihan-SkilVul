// match
const regex = /i/;
const word = "Indonesia";
console.log(word.match(regex)); // Output: ['i']

// match & flag g
const regex = /n/g;
const word = "Indonesia";
console.log(word.match(regex)); // Output: ['n', 'n']

// match & flag g, i
const regex = /i/ig;
const word = "Indonesia";
console.log(word.match(regex)); // Output: ['I', 'i']

// Buat kode kamu di bawah ini
const myRegex = /Skilvul/i
const words = "Saya belajar coding di Skilvul setiap hari";
const result = words.match(myRegex);
console.log(result);