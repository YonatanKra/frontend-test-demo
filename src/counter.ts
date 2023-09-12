export function unsetCounter(element?: HTMLButtonElement) {
    validateElement(element);

    if(element.innerText.indexOf('Count is') === -1) {
        throw new Error('Counter text not found. Assuming element is not a counter.');
    }

    element.innerText = '';

    element?.removeEventListener('click', setupCounterText);
}

function setupCounterText(e: MouseEvent) {
    const element = e.target;
    element.innerText = `Count is ${parseInt(element.innerText.split(' ')[2]) + 1}`;
}

function validateElement(element: HTMLButtonElement | undefined) {
    if (!element) {
        throw new Error('No element was provided');
    }
    if (!(element.tagName === 'BUTTON')) {
        throw new Error('Element must of of HTMLButtonElement type');
    }
}

export function setupCounter(element?: HTMLButtonElement) {
    validateElement(element);
    let newElement = element.innerText.indexOf('Count is') === -1;

    element.innerText = 'Count is 0';
    
    newElement && element.addEventListener('click', setupCounterText);
}

