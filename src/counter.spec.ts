import { setupCounter } from "./counter";


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
    });
});