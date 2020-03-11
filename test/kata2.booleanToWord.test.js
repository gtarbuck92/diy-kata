const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test('returns Yes when Boolean is equal to True', () => {
    expect(booleanToWord(true)).toEqual('Yes')
  })

  test('returns No when Boolean is Equal to False', () => {
    expect(booleanToWord(false)).toEqual('No')
  })
});
