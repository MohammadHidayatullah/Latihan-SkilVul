// Buat kode kamu di bawah ini
const string = "saya belajar di skilvul.com";
const pattern = new RegExp("skilvul.com");

let status = pattern.test(string);

let result = pattern.exec(string);

console.log(result);
console.log(status);

console.log("--------------------------------------")

const string = 'Saya suka kopi';
const pattern = /kopi/;
const result = pattern.exec(string);
console.log(result);
// Output: ["kopi", index: 10, input: "Saya suka kopi", groups: undefined]

const string = 'Indonesia Tanah Air Ku';
const words = ['Tanah', 'Air'];
const result = new RegExp(words.join(' ')).exec(string);
console.log(result);
// Output: ["Tanah Air", index: 10, input: "Indonesia Tanah Air Ku", groups: undefined]

const regex = /Test/;
console.log(regex.test('Test')); // Output: true
const words = ["Tes", "Tess", "Test"];
console.log(new RegExp(words[2]).test('Test')); // Output: true

const words = ["Tes", "Tess", "Test"];
console.log(new RegExp(words[1]).test('Test')); // Output: false