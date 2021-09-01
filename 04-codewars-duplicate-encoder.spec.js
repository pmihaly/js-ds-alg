let duplicateEncoder = require("./04-codewars-duplicate-encoder");

describe("encode duplicates", () => {
  it("should encode strings with no reoccurrence to open braces", () => {
    expect(duplicateEncoder("din")).toBe("(((");
  });

  it("should encode strings with reoccurrence to open and closed braces", () => {
    expect(duplicateEncoder("recede")).toBe("()()()");
  });

  it("should ignore case", () => {
    expect(duplicateEncoder("Success")).toBe(")())())");
  });

  it("should handle symbols", () => {
    expect(duplicateEncoder("(( @")).toBe("))((");
  });
});
