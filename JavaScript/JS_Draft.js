


{
    try {
        throw {name: 'Errrrror'}
    } catch (error) {
        console.log('-----error: ', error);
        throw {name: 'Errrrror in catch'}
    } finally {
        console.log('-----finaly: ');
    }


}


//---------------------------------------------------------------------------------------------

{
    let eventMixin = {
        /**
         * Подписаться на событие, использование:
         * menu.on('select', function(item) { ... }
         */
        on(eventName, handler) {
          if (!this._eventHandlers) this._eventHandlers = {};
          if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = [];
          }
          this._eventHandlers[eventName].push(handler);
        },
      
        /**
         * Отменить подписку, использование:
         * menu.off('select', handler)
         */
        off(eventName, handler) {
          let handlers = this._eventHandlers?.[eventName];
          if (!handlers) return;
          for (let i = 0; i < handlers.length; i++) {
            if (handlers[i] === handler) {
              handlers.splice(i--, 1);
            }
          }
        },
      
        /**
         * Сгенерировать событие с указанным именем и данными
         * this.trigger('select', data1, data2);
         */
        trigger(eventName, ...args) {
          if (!this._eventHandlers?.[eventName]) {
            return; // обработчиков для этого события нет
          }
      
          // вызовем обработчики
          this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
        }
      };
    class Menu {
        choose(value) {
          this.trigger("select", value);
        }
      }
      // Добавим примесь с методами для событий
      Object.assign(Menu.prototype, eventMixin);
      
      let menu = new Menu();
      
      // Добавим обработчик, который будет вызван при событии "select":
      menu.on("select", value => console.log(`Выбранное значение Menu: ${value}`));
      
      // Генерирует событие => обработчик выше запускается и выводит:
      menu.choose("123"); // Выбранное значение: 123

      class Menu1 {
        choose(value) {
          this.trigger("select", value);
        }
      }
      // Добавим примесь с методами для событий
      Object.assign(Menu1.prototype, eventMixin);
      
      let menu1 = new Menu1();
      
      // Добавим обработчик, который будет вызван при событии "select":
      menu1.on("select", value => console.log(`Выбранное значение Menu1: ${value}`));
      
      // Генерирует событие => обработчик выше запускается и выводит:
      menu1.choose("123"); // Выбранное значение: 123
}

// код Коли------------------------------------------------------------------------------------
{
     function a(name) {
        this.name = name; 
     }
     
     a.prototype.parentMethod = function () {};
     
     let b = new a('Sergey');
     console.log(b);
     console.log('-----typeof b: ', typeof b);
}

//---------------------------------------------------------------------------------------------
{
    let obj1 = {
        name1: "Obj1",
        fun1() {
            console.log('-----fun1 starts: ');
        }
    }
    let obj2 = {
        name2: 'Obj2',
        fun2() {
            console.log('-----fun2 starts: ');
        }
    }
    let obj = {
        name: 'Obj',
        fun() {
            console.log('-----fun starts: ');
        }
    }
    console.log('-----obj1: ', obj1);
    console.log('-----obj2: ', obj2);
    console.log('--------------------------------------------------: ');
    console.log('-----obj: ', obj);
    obj.__proto__ = obj1;
    console.log('-----obj: ', obj);
    obj.__proto__ = obj2;
    console.log('-----obj: ', obj);
    // obj.__proto__ = obj;
    // console.log('-----obj: ', obj);
    obj.__proto__ = null;
    console.log('-----obj: ', obj);
    
}

{

    let person = {
        name: "Unknow",
        sayHello: function() {
            console.log('-----: ', `Hello, my name is ${this.name}`);
        }
    }

    let john = Object.create(person);
    john.name = 'John';
    let jain = Object.create(person);
    jain.name = 'Jain';

    john.sayHello();
    jain.sayHello();

    console.log('-----john: ', john);
    console.log('-----john.__proto__: ', john.__proto__);

    jain.__proto__ = null;
    console.log('-----jain: ', jain);
    console.log('-----jain.__proto__: ', jain.__proto__);
}



//---------------------------------------------------------------------------------------------
{
    class CoffeeMachine {
        //power;
      
        constructor(power) {
          this._power = power;
        }
      
        get power() {
          return this._power;
        }
      
      }
      
      // создаём кофеварку
      let coffeeMachine = new CoffeeMachine(100);
      
      console.log(`Мощность: ${coffeeMachine.power}W`); // Мощность: 100W
      
      coffeeMachine.power = 25; // Error (no setter)
      console.log('-----coffeeMachine.power: ', coffeeMachine.power);

      class Human {
        name;
        constructor(name) {
            this.name = name;
        }

        get name() {
            return name + age;
        }
      }

      let hum = new Human('Gorg');
      console.log('-----hum.name: ', hum.name);
}

