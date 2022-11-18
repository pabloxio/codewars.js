const tribonacci = require("./tribonacci_sequence");

test("should calculate tribonacci sequence", () => {
  tests = [
    {signature: [1,1,1], n: 10, want: [1,1,1,3,5,9,17,31,57,105]},
    {signature: [0,0,1], n: 10, want: [0,0,1,1,2,4,7,13,24,44]},
    {signature: [0,1,1], n: 10, want: [0,1,1,2,4,7,13,24,44,81]},
    {signature: [1,0,0], n: 10, want: [1,0,0,1,1,2,4,7,13,24]},
    {signature: [0,0,0], n: 10, want: [0,0,0,0,0,0,0,0,0,0]},
    {signature: [1,2,3], n: 10, want: [1,2,3,6,11,20,37,68,125,230]},
    {signature: [3,2,1], n: 10, want: [3,2,1,6,9,16,31,56,103,190]},
    {signature: [1,1,1], n: 1, want: [1]},
    {signature: [1,1,1], n: 0, want: []}
  ]

  for (const t of tests) {
    expect(tribonacci(t.signature, t.n)).toStrictEqual(t.want)
  }
});

