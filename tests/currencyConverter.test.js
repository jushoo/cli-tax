const { convertToUSD } = require("../src/lib/currencyConverter.js");

describe("currencyConverter.js", () => {
  it("should convert USD to USD with a rate of 1.00", () => {
    const salesRow = {
      date: "2024-02-01",
      sku: "KEYCAP-SET",
      price: 45,
      currency: "USD",
      type: "merchandise",
    };

    const result = convertToUSD(salesRow);

    expect(result).toEqual(salesRow.price * 1.0);
  });

  it("should convert EUR to USD with a rate of 1.10", () => {
    const salesRow = {
      date: "2024-02-02",
      sku: "COURSE-PRO",
      price: 100,
      currency: "EUR",
      type: "digital",
    };

    const result = convertToUSD(salesRow);

    expect(result).toEqual(salesRow.price * 1.1);
  });

  it("should convert CAD to USD with a rate of 0.75", () => {
    const salesRow = {
      date: "2024-02-03",
      sku: "POSTER-ART",
      price: 15,
      currency: "CAD",
      type: "merchandise",
    };

    const result = convertToUSD(salesRow);

    expect(result).toEqual(salesRow.price * 0.75);
  });
});
