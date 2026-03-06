const { convertToUSD } = require("./lib/currencyConverter.cjs");
const { calculateTax } = require("./lib/taxCalculator.cjs");

function processSales(salesData) {
  for (const row of salesData) {
    const priceToUSD = convertToUSD(row);
    row.priceToUSD = priceToUSD;

    const tax = calculateTax(row);
    row.tax = tax;
  }

  return {
    totalItems: salesData.length,
    totalRevenue: salesData.reduce((acc, curr) => acc + curr.priceToUSD, 0),
    totalTax: salesData.reduce((acc, curr) => acc + curr.tax, 0),
  };
}

module.exports = { processSales };
