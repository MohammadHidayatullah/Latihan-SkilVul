let nilai = [100, 80, 80, 70, 90];

// Buat kode kamu di bawah ini

let jumlahNilai = nilai.reduce((total, item) => {
    return total + item;
});

let rataRata = (jumlahNilai / nilai.length);

console.log(rataRata);

console.log("--------------------------------");

let fruits = ['Jambu', 'Apel', 'Mangga', 'Jambu', 'Jeruk', 'Apel']

let fruitList = fruits.reduce((list, fruit) => {
    if (list[fruit]) { // memeriksa apakah buah tersebut sudah ada dalam objek atau belum
        list[fruit] = list[fruit] + 1; // jika ada, nilainya + 1
    } else {
        list[fruit] = 1; // jika belum ada, beri nilai 1
    }
    return list; // mengembalikan objek
}, {}); // initial valuenya adalah objek

console.log(fruitList);

// Output:
// {
//   Jambu:2,
//   Apel:2,
//   Mangga:1,
//   Jeruk:1
// }