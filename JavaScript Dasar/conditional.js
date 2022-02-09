// JavaScript Conditional

const sudahMakan = 'bentar lagi'

if (sudahMakan === 'sudah') {
    console.log('Perut sudah kenyang')
} else if (sudahMakan === 'bentar lagi') {
    console.log('Nanti habis, makan saja sekarang')
} else {
    console.log('Perut masih keroncongan')
}

// if (true) {
//     console.log('Perut sudah kenyang')
// } else {
//     console.log('Perut masih kosong')
// }
console.log('----------------------------')
    // switch case

const hari = 'minggu'

switch (hari) {
    case 'senin':
        console.log('baju merah putih')
        break;
    case 'selasa':
        console.log('baju putih biru')
        break;
    case 'rabu':
        console.log('baju olahraga')
        break;
    case 'kamis':
        console.log('baju batik')
        break;
    case 'jumat':
        console.log('baju pramuka')
        break;
    default:
        console.log('baju bebas')
}

console.log('------------------')

const browser = "firefox";

switch (browser) {
    case "edge":
        console.log("Browser Anda tidak mendukung aplikasi ini");
        break;
    case "chrome":
    case "firefox":
    case "safari":
        console.log("Browser Anda mendukung aplikasi ini");
        break;
    default:
        console.log("Semoga tampilan aplikasi ini cukup baik");
}