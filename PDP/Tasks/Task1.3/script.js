const DIV_AMOUNT = 3;
const INDICATOR_TIMEOUT = 0.2;

let timerIds = [];
const divContainer = `<div class="divContainer">
                        <div class="divTitle">
                            Div.
                        </div>
                        <div class="twoColumnDiv">
                            <input type="checkbox" class="captureCheckbox" checked>
                                Process Capturing phase
                            <input type="checkbox" class="targetCheckbox" checked>
                                Process Target phase
                            <br>
                            <input type="checkbox" class="bubbleCheckbox" checked>
                                Process Bubling phase
                            <br>
                            <button class="throwEventButton">Throw on event</button>          
                        </div>
                        <div class="twoColumnDiv">
                            <div class="fourColumnDiv">
                                capture
                                <div class="captureIndicator indicator"></div>
                            </div>
                            <div class="fourColumnDiv">
                                targetCapture
                                <div class="targetCaptureIndicator indicator"></div>
                            </div>
                            <div class="fourColumnDiv">
                                targetBubbles
                                <div class="targetBubbleIndicator indicator"></div>
                            </div>
                            <div class="fourColumnDiv">
                                bubles
                                <div class="bubbleIndicator indicator"></div>
                            </div>
                        </div>
                        <div class="divInnerConteiner">{!innerContent}</div>`;

// source: https://webformyself.com/prekratite-dublirovat-konstanty-v-js-i-css/
const style = document.createElement('style');
style.textContent = `
    :root {
        --indicator-timeout: ${INDICATOR_TIMEOUT}s;
    }
`;
document.head.append(style);


let bodyContent = '{!innerContent}';
for (let i = 0; i < DIV_AMOUNT; i++) {
    bodyContent = bodyContent.replace('{!innerContent}', divContainer);
}
bodyContent = bodyContent.replace('{!innerContent}', '');
body.innerHTML = bodyContent;

const divContainers = body.querySelectorAll('.divContainer');
divContainers.forEach(element => {
    element.addEventListener(
        'myevent', 
        (event) => {          
            if (element.querySelector('.captureCheckbox').checked) {
                runAnimation(element.querySelector('.captureIndicator'), event);
            }

            if (element.querySelector('.targetCheckbox').checked && (event.target === element.querySelector('.throwEventButton'))) {
                runAnimation(element.querySelector('.targetCaptureIndicator'), event);
            }
        },
        {capture: true}
    );
    element.addEventListener(
        'myevent', 
        (event) => {            
            if (element.querySelector('.targetCheckbox').checked && (event.target === element.querySelector('.throwEventButton'))) {
                runAnimation(element.querySelector('.targetBubbleIndicator'), event);
            }

            if (element.querySelector('.bubbleCheckbox').checked) {
                runAnimation(element.querySelector('.bubbleIndicator'), event);
            }  
        }
    );
    element.addEventListener(
        'animationend', 
        (event) => {
            event.target.classList.remove('animation');
        }
    );
});

const buttons = body.querySelectorAll('.throwEventButton');
buttons.forEach(button => {
    button.onclick = (event) => {
        clearScreen();
        button.dispatchEvent(new CustomEvent('myevent', {bubbles: true, detail: {phase: 0}}));
    };
})

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


