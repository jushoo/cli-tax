const CONVERSION_MAP = {
  EUR: 1.1,
  CAD: 0.75,
  USD: 1.0,
};

function convertToUSD(salesRow) {
  return salesRow.price * CONVERSION_MAP[salesRow.currency];
}

module.exports = { convertToUSD };
