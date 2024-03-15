console.log('-----startJs');
const DIV_AMOUNT = 4;
const INDICATOR_TIMEOUT = 1.5;
let timerIds = [];
const divContainer = `<div id="div{!id}" class="divContainer">
<div class="divTitle">
    Div {!id}.
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
    <button name="div{!id}" class="throwEventButton">Throw on event</button>          
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
    bodyContent = bodyContent.replace('{!innerContent}', divContainer).replaceAll('{!id}', i);
}
bodyContent = bodyContent.replace('{!innerContent}', '');
body.innerHTML = bodyContent;

// console.log('-----bodyContent: ', bodyContent);

// const htmlBody = document.querySelectorAll('body');
// htmlBody[0].innerHTML = bodyContent;

// const htmlBody1 = document.querySelectorAll('body');
// console.log('-----htmlBody1: ', htmlBody1);

// console.log('-----body.querySelectorAll("#div2"): ', body.querySelectorAll("#div2"));

const divContainers = body.querySelectorAll('.divContainer');
divContainers.forEach(element => {
    element.addEventListener(
        'myevent', 
        (event) => {
            // event.detail.phase += 1;
            // console.log('-----event.detail.phase: ', event.detail.phase);
            // console.group('-----Capture myevent', element.id);
            // console.log('-----element: ', element);
            console.log('-----event: ', event);
            // console.log('-----event.currentTarget: ', event.currentTarget);
            // console.log('-----event.target: ', event.target);
            // console.groupEnd();
            const captureCheckbox = element.querySelector('.captureCheckbox');
            const captureIndicator = element.querySelector('.captureIndicator');
            const targetCheckbox = element.querySelector('.targetCheckbox');
            const targetCaptureIndicator = element.querySelector('.targetCaptureIndicator');
            
            if (captureCheckbox.checked) {
                // setTimeout(() => runAnimation(captureIndicator), event.detail.phase * 1000)
                runAnimation(captureIndicator, event);
                //event.detail.phase += 1;
            }

            if (targetCheckbox.checked && (event.target.name === element.id)) {
                // setTimeout(() => runAnimation(targetCaptureIndicator), event.detail.phase * 1000)
                runAnimation(targetCaptureIndicator, event);
                //event.detail.phase += 1;
            }

        },
        {capture: true}
    );
    element.addEventListener(
        'myevent', 
        (event) => {
            // console.group('-----Bubble myevent', element.id);
            // console.log('-----event: ', event);
            // console.groupEnd();
            const targetCheckbox = element.querySelector('.targetCheckbox');
            const targetBubbleIndicator = element.querySelector('.targetBubbleIndicator');
            const bubbleCheckbox = element.querySelector('.bubbleCheckbox');
            const bubbleIndicator = element.querySelector('.bubbleIndicator');
            
            if (targetCheckbox.checked && (event.target.name === element.id)) {
                // setTimeout(() => runAnimation(targetBubbleIndicator), event.detail.phase * 1000)
                runAnimation(targetBubbleIndicator, event);
                //event.detail.phase += 1;
            }

            if (bubbleCheckbox.checked) {
                //setTimeout(() => runAnimation(bubbleIndicator), event.detail.phase * 1000)
                runAnimation(bubbleIndicator, event);
                //event.detail.phase += 1;
            }

            
        }
    );
    element.addEventListener(
        'animationend', 
        (event) => {
            // console.log('-----complete animation on element ', element.id);
            event.target.classList.remove('animation');
        }
    );
});

const buttons = body.querySelectorAll('.throwEventButton');
buttons.forEach(button => {
    //console.log('-----custom event dispatched: ');
    button.onclick = (event) => {
        //console.log('-----event: ', event);
        clearScreen();

        button.dispatchEvent(new CustomEvent('myevent', {bubbles: true, detail: {phase: 0}}));
    };
})

function runAnimation(elem, event) {
    //console.log('-----run animation on element ', elem );
    timerIds.push(setTimeout(() => elem.classList.add('animation'), event.detail.phase));
    event.detail.phase += INDICATOR_TIMEOUT * 1000;
}

function clearScreen() {
    const indicators = body.querySelectorAll('.indicator');
    indicators.forEach(indicator => indicator.classList.remove('animation'));

    timerIds.forEach(timerId => clearTimeout(timerId));
    timerIds = [];
}


