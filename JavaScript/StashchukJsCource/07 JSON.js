// const stringPerson = '{"name": "Sergey","age": 4, "isMan": true}';

// const person = JSON.parse(stringPerson);
// console.log('person: ', person);

// const newStringPerson = JSON.stringify(person);
// console.log('newStringPerson: ', newStringPerson); 

const person = {
    name: 'Sergey',
    age: 44
}

//const newPerson = Object.assign({}, person);
//const newPerson = {...person};
const newPerson = JSON.perse(JSON.stringify(person));

newPerson.age = 50;

console.log(person.age); // 44
console.log(newPerson.age); // 50