const solution = require('./concatenateArrays.js');

test('test 1', () => {
    expect(solution([2, 2, 1], [10, 11])).toEqual([2, 2, 1, 10, 11]);
});

test('test 2', () => {
    expect(solution([1, 2], [3, 1, 2])).toEqual([1, 2, 3, 1, 2]);
});

test('test 3', () => {
    expect(solution([1], [])).toEqual([1]);
});

test('test 4', () => {
    expect(solution([2, 10, 3, 9, 5, 11, 11], [4, 8, 1, 13, 3, 1, 14])).toEqual([2, 10, 3, 9, 5, 11, 11, 4, 8, 1, 13, 3, 1, 14]);
});

test('test 5', () => {
    expect(solution([9, 6, 6, 9, 8, 14], [3, 2, 2, 5, 3, 11, 12, 9, 7, 7])).toEqual([9, 6, 6, 9, 8, 14, 3, 2, 2, 5, 3, 11, 12, 9, 7, 7]);
});
