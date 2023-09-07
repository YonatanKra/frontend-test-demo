import { setupCounter, unsetCounter } from "./counter";


describe('counter', () => {
    describe('setupCounter', function () {
        it('should be defined', function () {
            expect(setupCounter).toBeDefined();
        });

        it('should throw an error if not given an element', function () {
            expect(() => setupCounter()).toThrowError('No element was provided');
        });

        it('should throw an error if not given a button element', function () {
            const nonButtonElement = document.createElement('div') as HTMLButtonElement;
            expect(() => setupCounter(nonButtonElement)).toThrowError('Element must of of HTMLButtonElement type');
        });

        it('should set the counter element text to "Count is 0" on start', function () {
            const element = document.createElement('button');
            setupCounter(element);
            expect(element.textContent).toBe('Count is 0');
        });
        it('should raise the counter when clicked', function () {
            const element = document.createElement('button');
            setupCounter(element);
            element.click();
            expect(element.textContent).toBe('Count is 1');
        });
    });

    describe('unsetCounter', function () {
        it('should throw an error if not given an element', function () {
            expect(() => unsetCounter()).toThrowError('No element was provided');
        });

        it('should throw an error if not given a button element', function () {
            const nonButtonElement = document.createElement('div') as HTMLButtonElement;
            expect(() => unsetCounter(nonButtonElement)).toThrowError('Element must of of HTMLButtonElement type');
        });
        it('should throw if there is no counter text', function () {
            const element = document.createElement('button');
            expect(() => unsetCounter(element)).toThrowError('Counter text not found. Assuming element is not a counter.');
        });

        it('should remove counter text', function () {
            const element = document.createElement('button');
            setupCounter(element);
            unsetCounter(element);
            expect(element.textContent).toBe('');
        });

        it('should stop click from settin the text', function () {
            const element = document.createElement('button');
            setupCounter(element);
            unsetCounter(element);
            element.click();
            expect(element.textContent).toBe('');
        });
    });
});