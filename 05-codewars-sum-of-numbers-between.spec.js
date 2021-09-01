let getSum = require("./05-codewars-sum-of-numbers-between");

describe("add numbers and numbers between two numbers", () => {
  it("should just add numbers when given adjacent numbers", () => {
    expect(getSum(1, 2)).toBe(3);
  });

  it("should add numbers when given non adjacent numbers", () => {
    expect(getSum(1, 3)).toBe(6);
  });

  it("should work when the same number is given", () => {
    expect(getSum(1, 1)).toBe(1);
  });

  it("should also work with negative numbers", () => {
    expect(getSum(-1, 0)).toBe(-1);
  });

  it("should sort numbers when inputs aren't ordered", () => {
    expect(getSum(0, -1)).toBe(-1);
  });
});
