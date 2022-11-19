const solution = require("./multiplies_3_or_5")

test("should return sum for multiples of 3 or 5", () => {
  expect(solution(10)).toBe(23)
  expect(solution(-1)).toBe(0)
})
