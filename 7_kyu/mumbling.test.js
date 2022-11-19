const accum = require("./mumbling")

test("should mumbling", () => {
  const tests = [
    {input: "abcd", want: "A-Bb-Ccc-Dddd"},
    {input: "RqaEzty", want: "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"},
    {input: "cwAt", want: "C-Ww-Aaa-Tttt"}
  ]

  for (const t of tests) {
    expect(accum(t.input)).toBe(t.want)
  }
})
