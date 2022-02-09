// Buat sebuah variabel name berisikan nama anda
// Hilangkan semua huruf vokal pada nama anda
let name = "Mohammad Hidayatullah";
let regex = /[^aiueo]/gi;
let result = name.match(regex);
console.log(result);
let newName = result.join("");
console.log(newName);

// Contoh penggunaan (x):
// menjadikan isi dari First_Name dan Last_Name sebuah grup ()
const regex = /First_Name: (\w+), Last_Name: (\w+)/;
const word = "First_Name: John, Last_Name: Doe First_Name: Jane, Last_Name: Smith";

let match = word.match(regex);
console.log(match) // Output: ["First_Name: John, Last_Name: Doe", "John", "Doe"]
console.log(`hello ${match[1]} ${match[2]}`); // Output: hello John Doe

// Contoh penggunaan (?<Name>x):
// menjadikan isi dari First_Name dan Last_Name sebuah grup () dengan nama 'firstname', 'lastname'
const regex = /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/g;
const word = "First_Name: John, Last_Name: Doe First_Name: Jane, Last_Name: Smith";

let match = regex.exec(word);
console.log(match.groups) // Output: { "firstname": "John", "lastname": "Doe" }

// Contoh penggunaan x|y:
const regex = /PS5|XBOX/gi;
const word = "PS5 berwarna hitam";
console.log(word.match(regex)); // Output: ['PS5']

const regex = /PS5|XBOX/gi;
const word = "XBOX berwarna hijau";
console.log(word.match(regex)); // Output: ['XBOX']

// Contoh penggunaan [xyz]:
const regex = /[aiueo]/gi;
const word = "PS5 berwarna hitam";
console.log(word.match(regex)); // Array ["e", "a", "a", "i", "a"]

// Contoh penggunaan [^xyz]:
const regex = /[^aiueo]/gi;
const word = "PS5 berwarna hitam";
console.log(word.match(regex)); // Array ["P", "S", "5", " ", "b", "r", "w", "r", "n", " ", "h", "t", "m"]