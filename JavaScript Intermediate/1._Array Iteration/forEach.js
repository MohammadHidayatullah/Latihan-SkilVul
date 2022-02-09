let hewan = ["Ayam", "Buaya", "Cicak", "Domba"];

hewan.forEach(item => {
    if (item[0] < 'C') {
        console.log(item)
    }
});

let input = [100, 50, 60, 10];
let output = [];

input.forEach(item => {
    output.push(item / 10);
});

console.log(output);