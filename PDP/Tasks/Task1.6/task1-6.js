const DIV_AMOUNT = 4;
const INDICATOR_TIMEOUT = 200;

let timerIds = [];

syncConstWithCss();
createBodyContent();
addListeners();

function syncConstWithCss() {
    // source: https://webformyself.com/prekratite-dublirovat-konstanty-v-js-i-css/
    const style = document.createElement('style');
    style.textContent = `
        :root {
            --indicator-timeout: ${INDICATOR_TIMEOUT}ms;
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

        if (i == DIV_AMOUNT - 1) {
            divInnerContainer.append(canvasDiv);
        } 
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
            playAudio();
            clearScreen();
            button.dispatchEvent(new CustomEvent('myevent', {bubbles: true, detail: {indicatorTimeout: 0}}));
        };
    });
}

function runAnimation(elem, event) {
    timerIds.push(setTimeout(() => elem.classList.add('animation'), event.detail.indicatorTimeout));
    event.detail.indicatorTimeout += INDICATOR_TIMEOUT;
}

function clearScreen() {
    const indicators = body.querySelectorAll('.indicator');
    indicators.forEach(indicator => indicator.classList.remove('animation'));

    timerIds.forEach(timerId => clearTimeout(timerId));
    timerIds = [];
}

function playAudio() {
    const audioPlayer = body.querySelector('#audioPlayer');
    audioPlayer.currentTime = 0.0;
    audioPlayer.play();
}


//----------------------------------------------------------------------------------------
// Canvas code
const context = canvas.getContext("2d");
 
const mouse = {x: 0, y: 0}; // координаты мыши
let draw = false;
              
// нажатие мыши
canvas.addEventListener(
    "mousedown", 
    function(event) {
        mouse.x = event.pageX - this.offsetLeft;
        mouse.y = event.pageY - this.offsetTop;
        draw = true;
        context.beginPath();
        context.moveTo(mouse.x, mouse.y);
    }
);

// перемещение мыши
canvas.addEventListener(
    "mousemove", 
    function(event) {
        if (draw == true) {
            mouse.x = event.pageX - this.offsetLeft;
            mouse.y = event.pageY - this.offsetTop;
            context.lineTo(mouse.x, mouse.y);
            context.stroke();
        }
    }
);
 
// отпускаем мышь
canvas.addEventListener(
    "mouseup", 
    function(event) {   
        mouse.x = event.pageX - this.offsetLeft;
        mouse.y = event.pageY - this.offsetTop;
        context.lineTo(mouse.x, mouse.y);
        context.stroke();
        context.closePath();
        draw = false;
    }
);


