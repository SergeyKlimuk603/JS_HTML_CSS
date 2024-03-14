console.log('Script started');
const runTimerIds = [];

const divs = document.querySelectorAll('.divBlock');
console.log('-----divs: ', divs);
divs.forEach((elem) => {
    this.addListener(elem)
})


function addListener(elem) {
    elem.addEventListener('myEvent', (event) => {
        console.log('-----booble elemId: ', elem.id);
        const innerElems = elem.querySelectorAll('#' + elem.id + ' > p')
        //console.log('-----innerElems: ', innerElems);
    });
    elem.addEventListener('myEvent', (event) => {
        console.log('-----capture elemId: ', elem.id);
    }, {capture: true});
    elem.addEventListener('animationend', (event) => {
        console.log('-----animationend elemId: ', elem.id);
        rrr.classList.remove('raise');
    });
}

bbb.onclick = function() {
    const myEvent = new Event('myEvent', {bubbles: true});
    this.dispatchEvent(myEvent);
    console.log('-----rrr.style.width: ', rrr.style.width);
    // rrr.classList.remove('raise');
    rrr.classList.add('raise');
    // rrr.style.width = rrr.style.width === '100%' ? '0%' : '100%'
    // rrr.style.width = '0%';
    
}

function clearAllTimers(timerIds) {
    timerIds.array.forEach(timerId => {
        clearTimeout(timerId);
    });

    return [];
}