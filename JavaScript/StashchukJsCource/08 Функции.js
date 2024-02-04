// let a = 5;
// let b = 3;

// function sum(a, b) {
//     console.log(a + b);
// }

// sum(a, b); // 8

//-------------------------------------

function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}

console.dir(myFn)

myFn(10, 3) // 14

objectCopy = JSON.parse(JSON.stringify(object));


function printMyName() {
    console.log('Sergey');
}

function startCode() {
    console.log('code started');
    setTimeout(printMyName, 5000);
}

startCode();

//-------------------------------------------------------------------------------
// Объявление функций

// Стандартное объявление функции
function myFn1(a, b) {
    // code
}

//-----------------------------------------

// Анонимная функция. В таком виде ее объявлять бессмысленно, однако
// ее можно передавать в качестве callback функции или присваивать
// какой-нибудь переменной. Желательно такую функцию присваивать
// переменной типа const, а не let

// Такую функцию непосредственно объявить нельзя, но можно использовать.
function () {

}
// например
const ddd = function (d) {
    console.log(d);
}

const eee = function (someFunction) {
    someFunction('some text');
}

eee(ddd); // some text

eee(function (f) {console.log(f)}); // some text

//-----------------------------------------

// Стрелочная функция
() => {
    // code
}

const myFn2 = () => {
    // code
}

const ggg = (g1) => {
    someFunction('some text');
}

ggg(ggg); // some text

eee(function (f) {console.log(f)}); // some text

