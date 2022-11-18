const duplicateCount = require("./counting_duplicates");

test("should count of distinct case-insensitive", () => {
  tests = [
    {input: "abcde", want: 0},
    {input: "aabbcde", want: 2},
    {input: "aabBcde", want: 2},
    {input: "indivisibility", want: 1},
    {input: "Indivisibilities", want: 2},
    {input: "aA11", want: 2},
    {input: "ABBA", want: 2}
  ]

  for (const t of tests) {
    expect(duplicateCount(t.input)).toBe(t.want);
  }
});
