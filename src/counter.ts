export function setupCounter(element?: HTMLButtonElement) {
    if (!element) {
        throw new Error('No element was provided');
    }

    if (!(element.tagName === 'BUTTON')) {
        throw new Error('Element must of of HTMLButtonElement type');
    }
}
