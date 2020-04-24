const letterCount = require('./letterCount')

describe('test suite for letterCount function',() => {
    it('is letterCount a function', () => {
        expect(typeof letterCount).toEqual('function')
    })
    it('returns the correct count of given character in a string', () => {
        let result=letterCount('l','silent')
        expect(result).toEqual(1);
        expect(result).toBe(1);
    })
    it('returns a number data type for the character count',() => {
        let result=letterCount('l','silent')
        expect(typeof result).toEqual('number');
        expect(typeof result).not.toEqual('string')
    })
    it('returns undefined if given character is not in string', () => {
        let result=letterCount('p','silent')
        expect(result).toBeUndefined();
    })
})

