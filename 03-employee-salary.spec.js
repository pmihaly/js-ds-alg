let { calculateExpenses, sampleCompany } = require("./03-employee-salary");

describe("calculate company expenses", () => {
  it("should correctly calculate all expenses", () => {
    expect(calculateExpenses(sampleCompany)).toBe(369000);
  });
});

