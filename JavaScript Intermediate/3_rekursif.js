function faktorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * faktorial(n - 1);
    }
}

console.log(faktorial(4));

console.log("------------------------");

// Buat kode kamu di bawah ini
function balikKata(str) {
    if (str == ("")) {
        return str;
    } else {
        return balikKata(str.substr(1)) + str[0];
    }
}
console.log(balikKata("Skilvul"));