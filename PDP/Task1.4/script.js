const DIV_AMOUNT = 4;
const INDICATOR_TIMEOUT = 0.2;

let timerIds = [];

syncConstWithCss();
createBodyContent();
addListeners();

function syncConstWithCss() {
    // source: https://webformyself.com/prekratite-dublirovat-konstanty-v-js-i-css/
    const style = document.createElement('style');
    style.textContent = `
        :root {
            --indicator-timeout: ${INDICATOR_TIMEOUT}s;
        }
    `;
    document.head.append(style);
}

function createBodyContent() {
    const divExample = body.querySelector('#divExample');

    for (let i = 0; i < DIV_AMOUNT; i++) {
        const divExampleClone = divExample.content.cloneNode(true);
        const divContainer = divExampleClone.querySelector('.divContainer');
        const divInnerContainer = nestedDivContainer.querySelectorAll('.divInnerConteiner')[i];
        divInnerContainer.append(divContainer);
    }
}

function addListeners() {
    addContainerListeners();
    addButtonListeners();
}

function addContainerListeners() {
    const divContainers = body.querySelectorAll('.divContainer');
    divContainers.forEach(element => {
        addCaptureListeners(element);
        addBubbleListeners(element);
    });
}

function addCaptureListeners(element) {
    element.addEventListener(
        'myevent', 
        (event) => {          
            if (element.querySelector('.captureCheckbox').checked) {
                runAnimation(element.querySelector('.captureIndicator'), event);
            }

            if (element.querySelector('.targetCheckbox').checked 
                && (event.target === element.querySelector('.throwEventButton'))
            ) {
                runAnimation(element.querySelector('.targetCaptureIndicator'), event);
            }
        },
        {capture: true}
    );
}

function addBubbleListeners(element) {
    element.addEventListener(
        'myevent', 
        (event) => {            
            if (element.querySelector('.targetCheckbox').checked 
                && (event.target === element.querySelector('.throwEventButton'))
            ) {
                runAnimation(element.querySelector('.targetBubbleIndicator'), event);
            }

            if (element.querySelector('.bubbleCheckbox').checked) {
                runAnimation(element.querySelector('.bubbleIndicator'), event);
            }  
        }
    );
}

function addButtonListeners() {
    const buttons = body.querySelectorAll('.throwEventButton');
    buttons.forEach(button => {
        button.onclick = (event) => {
            clearScreen();
            button.dispatchEvent(new CustomEvent('myevent', {bubbles: true, detail: {phase: 0}}));
        };
    });
}

function runAnimation(elem, event) {
    timerIds.push(setTimeout(() => elem.classList.add('animation'), event.detail.phase));
    event.detail.phase += INDICATOR_TIMEOUT * 1000;
}

function clearScreen() {
    const indicators = body.querySelectorAll('.indicator');
    indicators.forEach(indicator => indicator.classList.remove('animation'));

    timerIds.forEach(timerId => clearTimeout(timerId));
    timerIds = [];
}


