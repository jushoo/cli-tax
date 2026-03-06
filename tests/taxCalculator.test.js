const { calculateTax } = require("../src/lib/taxCalculator.js");
const { convertToUSD } = require("../src/lib/currencyConverter.js");

describe("currencyConverter.js", () => {
  it("should compute tax for merchandise with rate of 15%", () => {
    const salesRow = {
      date: "2024-02-01",
      sku: "KEYCAP-SET",
      price: 45,
      currency: "USD",
      type: "merchandise",
    };

    const result = convertToUSD(salesRow);
    salesRow.priceToUSD = result;
    const tax = calculateTax(salesRow);

    expect(tax).toEqual(result * 0.15);
  });

  it("should compute tax of digital sales with rate of 0%", () => {
    const salesRow = {
      date: "2024-02-02",
      sku: "COURSE-PRO",
      price: 100,
      currency: "EUR",
      type: "digital",
    };

    const result = convertToUSD(salesRow);
    salesRow.priceToUSD = result;
    const tax = calculateTax(salesRow);

    expect(tax).toEqual(0);
  });

  it("should compute tax of clothing sales with rate of 5%", () => {
    const salesRow = {
      date: "2024-02-03",
      sku: "POSTER-ART",
      price: 15,
      currency: "CAD",
      type: "clothing",
    };

    const result = convertToUSD(salesRow);
    salesRow.priceToUSD = result;
    const tax = calculateTax(salesRow);

    expect(tax).toEqual(result * 0.05);
  });

  it("should default tax to 10%", () => {
    const salesRow = {
      date: "2024-02-03",
      sku: "POSTER-ART",
      price: 15,
      currency: "CAD",
      type: "banana",
    };

    const result = convertToUSD(salesRow);
    salesRow.priceToUSD = result;
    const tax = calculateTax(salesRow);

    expect(tax).toEqual(result * 0.1);
  });
});
