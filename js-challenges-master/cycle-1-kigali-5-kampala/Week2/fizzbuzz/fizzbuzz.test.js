const fizzBuzz = require('./fizzbuzz');

test('returns Fizzbuzz when sum of length is divisible by 3 and 5 ', () => {
    expect(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7])).toBe('Fizzbuzz');
});

test('returns Fizz when sum of length is divisible by 3 and 5 ', () => {
    expect(fizzBuzz([1, 2, 3], [])).toBe('Fizz');
});

test('returns fizz when sum of length is divisible by 3 and 5 ', () => {
    expect(fizzBuzz([1, 2, 3], [1, 2])).toBe('Buzz');
});

test('returns sum of lengths if it is not divisible by 3 and 5 ', () => {
    expect(fizzBuzz([1, 2, 3], [1])).toBe(4);
});
