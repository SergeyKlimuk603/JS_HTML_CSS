let a = {
    k1: 5,
    k2: 'some text',
    k3: true
}

console.log('-----a.k2: ', a.k2);
console.log('-----a["k1"]: ', a["k1"]);
console.log('-----a["k0"]: ', a["k0"]);
console.log('-----a["k0"]: ', a.get("k0"));

function a() {
    return 5
}
 
a = 2;

console.log('-----a(): ', a);

const a = () => {
    console.log('-----some text: ');
}

function b(aa) {
    aa()
}

b(a)

let a = 5
let b = new Number(5)
console.log('-----a == b: ', a == b);
console.log('-----a === b: ', a === b);

let a = {
    aa: 1,
    bb:'n'
}

let b = {
    bb: 'n',
    aa: 1
}

a.cc
b['cc']

console.log('-----a: ', a);
console.log('-----b: ', b);
console.log('-----: ', a == b);
console.log('-----: ', a === b);
console.log('-----JSON.stringify(a)===JSON.stringify(b): ', JSON.stringify(a)===JSON.stringify(b));
console.log('-----JSON.stringify(a): ', JSON.stringify(a));

let a = {
    aa: 1,
    bb:'n'
}

console.log('-----a: ', ...a);

const person = {
    name: 'Sergey',
    age: 44
}

const newPerson = {...person};

newPerson.age = 50;

console.log(person.age); // 44
console.log(newPerson.age); // 50

let id = Symbol("id");
console.log(id.toString()); // Symbol(id), теперь работает

