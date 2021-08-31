let { calculateExpenses, sampleCompany } = require("./03-employee-salary");

describe("calculate company expenses", () => {
  it("should correctly calculate all expenses", () => {
    expect(calculateExpenses(sampleCompany)).toBe(369000);
  });

  it("should calculate and expense of 0 when given empty object", () => {
    expect(calculateExpenses({})).toBe(0);
  });
});
