const filter_list = require("./filter_list")

test("it should filter out strings", () => {
  const tests = [
    {input: [1,2,'a','b'], want: [1,2]},
    {input: [1,'a','b',0,15], want: [1,0,15]},
    {input: [1,2,'aasf','1','123',123], want: [1,2,123]}
  ]

  for (const t of tests) {
    expect(filter_list(t.input)).toStrictEqual(t.want)
  }
})
