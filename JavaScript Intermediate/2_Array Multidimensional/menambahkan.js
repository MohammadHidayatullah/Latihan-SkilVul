// Menggunakan for()
let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7],
];

// total produk dikurangi data yg terjual
for (let i = 0; i < inventory.length; i++) {
    let stokTersisa = 100 - inventory[i][1];
    inventory[i].push(stokTersisa);
}

// Mengggunakan forEach()
let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7],
];

// total produk dikurangi data yg terjual
inventory.forEach((dataInventory) => {
    let stokTersisa = 100 - dataInventory[1];
    dataInventory.push(stokTersisa);
});

// Menggunakan map()
let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7],
];

// total produk dikurangi data yg terjual
inventory.map((dataInventory) => {
    let stokTersisa = 100 - dataInventory[1];
    dataInventory.push(stokTersisa);
});