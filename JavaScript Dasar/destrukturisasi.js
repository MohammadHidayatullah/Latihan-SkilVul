// JavaScript Destrukturisasi
console.log('------------------------------')

const hobbies = ['Menyelam', 'Mendaki', 'Berenang']

let [firstHobby, secondHobby, thirdHobby] = hobbies

console.log(firstHobby)
console.log(secondHobby)

console.log('------------------------------')

const firstName = "Dayat"

const [a, b, c, d, e] = firstName

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log('------------------------------')

const person = {
    name: 'Dayat',
    address: 'Bettet',
    age: 21,
    hobbiess: ['Menyelam', 'Mendaki', 'Berenang']
}

let { name, address, age, hobbiess: [firstHobbyy] } = person

console.log(name)
console.log(age)
console.log(firstHobbyy)