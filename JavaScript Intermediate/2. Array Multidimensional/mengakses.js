let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7],
];

let item;
let jumlahTerjual;

// Buat kode kamu di bawah ini
inventory.splice(1, 1);
item = inventory[2][0]
jumlahTerjual = inventory[2][1];
console.log(`Total penjualan ${item} ada sebanyak ${jumlahTerjual} item`);