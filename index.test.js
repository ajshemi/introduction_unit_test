//describe function, takes a string and callback function
describe('group of tests',() => {

    //each test begins with 'it'
    //it function also take a string and callback function
    it('true is equal true',() => {

        //use expect keyword to make assertion
        //make assertion or check truthiness of comparison statement
        expect(true).toEqual(true)
    })
    it('false is equal false',() => {

        //use expect keyword to make assertion
        //make assertion or check truthiness of comparison statement
        expect(false).toEqual(false)
    })
})
it('check if string contains character', () => {
    let string='silent'
    let char='p'
    expect(new Set(string.split(''))).toContain('i');
})