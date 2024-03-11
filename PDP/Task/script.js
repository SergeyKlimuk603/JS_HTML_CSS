console.log('Script started');

// const divs = document.querySelectorAll('div');
// console.log('-----divs: ', divs);
// divs.forEach((elem) => {
//     this.addListener(elem)
// })


// function addListener(elem) {
//     elem.addEventListener('click', (event) => {
//         // console.log('-----booble elemId: ', elem.id);
//         // const innerElems = elem.querySelectorAll('#' + elem.id + ' > p')
//         // console.log('-----innerElems: ', innerElems);
//     });
//     elem.addEventListener('click', (event) => {
//         // console.log('-----capture elemId: ', elem.id);
//     }, {capture: true});
// }

bbb.onclick = function() {
    console.log('-----rrr.style.width: ', rrr.style.width);
    rrr.style.width = rrr.style.width === '100%' ? '0%' : '100%'
}