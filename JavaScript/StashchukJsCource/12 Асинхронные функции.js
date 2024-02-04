function getTimestamp() {
    return new Date().getTime()
}

function delay(delayTime) {
    let currentTime = getTimestamp();
    while (getTimestamp() - currentTime < delayTime) {

    }
    console.log('-----delay complete')
}

// async function asyncDelay(delayTime) {
//     return new Promise((resolve, reject) => {
//         delay(delayTime)
//         resolve('delay was completed')
//     })
// }


let asyncDelay = new Promise((resolve, reject) => {
    //delay(2000)
    //resolve('delay was completed')
    setTimeout(() => resolve('4444'), 5000)
})

console.log('-----asyncDelay: ', asyncDelay)

asyncDelay.then(value => console.log('-----222222'))

const whatIsIt = asyncDelay(2000)
console.log('-----whatIsIt: ', whatIsIt)
console.log('-----code complete')










console.log('-----timestamp: ', getTimestamp())


console.log('-----: ', performance.now())
async function()






//--------------------------------------------------------------------------------
console.log('-----+undefined: ', +'1'); 

let promice_1 = new Promise(function(resolve, reject) {
    let error = new Error('Some error was happen in promice_1')
    //throw error
    reject(error)
    resolve('promice_1 resolved');
});

promice_1
    .then(
        function (value) { console.log('-----value in then: ', value) }
        //, function (error) { console.log('-----error in then: ', error) }
    )
    .catch(
        function (error) {
            console.log('-----error in catch: ', error); 
            return error
        }
    )
    .then(
        (value) => {
            console.log('-----value in then after catch: ', value)
            //throw new Error('second error')
        }
    )
    .catch(
        function (error) {
            console.log('-----error in catch 2: ', error); 
            return error
        }
    )

    setTimeout(() => {
        promice_1
        .then(
            function (value) { console.log('-----value in then after 5 sec: ', value) }
            , function (error) { console.log('-----error in then after 5 sec: ', error) }
        )
    }, 5000)


//---------------------------------------------------------------------------------------------




let result = 1;
let promise1 = new Promise((resolve, reject) => {
    if(result) {
        return setTimeout(() => resolve('111'), 3000);
    }

    //reject('Promise was NOT resolved');
});

let resultPromise = promise1
    .then((value) => {
        alert('Promise 1')
    })
    .then((value) => {
        alert('Promise 2')
        console.log('-----value: ', value);
        return value + '2'
    })
    .then((value) => {
        alert('Promise 3')
        console.log('-----value: ', value);
        return value + '3'
    })
    .then((value) => {
        alert('Promise 4')
        console.log('-----value: ', value);
        return value + '4'
    })

    console.log('-----resultPromise1: ', resultPromise);



    setTimeout(() => console.log('-----resultPromise2: ', resultPromise), 6000);





    let pp1 = Promise.resolve(3);
    let pp2 = 1337;
    let pp3 = new Promise((resolve, reject) => {
            setTimeout(resolve, 100, "foo");
    });

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values);
});





// source: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
  });
  let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "two");
  });
  let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "three");
  });
  let p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "four");
  });
  let p5 = new Promise((resolve, reject) => {
    // Этот промис прервёт Promise.all
    //reject("reject");
    resolve("resolved1");
  });
  
  Promise.all([p1, p2, p3, p4, p5]).then(
    (value) => {
      console.log(value);
    },
    (reason) => {
      console.log(reason);
    },
  );



  let ppp1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
  });
    
    ppp1
    .then((value) => console.log('-----value: ', value))
    
    ppp1
    .then((value) => console.log('-----value: ', value))
    
    ppp1
    .then((value) => console.log('-----value: ', value))




    $.on('button', 'click', function onClick() {
        // setTimeout(function timer() {
        //     console.log('You clicked the button!');    
        // }, 2000);
        
        console.log('-----');
        runPromise();
    });
    
    function runPromise() {
        let prom = new Promise.resolve(1);
        prom.then(() => console.log("Hi!"));
    }
    
    // console.log("Hi!");
    
    // setTimeout(function timeout() {
    //     console.log("Click the button!");
    // }, 5000);
    
    // console.log("Welcome to loupe.");

    let fetch1 = fetch('https://4b4b5074-4235-4ef0-92fc-679a6ddfc416.mock.pstmn.io/testGetMethod');
    console.log('-----1');
    fetch1.then(() => console.log('-----2'));


    //------------------------------------------------------------------------------

console.log('-----start')

async function f() {
    return Promise.resolve(1);
}

console.log('-----1')

f().then(() => console.log('-----2'));

console.log('-----end')
    /*
-----start
-----1
-----end
-----2
    */

console.log('-----start')

async function f() {
    return 1;
}

console.log('-----1')

f().then(() => console.log('-----2'));

console.log('-----end')
/*
-----start
-----1
-----end
-----2
*/

//------------------------------------------------------------------------------------------

let promise2 = Promise.resolve('value1');

promise2
    .then((value) => {
        setTimeout(() => console.log('-----value20'), 4000)
        console.log('-----value2')
    })
    .then((value) => {
        setTimeout(() => console.log('-----value30'), 3000)
        console.log('-----value3')
    })
    .then((value) => {
        setTimeout(() => console.log('-----value40'), 2000)
        console.log('-----value4')
    })

console.log('-----value5')
/*
-----value5
-----value2
-----value3
-----value4
-----value40
-----value30
-----value20
*/

//------------------------------------------------------------------------------------------

