const fs = require('fs')
const genders = ['M', 'F'];
const maleNames = ['John', 'Peter', 'Simon', 'Michael', 'Thomas', 'Jack'];
const femaleNames = ['Julie', 'Kate', 'Jane', 'Monica', 'Sarah', 'Lucy'];
const lastNames = ['Smith', 'Parker', 'Doe', 'Brown', 'Jones', 'Davis'];

const randChoice = (arr) => {
    const random = arr[Math.floor(Math.random() * arr.length)];
    return (random);
};

let people = [];

for (let i = 0; i < 20; i++) {
    const newGender = randChoice(genders);
    let newFirstName = '';
    if (newGender === 'M') {
        newFirstName = randChoice(maleNames);
    } else {
        newFirstName = randChoice(femaleNames);
    }
    const newLastName = randChoice(lastNames);
    const newAge = Math.floor(Math.random() * (78 - 18 + 1)) + 18;
    const newEmail = (newFirstName + '.' + newLastName + '@gmail.com').toLowerCase();
    const person = {
        gender: newGender,
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
        email: newEmail,
    };
    people.push(person);
}

people = JSON.stringify(people);
fs.writeFile('people.json', people, (err) => {
    if (err) throw err;
    else {
        console.log("File has been successfully generated! Check people.json");
    }
});