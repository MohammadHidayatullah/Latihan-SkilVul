// Buat kode kamu di bawah ini
function mandi() {
    console.log("Mandi");
}

function sarapan(callback) {
    setTimeout(function() {
        console.log("Sarapan tertunda 3 detik");
        callback();
    }, 3000);
}

function berangkatSekolah() {
    console.log("Berangkat Sekolah");
}

mandi();
sarapan(berangkatSekolah);
// Output
// "Mandi"
// "Sarapan tertunda 3 detik"
// "Berangkat Sekolah"

console.log("---------------------------------")

//callback

function greeting(name) {
    console.log(`Halo ${name}, selamat datang di Skilvul!`);
}

function introduction(firstName, lastName, callback) {
    const fullName = `${firstName} ${lastName}`;

    callback(fullName);
}

introduction("Miftah", "Faris", greeting); // Halo Miftah Faris, selamat datang di Skilvul !