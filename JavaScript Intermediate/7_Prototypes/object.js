// Berikut adalah contoh sebuah kasus menambahkan method/function prototyping
// dalam sebuah objek Person:
function Person(name, age, hobby, job) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.job = job;
}

// Menambahkan properti secara langsung menggunakan prototyping
Person.prototype.nationality = "Indonesia";

// Menambahkan method menggunakan prototyping
Person.prototype.greeting = function() {
    return "Hello " + this.name;
};

// Membuat instance ke dua
let myFather = new Person("William", 30, "Play games", "Entrepreneur");
let myMother = new Person("Jessica", 30, "Reading book", "Accountant");

// Melihat hasil data
console.log(myFather.name); // Output: 'William'
console.log(myFather.nationality); // Output: 'Indonesia'
console.log(myFather.greeting()); // Output: 'Hello William'


// Latihan
function Student(name, grade, score) {
    this.name = name;
    this.grade = grade;
    this.score = score;
}

Student.prototype.school = "Skilvul";
Student.prototype.greeting = function() {
    return "Hello " + this.name;
};
Student.prototype.study = function() {
    return "I study at " + this.school;
}

// Buat kode kamu dibawah ini
let myStudent = new Student("Sarah", 20, 100);

console.log(myStudent.name);
console.log(myStudent.school);
console.log(myStudent.greeting());
console.log(myStudent.study());