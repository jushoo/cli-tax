const { parseFile } = require("./parser");
const { processSales } = require("./processor");
const chalk = require("chalk");
const Table = require("cli-table3");

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error("Usage: npm start -- <path_to_file>");
    process.exit(1);
  }

  const filePath = args[0];

  try {
    // 1. Parse File
    const salesData = await parseFile(filePath);

    // 2. Process Data
    const summary = processSales(salesData);

    // 3. Output Results
    const header = chalk.bold.blue;
    const subHeader = chalk.bold.yellow;
    const table = new Table({
      style: { "padding-left": 0, "padding-right": 0, head: [], border: [] },
      colWidths: [20, 25, 25],
    });
    table.push([
      { colSpan: 3, content: header("Order Summary"), hAlign: "center" },
    ]);
    table.push(["", subHeader("Amount"), subHeader("Currency")]);
    table.push(
      { "Total Items": [summary.totalItems, ""] },
      { "Total Revenue (USD)": [`$${summary.totalRevenue.toFixed(2)}`, "USD"] },
      {
        "Total Tax (USD)": [`$${summary.totalTax.toFixed(2)}`, "USD"],
      },
    );

    console.log(table.toString());
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
}

main();
