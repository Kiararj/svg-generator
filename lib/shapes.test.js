const {Circle} =  require('./shapes')

describe('Circle Class', ()=> {
    test('it will return the svg info from the render method', ()=>{
        const circle = new Circle('a', 'b', 'c')

        expect(circle.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="c" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="b">a</text></svg>')
    })
});

const {Triangle} =  require('./shapes')

describe('Triangle Class', ()=> {
    test('it will return the svg info from the render method', ()=>{
        const triangle = new Triangle('a', 'b', 'c')

        expect(triangle.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182"  fill="c" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="b">a</text></svg>')
    })
});

const {Square} =  require('./shapes')

describe('Square Class', ()=> {
    test('it will return the svg info from the render method', ()=>{
        const square = new Square('a', 'b', 'c')

        expect(square.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200"><rect width="200" height="200" fill="c" /><text x="100" y="125" font-size="70" text-anchor="middle" fill="b">c</text></svg>')
    })
});

