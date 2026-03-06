function parseCsv(csvContent) {
  if (typeof csvContent !== "string") {
    throw new TypeError("CSV content must be a string");
  }

  const lines = csvContent
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) {
    return [];
  }

  const headers = lines[0].split(",").map((header) => header.trim());

  return lines.slice(1).map((line) => {
    const values = line.split(",").map((value) => value.trim());
    const row = {};

    headers.forEach((header, index) => {
      row[header] = values[index] ?? "";
    });

    if (row.price !== undefined) {
      const numericPrice = Number.parseFloat(row.price);
      row.price = Number.isNaN(numericPrice) ? row.price : numericPrice;
    }

    return row;
  });
}

module.exports = { parseCsv };
