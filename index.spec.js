const convert = require('./index.js')

describe('Convert number to +234', () => {
  let number = '08022211133'
  it('should convert successfully', () => {
    expect(convert(number)).toBe(`+2348022211133`)
  });

  it('should throw error for undefined number', () => {
    expect(convert()).toBeUndefined()
  });
});