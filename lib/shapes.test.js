// Test text
// Test shape
// Test write file
const {Shape, Triangle, Circle} = require('./shapes.js');

describe(Shape, () => {
    // Test Triangle
    describe('Triangle shape', () => {
        it('it should display a blue triangle', () => {
            const expectedResult = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual(expectedResult);
        });

    });
// Test Circle
    describe('Circle Shape', () => {
        it('it should display a pink circle', () => {
            const expectedResult = '<circle cx="150" cy="100" r="100" fill="pink"/>';
            const shape = new Circle();
            shape.setColor("pink");
            expect(shape.render()).toEqual(expectedResult);
        });
    });
});