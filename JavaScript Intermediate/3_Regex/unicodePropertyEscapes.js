// Contoh penggunaan \p{UnicodePropertyName=UnicodePropertyValue}:
const regex = /\p{General_Category=Letter}/gu; // --> ada flag u
const word = "Skilvul";
console.log(word.match(regex));
// Output: ["S", "k", "i", "l", "v", "u", "l"]

// menggunakan pattern /\p{sc=Latin}/gu.
const regex = /\p{Script=Latin}/gu;
const word = "Skilvul";
console.log(word.match(regex)); // Output: ["S", "k", "i", "l", "v", "u", "l"]

// penggunaan /\p{Script_Extensions=Hira}/gu:
const regex = /\p{Script_Extensions=Hira}/gu;
const word = "あ";
console.log(regex.test(word)); // Output: true

// Contoh penggunaan {UnicodeBinaryPropertyName}:
const regex = /\u0024/gu;
const word = "PS5 seharga $499";
console.log(word.match(regex)); // Output: ["$"]
// u0024 adalah kode ASCII dari $.

// Contoh penggunaan \P:
const regex = /\P{General_Category=Letter}/gu;
const word = "Skilvul";
console.log(word.match(regex)); // Output: null

const regex = /\P{scx=Hira}/gu;
const word = "あ";
console.log(regex.test(word)); // Output: false