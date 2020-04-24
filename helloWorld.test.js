const sayHelloWorld = require('./helloWorld')

describe('hello world test suite', () => {
    it('check if sayHelloWorld is function',() => {
        expect(typeof sayHelloWorld).toBe('function')
    })
    it('returns a string Hello World',() => {
        expect(sayHelloWorld()).toBe('Hello World!')
    })
})