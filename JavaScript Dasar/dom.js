// JavaScript DOM

// console.log(document.getElementsByTagName('h1')[0].innerText)



// function mendapatkanTextDiH1DanTampilkanDiParagraf() {
//     const textH1 = document.getElementsByTagName('h1')[0].innerText

//     document.getElementsByTagName('p')[0].innerText = textH1
// }
// document.getElementById('demo').style.color = 'blue';
document.getElementById('demo').setAttribute("style", "color: blue;");
let apkJamur = document.getElementById('apkJamur')

apkJamur.src = 'pamfletTertanam.png'

function dapatkanValueDanTampilkanDiParagraf() {
    const valueInput = document.getElementsByTagName('input')[0].value

    document.getElementsByTagName('p')[0].innerText = valueInput
}

let demo = document.getElementById("demo");
demo.onclick = showMessage;

function showMessage() {
    alert("Hello, World!");
}