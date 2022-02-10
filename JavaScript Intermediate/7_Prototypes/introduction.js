function Skilvul(courseName, duration) {
    this.courseName = courseName;
    this.duration = duration;
}

Skilvul.price = 200000;

let jsIntermediate = new Skilvul("JS Intermediate", 3600);

// Melihat hasil data
console.log(jsIntermediate.courseName);
console.log(jsIntermediate.price);