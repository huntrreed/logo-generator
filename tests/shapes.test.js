const { Circle, Square, Triangle } = require('../lib/shapes/shapes');

describe('Shape Classes', () => {
    describe('Triangle', () => {
        it('render method outputs correct SVG string', () => {
            const triangle = new Triangle();
            triangle.setColor('blue');
            const expectedSVG = '<polygon points="150,18 244,182 56,182" fill="blue" />';
            expect(triangle.render()).toEqual(expectedSVG);
        });
    });

    describe('Circle', () => {
        it('render method outputs correct SVG string', () => {
            const circle = new Circle();
            circle.setColor('red');
            const expectedSVG = '<circle cx="150" cy="100" r="80" fill="red" />';
            expect(circle.render()).toEqual(expectedSVG);
        });
    });

    describe('Square', () => {
        it('render method outputs correct SVG string', () => {
            const square = new Square();
            square.setColor('green');
            const expectedSVG = '<rect x="50" y="25" width="100" height="100" fill="green" />';
            expect(square.render()).toEqual(expectedSVG);
        });
    });
});