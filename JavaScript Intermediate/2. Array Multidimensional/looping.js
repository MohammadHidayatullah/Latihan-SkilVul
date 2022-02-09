// Menggunakan for()

let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7],
];

for (let i = 0; i < inventory.length; i++) {
    for (let j = 0; j < inventory[i].length; j++) {
        console.log(inventory[i][j]);
    }
}

// Output:
// Kaos Polos
// 21
// Jaket Hoodie
// 13
// Topi
// 7

// Menggunakan forEach()

let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7],
];

inventory.forEach((baris) => {
    baris.forEach((kolom) => {
        console.log(kolom);
    });
});

// Output:
// Kaos Polos
// 21
// Jaket Hoodie
// 13
// Topi
// 7

// Menggunakan .map()

let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7],
];

inventory.map((baris) => {
    baris.map((kolom) => {
        console.log(kolom);
    });
});

// Output:
// Kaos Polos
// 21
// Jaket Hoodie
// 13
// Topi
// 7