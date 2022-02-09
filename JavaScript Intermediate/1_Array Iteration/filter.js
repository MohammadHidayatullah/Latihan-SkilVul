let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Buat kode kamu di bawah ini
let genap = angka.filter(item => {
    return item % 2 === 0
});

console.log(genap);

console.log("---------------------------")

const fruits = ['Jambu', 'Jeruk', 'Apel', 'Mangga', 'Strawberry', 'Jeruk', 'Apel'];

const apples = fruits.filter(item => {
    return item === 'Apel'; // hanya menampilkan elemen array fruits yang bernama 'Apel'
});

console.log(apples);
// Output: ['Apel', 'Apel']