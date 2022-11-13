const sumMix = require("./kata");

test("should sum mixed array", () => {
  tests = [
    {arr: [9, 3, "7", "3"], want: 22},
    {arr: ["5", "0", 9, 3, 2, 1, "9", 6, 7], want: 42},
    {arr: ["3", 6, 6, 0, "5", 8, 5, "6", 2,"0"], want: 41}
  ]

  for (const t of tests) {
    expect(sumMix(t.arr)).toBe(t.want);
  }
});
