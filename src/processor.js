const { convertToUSD } = require("./lib/currencyConverter.js");
const { calculateTax } = require("./lib/taxCalculator.js");

function processSales(salesData) {
  // TODO: Implement business logic here.
  // 1. Loop through sales
  // 2. Convert currency to USD
  // 3. Calculate tax based on type
  // 4. Return summary object { totalItems, totalRevenue, totalTax }
  //
  console.log(salesData);

  for (const row of salesData) {
    const priceToUSD = convertToUSD(row.price);
    row.priceToUSD = priceToUSD;

    const tax = calculateTax(row);
    row.tax = tax;
  }

  console.log(salesData);

  return {
    totalItems: 0,
    totalRevenue: 0.0,
    totalTax: 0.0,
  };
}

module.exports = { processSales };
