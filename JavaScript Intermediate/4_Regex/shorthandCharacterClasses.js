const regex = /.o/gi;
const word = "Indonesia";
console.log(word.match(regex)); // Output: ['do']
// Kode di atas akan menghasilkan array ['do'] , karena huruf sebelum karakter o yang digantikan . adalah karakter d.

const regex = /\d/gi;
const word = "PS5 seharga $499";
console.log(word.match(regex)); // Output: ["5", "4", "9", "9"]
// Kode di atas menghasilkan array ["5", "4", "9", "9"], 
// karena akan mencocokkan karakter digit yang ada pada variabel word.

const regex = /\D/gi;
const word = "PS5 seharga $499";
console.log(word.match(regex)); // Output: ["P", "S", " ", "s", "e", "h", "a", "r", "g", "a", " ", "$"]
// Kode di atas menghasilkan array ["P", "S", " ", "s", "e", "h", "a", "r", "g", "a", " ", "$"], 
//karena akan mencocokkan karakter selain digit yang ada pada variabel word.

const regex = /\w/gi;
const word = "PS5 seharga $499";
console.log(word.match(regex)); // Output: ["P", "S", "5" "s", "e", "h", "a", "r", "g", "a", "4", "9", "9"]
// Kode di atas menghasilkan array ["P", "S", "5" "s", "e", "h", "a", "r", "g", "a", "4", "9", "9"], 
// karena akan mencocokkan karakter huruf dan digit yang ada pada variabel word.

const regex = /\W/gi;
const word = "PS5 seharga $499";
console.log(word.match(regex)); // Output: [" ", " ", "$"]
// Kode di atas menghasilkan array [" ", " ", "$"], 
// karena akan mencocokkan karakter selain huruf dan digit yang ada pada variabel word.

const regex = /\s/gi;
const word = "Indonesia Raya";
console.log(word.match(regex)); // Output: [" "]
// Kode di atas menghasilkan array [" "], 
// karena akan mencocokkan karaketer whitespace yang ada pada variabel word.

const regex = /\S/gi;
const word = "Indonesia Raya";
console.log(word.match(regex)); // Output: ["Indonesia", "Raya"]
// Kode di atas menghasilkan array ["Indonesia", "Raya"], 
// karena akan mencocokkan karaketer selain whitespace yang ada pada variabel word.

const regex = /halo\?/gi;
const word = "halo?";
console.log(word.match(regex)); // Output: ["halo?"]
// Kode di atas menghasilkan array ["halo?"], 
// karena akan mencocokkan karaketer spesial yang ada pada variabel word.