// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//function isPhoneNumber(phoneNumber)

test('isPhoneNumber(true 1)', () => {
    expect(functions.isPhoneNumber('(347) 829-1290')).toBe(true);
});
test('isPhoneNumber(true 2)', () => {
    expect(functions.isPhoneNumber('(147) 329-1210')).toBe(true);
});
test('isPhoneNumber(false 1)', () => {
    expect(functions.isPhoneNumber('12982329814048')).toBe(false);
});
test('isPhoneNumber(false 2)', () => {
    expect(functions.isPhoneNumber('00')).toBe(false);
});

//function isEmail(email) 
test('isEmail(true 1)', () => {
    expect(functions.isEmail('tiffzhong@ucsd.edu')).toBe(true);
});
test('isEmail(true 2)', () => {
    expect(functions.isEmail('tiffzhong123@gmail.com')).toBe(true);
});
test('isEmail(false 1)', () => {
    expect(functions.isEmail('tiffzhong123')).toBe(false);
});
test('isEmail(false 1)', () => {
    expect(functions.isEmail('@tiff!!zh...walekjr12ahskjdfawem3')).toBe(false);
});

//function isStrongPassword(password)
test('isStrongPassword(true 1)', () => {
    expect(functions.isStrongPassword('tuwiera1_393')).toBe(true);
});
test('isStrongPassword(true 2)', () => {
    expect(functions.isStrongPassword('a_39')).toBe(true);
});
test('isStrongPassword(false 1)', () => {
    expect(functions.isStrongPassword('a..')).toBe(false);
});
test('isStrongPassword(false 1)', () => {
    expect(functions.isStrongPassword('1asdsd')).toBe(false);
});

//function isDate(date)
test('isDate(true 1)', () => {
    expect(functions.isDate('1/1/2000')).toBe(true);
});
test('isDate(true 2)', () => {
    expect(functions.isDate('10/1/2001')).toBe(true);
});
test('isDate(false 1)', () => {
    expect(functions.isDate(' /1/2001')).toBe(false);
});
test('isDate(false 2)', () => {
    expect(functions.isDate('111/2011')).toBe(false);
});

//function isHexColor(color)
test('isHexColor(true 1)', () => {
    expect(functions.isHexColor('#0000FF')).toBe(true);
});
test('isHexColor(true 2)', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});
test('isHexColor(false 1)', () => {
    expect(functions.isHexColor('1292')).toBe(false);
});
test('isHexColor(false 2)', () => {
    expect(functions.isHexColor('#111aaa20111')).toBe(false);
});