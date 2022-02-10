// export as:
const warna = "Merah";

let orang = {
    nama: "Thoriq",
    umur: 25,
    alamat: "Jl. Kemang Raya",
};

function katakanHalo(user) {
    console.log(`Hello, ${user}!`);
}

export { warna as color, orang as person, katakanHalo as sayHello };

// cara importnya
import color from "./user.js";
import person from "./user.js";
import sayHello from "./user.js";

// kode di bawah ini akan error
import warna from "./user.js";
import orang from "./user.js";
import katakanHalo from "./user.js";

console.log("-------------------------------------")