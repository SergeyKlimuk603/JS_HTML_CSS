const person1 = {
    name: 'Sergey',
    age: 42,
    funk3 : () => {console.log('funk3 runs')}
};

const funk1 = () => {
    console.log('funk1 runs');
}

funk1();

const funk2 = funk1;
funk2();

console.log('person1: ', person1);

const incognito = person1;
console.log('incognito: ', incognito);

incognito.company = {
    name: 'Senla'
};
console.log('person1: ', person1);

incognito.funk1 = funk1;

delete incognito.age;
console.log('person1: ', person1);

let companyInfo = incognito['company']['name'];
console.log('companyInfo: ', companyInfo);
incognito.funk3();
incognito['funk3']();

const person = {
    name: 'Sergey',
    company: {
        name: 'Senla',
        region: 'Grodno'
    },
    doWork: () => {
        console.log('person does')
    },
    doWork1: action => {
        console.log('1 person does ' + action)
    },
    doWork2: function () {
        console.log('2 person does')
    },
    doWork3() {
        console.log('3 person does')
    }
}

globalThis.console.log(JSON.stringify(person));

person.doWork();
person.doWork1('jumping');
person.doWork2();
person.doWork3();

// // Полная форма записи при создании объекта
// const name = 'Sergey'
// const postQty = 23

// const userProfile = {
//     name: name,
//     postQty: postQty,
//     hasSignedAgreement: false
// }

// // Сокращенная форма записи при создании объекта
// const name = 'Sergey'
// const postQty = 23

// const userProfile = {
//     name,
//     postQty,
//     hasSignedAgreement: false
// }



