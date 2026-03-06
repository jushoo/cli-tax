const { processSales } = require("../src/processor");

describe("Sales Processor", () => {
  test("should return zero summary for empty data", () => {
    const data = [];
    const result = processSales(data);
    expect(result).toEqual({
      totalItems: 0,
      totalRevenue: 0.0,
      totalTax: 0.0,
    });
  });
});
