
console.log('-----typeof 5: ', typeof 5); // number
console.log('-----typeof "text" + "_1": ', typeof "text" + "_1"); // string_1
console.log('-----typeof ("text" + "_1"): ', typeof ("text" + "_1")); // string
console.log('-----typeof(true): ', typeof(true)); // boolean
function someFunction() {}; // 
console.log('-----typeof someFunction: ', typeof someFunction); // function

console.log('-----Number("rt"): ', Number("rt")); // NaN
console.log('-----1/-0: ', 1/-0); // -Infinity
console.log('-----typeof(+"5"): ', typeof(+"5")); // number
console.log('-----Boolean("0"): ', Boolean("0")); // true
console.log('-----Boolean(0): ', Boolean(0)); // false

console.log('-----Number(null): ', Number(null)); // 0
console.log('-----Number("null"): ', Number("null")); // NaN
console.log('-----Number(undefined): ', Number(undefined)); // NaN

// https://learn.javascript.ru/logical-operators
let value = NaN;
value &&= 10; // value ложно, поэтому присваивание не срабатывает
value ||= 20; // value ложно, поэтому присваивание срабатывает
value &&= 30; // value истинно, поэтому присваивание срабатывает
value ||= 40; // value истинно, поэтому присваивание не срабатывает
console.log('-----value: ', value); // 30

//---------------------------------------------------------------------------------------------
const age = 50;
if (age >= 14 && age <= 90) {
    console.log('-----middleman: ', true);
}

if (age < 14 || age > 90) {
    console.log('-----middleman: ', false);
}

// For brouser only
let user = prompt('Who are you', '');
if (user == 'Admin') {
    let password = prompt('Enter your password', '');
    if (password == '' || password == null) {
        alert("Cancelled!");
    } else if ( password == 'I am the boss') {
        alert(`Hello, ${user}!`);
    } else {
        alert('wrong password');
    }
} else if (user == '' || user == null) {
    alert("Cancelled!");
} else {
    alert("I don't know who are you");
}

let var1 = null;
var1 ??= 3; // var1 = 3
console.log('-----var1: ', var1);
var1 = undefined;
var1 ??= 3; // var1 = 3
console.log('-----var1: ', var1);
var1 = 5
var1 ??= 3; // var1 = 5
console.log('-----var1: ', var1);

//---------------------------------------------------------------------------------------------
label: {
    console.log('-----1: ', 1);
    label1: {
        console.log('-----2: ', 2);
        break label;
    }
    console.log('-----3: ', 3);
}
console.log('-----4: ', 4);

for (let i = 0; i < 50; i++) {
    if (i > 10) {
        break;
    }
    if (i < 2 || i%2 != 0) {
        continue;
    }

    console.log('-----i: ', i);
}

let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

let i;
while (i < 100) {
    i = prompt('Enter a number:', '');
    console.log('-----i: ', i);
    if (i == null) {
        break;
    }
}

//---------------------------------------------------------------------------------------------
let n = 30;
for (let i = 1; i <= n; i++) {
    let isSimple = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isSimple = false;
            break;
        }
    }

    if (isSimple) {
        console.log('-----i: ', i);
    }
}

// better
let n = 10;
nextPrime: for (let i = 2; i <= n; i++) { // Для всех i...
  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) {
        continue nextPrime; // не подходит, берём следующее
    }
  }
  console.log('-----i: ', i); // простое число
}
//---------------------------------------------------------------------------------------------
function f1(a) {
    console.log('-----1: ', 1);
    console.log('-----a: ', a);
}

function f1(a, b, c) {
    console.log('-----2: ', 2);
    console.log('-----a: ', a);
    console.log('-----b: ', b);
    console.log('-----c: ', c);
}



console.log('-----f1(5): ', f1(5));
console.log('-----f1(5, 6): ', f1(5, 6));
console.log('-----f1(5, 6, 7): ', f1(5, null, ''));

//---------------------------------------------------------------------------------------------
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }

  function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }
  function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }

  //---------------------------------------------------------------------------------------------
  function f3(a, b) {
    return a > b ? b : a;
  }

  function sayHi() {
    alert( "Привет" );
  }
  
  console.log('-----sayHi: ' + sayHi); // выведет код функции

  function sayHi() {
    console.log( "Привет" );
  }

  sayHi += '\nconsole.log(1);'
  
  console.log('-----' + sayHi); // выведет код функции

  sayHi();


  function (a, b) {
    return a > b ? b : a;
  }

  //---------------------------------------------------------------------------------------------
  ask(
    "Are you agree?",
    () => alert("You are agree"),
    () => alert("You are canceled performance.")
  )

//---------------------------------------------------------------------------------------------
const user5 = new Object();
user5.name = 'John';
user5['surname'] = 'Smith'; // { name: 'John', surname: 'Smith' }
user5.name = 'Pete'; // { name: 'Pete', surname: 'Smith' }
delete user5.name; // { surname: 'Smith' }

//---------------------------------------------------------------------------------------------
function isEmpty(obj) {
    for (const key in object) {
        return false;
    }
    return true;
}
//---------------------------------------------------------------------------------------------
let a = {};
let b = {}; // два независимых объекта

console.log( a == b ); // false
console.log( a === b ); // false

//---------------------------------------------------------------------------------------------
const user = {
    age: 23,
    name: "Sergey",
    address: {
        city: "Grodno",
        country: 'Belarus'
    }
}

const clone = {...user};
clone.name = "Vadim";
clone.address.country = "Europe";
console.log('-----user: ', user);
console.log('-----clone: ', clone);
console.log('-----...user: ', {...user}); // 

//---------------------------------------------------------------------------------------------
// Области видимости замыкание
let a = 0;
function fOuter() {
    let a = 0;

    return function() {
        a++;
        return a;
    }
}

let f = fOuter();
console.log('-----f(): ', f()); // 1
console.log('-----f(): ', f()); // 2
console.log('-----f(): ', f()); // 3
console.log('-----f(): ', f()); // 4
console.log('-----a: ', a); // 0
//---------------------------------------------------------------------------------------------
let calculator = {
    a: 0, // объявлять не обязательно
    b: 0, // объявлять не обязательно
    read: function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//---------------------------------------------------------------------------------------------
// https://learn.javascript.ru/object-methods
let ladder = {
    step: 0,
    up() {
        this.step++;
        console.log('-----this: ', this);
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        console.log( this.step );
        return this;
    },
    showThis: 
};

function showThis() {
    return this;
}

console.log('-----showThis(): ', showThis());

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0



