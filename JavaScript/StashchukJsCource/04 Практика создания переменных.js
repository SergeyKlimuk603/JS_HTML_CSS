let myName;
let result;

result = console.log(myName);
console.log('result:', result);

myName = 'Sergey'

result = console.log(myName);
console.log('result:', result);

const MY_NAME = 'Nicolay';
result = console.log(MY_NAME);
console.log('result:', result);

// создание объекта
const objectA = {
    a : 10,
    b : true,
    c : {
        a : 50,
        b : false
    }
}
result = console.log(objectA);
console.log('result:', result);

console.log('objectA.a = 15:', objectA.a = 15);
result = console.log(objectA);
console.log('result:', result);
