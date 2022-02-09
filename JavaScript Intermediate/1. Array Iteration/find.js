let hewan = ["Harimau", "Gajah", "Jerapah", "Ular"];

// Buat kode kamu di bawah ini
let cariHewan = hewan.find(item => {
    return item[0] == "J" && item[item.length - 1] == "h"
});
console.log(cariHewan);

console.log("-----------------------")

let people = [{
        name: 'Jane',
        age: 20
    },
    {
        name: 'Doe',
        age: 15
    }
];

let janeFind = people.find(item => item.name === 'Jane');

let janeFilter = people.filter(item => item.name === 'Jane');

console.log(janeFind);
// Output: {name: 'Jane', age: 20} --> bentuk object

console.log(janeFilter);
// Output: [{ name: 'Jane', age: 20 }] --> bentuk array of object