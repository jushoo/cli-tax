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

  it("should return calculated totals for data", () => {
    const data = [
      {
        date: "2024-02-01",
        sku: "KEYCAP-SET",
        price: 45.0,
        currency: "USD",
        type: "merchandise",
      },
      {
        date: "2024-02-02",
        sku: "COURSE-PRO",
        price: 100.0,
        currency: "EUR",
        type: "digital",
      },
      {
        date: "2024-02-03",
        sku: "POSTER-ART",
        price: 15.0,
        currency: "CAD",
        type: "merchandise",
      },
    ];

    const result = processSales(data);

    expect(result.totalItems).toEqual(3);
    expect(result.totalRevenue).toEqual(166.25);
    expect(result.totalTax).toEqual(8.4375);
  });
});
