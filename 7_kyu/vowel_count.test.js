const getCount = require("./vowel_count");

test("Return the number (count) of vowels", () => {
  expect(getCount("abracadabra")).toBe(5)
});

