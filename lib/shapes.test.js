// Test text
// Test shape
// Test write file
const {Shape, Triangle} = require('./shapes.js');

describe(Shape, () => {
    describe('Triangle shape', () => {
        it('it should display a blue triangle', () => {
            const result = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });

    });
});