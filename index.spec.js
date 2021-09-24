const convert = require('./index.js')

describe('Convert number to +234', () => {
  let number = '08022211133'
  it('should convert successfully', () => {
    expect(convert.module(number)).toBe(`+2348022211133`)
  });

});