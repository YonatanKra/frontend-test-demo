export function unsetCounter() {
    throw new Error('No element was provided');
}

export function setupCounter(element?: HTMLButtonElement) {
    if (!element) {
        throw new Error('No element was provided');
    }

    if (!(element.tagName === 'BUTTON')) {
        throw new Error('Element must of of HTMLButtonElement type');
    }
    
    element.innerText = 'Count is 0';
    element.addEventListener('click', () => {
        element.innerText = `Count is ${parseInt(element.innerText.split(' ')[2]) + 1}`;
    });
}

