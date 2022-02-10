// Contoh menggunakan export default:

// greeting.js
function sayHello(user) {
    console.log(`Hello, ${user}!`);
}

export default sayHello;
// import pada export default:
import sayHello from "./greeting.js";
sayhello("Thoriq"); // Output: Hello, Thoriq!

// menggunakan export dan export default bersamaan dalam satu file module:
export const FONTS = {
    // small: 10 px;
    // medium: 14 px;
    // normal: 16 px;
    // big: 20 px;
}

export default function sayHello(user) {
    console.log(`Hello, ${user}!`);
}
// cara importnya
import sayHello, { FONTS } from "./greeting.js"