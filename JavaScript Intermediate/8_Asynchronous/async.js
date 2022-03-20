// async menggunakan keyword function
async function tesAsyncAwait() {
    return "Fulfilled";
}

console.log(tesAsyncAwait());
// async menggunakan arrow function
const tesAsyncAwait = async () => {
    return "Fulfilled";
};

console.log(tesAsyncAwait());

// Buat kode kamu di bawah ini
function helloWorld(){
    return new Promise((resolve)=>{
        setTimeout(function(){
            resolve("Hello World!")
        },2000)
    })
}

async function messages(){
    let msg = await helloWorld()
    console.log(msg)
}

messages()