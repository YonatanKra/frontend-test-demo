export function unsetCounter(element?: HTMLButtonElement) {
    validateElement(element);
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
    
    element.innerText = 'Count is 0';
    element.addEventListener('click', () => {
        element.innerText = `Count is ${parseInt(element.innerText.split(' ')[2]) + 1}`;
    });
}

