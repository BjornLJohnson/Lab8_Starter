// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// isPhoneNumber
test('valid phone number 1', () => {
    expect(functions.isPhoneNumber("(123)-456-7890")).toBe(true);
});
test('valid phone number 2', () => {
    expect(functions.isPhoneNumber("(408)-111-1111")).toBe(true);
});
test('invalid phone number 1', () => {
    expect(functions.isPhoneNumber("1223AB-5678")).toBe(false);
});
test('invalid phone number 2', () => {
    expect(functions.isPhoneNumber("0")).toBe(false);
});

// isEmail
test('valid email 1', () => {
    expect(functions.isEmail("bjorn@lundjohnson.com")).toBe(true);
});
test('valid email 2', () => {
    expect(functions.isEmail("fakemail@gmail.com")).toBe(true);
});
test('invalid email 1', () => {
    expect(functions.isEmail("test@fake.mail.net")).toBe(false);
});
test('invalid email 2', () => {
    expect(functions.isEmail("invalid@emailaddress")).toBe(false);
});

// isStrongPassword
test('valid strong password 1', () => {
    expect(functions.isStrongPassword("test")).toBe(true);
});
test('valid strong password 2', () => {
    expect(functions.isStrongPassword("qwerty")).toBe(true);
});
test('invalid strong password 1', () => {
    expect(functions.isStrongPassword("$a_g!pi#uf$")).toBe(false);
});
test('invalid strong password 2', () => {
    expect(functions.isStrongPassword("4h5#$t2#$%YG45")).toBe(false);
});

// isDate
test('valid date 1', () => {
    expect(functions.isDate("1/2/1900")).toBe(true);
});
test('valid date 2', () => {
    expect(functions.isDate("05/12/2021")).toBe(true);
});
test('invalid date 1', () => {
    expect(functions.isDate("123/12/1999")).toBe(false);
});
test('invalid date 2', () => {
    expect(functions.isDate("ABC")).toBe(false);
});

// isHexColor
test('valid hex color 1', () => {
    expect(functions.isHexColor("ABC")).toBe(true);
});
test('valid hex color 2', () => {
    expect(functions.isHexColor("000000")).toBe(true);
});
test('invalid hex color 1', () => {
    expect(functions.isHexColor("G13")).toBe(false);
});
test('invalid hex color 2', () => {
    expect(functions.isHexColor("12345")).toBe(false);
});