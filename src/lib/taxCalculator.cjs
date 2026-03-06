const TAX_MAP = {
  clothing: 0.05,
  merchandise: 0.15,
  digital: 0,
  default: 0.1,
};

function calculateTax(salesRow) {
  return salesRow.priceToUSD * (TAX_MAP[salesRow.type] ?? TAX_MAP.default);
}

module.exports = { calculateTax };
