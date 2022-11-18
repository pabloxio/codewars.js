const disemvowel = require("./disemvowel_trolls")

test("should return a string with all vowels removed", () => {
  const tests = [
    {input: "This website is for losers LOL!", want: "Ths wbst s fr lsrs LL!"},
    {input: "No offense but,\nYour writing is among the worst I've ever read", want: "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"},
    {input: "What are you, a communist?", want: "Wht r y,  cmmnst?"}
  ]

  for (const t of tests) {
    expect(disemvowel(t.input)).toBe(t.want)
  }
})
