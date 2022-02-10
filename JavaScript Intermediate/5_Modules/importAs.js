// import as:

// file user.js tempat mengexport
export const warnaKesukaan = "Merah";

export let orangBaru = {
    nama: "Thoriq",
    umur: 25,
    alamat: "Jl. Kemang Raya",
};

export function katakanHalo(user) {
    console.log(`Hello, ${user}!`);
}
// file index.js tempat mengimport
import {
    warnaKesukaan as favoriteColor,
    orangBaru as newPerson,
    katakanHalo as sayHello,
} from "./user.js";

console.log(favoriteColor); // Output: Merah
console.log(newPerson); // Output: {nama: "Thoriq", umur: 25, alamat: "Jl. Kemang Raya"}
sayHello(newPerson.nama); // Output: Hello, Thoriq!