//---------------------------------------------------------------------------------------------

{
    class Human {
        name = 'some name';
        constructor(name) {
            this.name = name;
        }
        go() {
            console.log('-----1: ', this.name + ' can go');
        }
    }

    class Person extends Human {
        personName = 'Some person name';
        constructor(personName) {
            super();
            this.personName = personName;
        }

        say() {
            console.log('-----: ', this.name + ' can say');
            console.log('-----: ', this.personName + ' can say');
        }
    }

    // let hum = new Human('ttt');
    // hum.go();
    // console.log('-----hum.name: ', hum.name);

    let per = new Person('ttt');
    per.go();
    per.say();
    console.log('-----per.name: ', per.name);
    console.log('-----: ', );

    let per1 = new Person('rrr');
    per1.go();
    per1.say();
    console.log('-----per1.name: ', per1.name);

    per.go();
    per.say();
    console.log('-----per.name: ', per.name);
    console.log('-----: ', );
    console.log('-----typeof per: ', typeof per);
    console.log('-----typeof Person: ', typeof Person);
    console.log('-----per: ', per);
}


//---------------------------------------------------------------------------------------------

{
    let from = 7;
    let to = 12;
    function printNumbers(from, to) {
        let count = from;
        setTimeout(function increase() {
            console.log('-----count: ', count++);
            if (count <= to) {
                setTimeout(increase, 1000);
            }
        }, 1000);
    }
    printNumbers(from, to);
/*
    -----count:  7
    -----count:  8
    -----count:  9
    -----count:  10
    -----count:  11
    -----count:  12
*/
}


{
    const timerId = setInterval(fun, 500, 'Dima');

    function fun(name) {
        console.log('-----: ', `Hello ${name}`);
    }

    setTimeout(clearFun, 2000, timerId);

    function clearFun(timerId) {
        clearInterval(timerId);
    }

    /*
        -----:  Hello Dima
        -----:  Hello Dima
        -----:  Hello Dima
    */
}

{
    let timerId = setTimeout(fun, 2000, "Sergey");

    function fun(name) {
        console.log('-----: ', `Hello ${name}`);
    }

    console.log('-----timerId: ', timerId);
}

//---------------------------------------------------------------------------------------------
{
    function funWithManyParameters(a, b, c, d, e, f) {
        console.log('-----a: ', a);
        console.log('-----b: ', b);
        console.log('-----c: ', c);
        console.log('-----d: ', d);
        console.log('-----e: ', e);
        console.log('-----f: ', f);
    }
    const someArray = ['a', 'b', 'c'];
    funWithManyParameters(1, 2, 3, ...someArray);

    function funWithManyParameters1(a, b, ...rest) {
        console.log('-----a: ', a);
        console.log('-----b: ', b);
        for (let value of rest) {
            console.log('-----value: ', value);
        }
    }
    funWithManyParameters1(1, 2, 3, 'a', 'b', 'c');

    const obj = {
        name: 'Obj',
        Id: 100,
        age: 20,
    };
    let arrayFromOjject = {...obj};
    console.log('-----arrayFromOjject: ', arrayFromOjject);
}



//---------------------------------------------------------------------------------------------
const obj1 = {
    name: 'Obj1'
};
const obj2 = {
    name: 'Obj2',
    Id: 100,
    age: 20,
    valueOf() {
        return this.age;
    }
};
const objSum = obj1 + obj2;
console.log('-----objSum: ', objSum);
console.log('-----JSON.stringify(objSum): ', JSON.stringify(objSum));
console.log('-----obj1.valueOf(): ', obj1.valueOf());
console.log('-----obj1: ', obj1);
console.log('----- +obj1: ', +obj1);
console.log('----- +obj2: ', +obj2);
console.log('-----obj1.toString(): ', obj1.toString());
console.log('-----typeof obj1.valueOf(): ', typeof obj1.valueOf());


//---------------------------------------------------------------------------------------------
const idSymbol = Symbol("Id");
const idSymbol1 = Symbol("Id");
const obj = {
    name: 'FFF',
    [idSymbol]: 123,
    [idSymbol1]: 'ad',
}
console.log('-----obj: ', obj); // { name: 'FFF', [Symbol(Id)]: 123, [Symbol(Id)]: 'ad' }

//---------------------------------------------------------------------------------------------
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
"use strict"
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
    showThis: showThis
};

function showThis(callback1) {
    console.log('-----1111111: ', this);
    callback1();
    return this;
}

console.log('-----000this: ', this);
console.log('-----ladder.showThis(): ', ladder.showThis(function callback1() {console.log('-----222this: ', this);}));
console.log('-----555ladder.showThis(): ', ladder.showThis(() => {console.log('-----555this: ', this);}));

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0



