// https://www.youtube.com/watch?v=CxgOKJh4zWE&t=11805s

let a = 'a from Global'

function fun1() {
    let a = 'a from Fun1';
    console.log('-----value a from fun1: ', a);
    function fun1_1() {
        let a = 'a from Fun1_1';
        console.log('-----value a from fun1_1: ', a);
    }
    fun1_1();
}

fun1();

//--------------------------------------------------------------
// a3 в данном случае будет объявлена как глобальная переменная. Так делать нельзя.
function f3() {
    a3 = 5;
    console.log('-----a3: ', a3);
}

f3();
console.log('-----a3: ', a3);

//---------------------------------------------------------------------------------------------

let a1 = 1;

function testMutation(a1) {
    a1 = 2;
}

testMutation(a1);

console.log('-----a1: ', a1); //-----a1:  1

let a2 = {key1 : 1};

function testMutation(a2) {
    a2.key1 = 2;
}

testMutation(a2);

console.log('-----a2: ', a2); //-----a1:  1

//--------------------------------------------------------------

myFunc(a, d) {
    return a + d;
}

myFunc(1, 4);



