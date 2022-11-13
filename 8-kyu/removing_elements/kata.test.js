const removeEveryOther = require("./kata");

test("should remove every second element", () => {
  tests = [
    {arr: ["Keep", "Remove", "Keep", "Remove", "Keep"], want: ["Keep", "Keep", "Keep"]},
    {arr: ["Hello", "Goodbye", "Hello Again"], want: ["Hello", "Hello Again"]},
    {arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], want: [1, 3, 5, 7, 9]},
    {arr: [[1, 2]], want: [[1, 2]]},
    {arr: [["Goodbye"], {"Great": "Job"}], want: [["Goodbye"]]}
  ]

  for (const t of tests) {
    expect(removeEveryOther(t.arr)).toStrictEqual(t.want);
  }
});
