// menggunakan method repeat()
// Kita membuat properti tambahan untuk String
// Method untuk mengulang string selama yang kita butuhkan
String.prototype.repeatString = function(n) {
    return this.repeat(n);
};
console.log("Skilvul".repeatString(3));

// Latihan menggunkan concat()
// Buat kode kamu di bawah ini
String.prototype.tambahKata = function(str) {
    return this.concat(str);
};

console.log('Belajar '.tambahKata("coding"));