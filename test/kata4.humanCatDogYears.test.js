const { humanCatDogYears } = require("../src");

describe('humanCatDogYears', () => {
    test('returns human age converted to cat and dog age', () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64])
    })
})
