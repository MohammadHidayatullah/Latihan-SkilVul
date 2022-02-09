const kata = "Saya belajar JavaScript di Skilvul.com";
const pattern = /Belajar/;
const result = pattern.exec(kata);
const test = pattern.test(kata);

console.log(result);
console.log(test);

console.log("--------------------")

const kata2 = "skilvul";
const pattern2 = /skil*l/;
console.log(pattern2.test(kata2)); // Output: true