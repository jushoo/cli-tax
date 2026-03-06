const { readFile } = require("fs/promises");
const fs = require("fs");
const path = require("path");
const { parseCsv } = require("./lib/csvParser.cjs");

const validExtensions = [".csv", ".json"];

async function parseFile(filePath) {
  console.log("Parsing file: " + filePath);

  const extension = path.extname(filePath);

  if (!validExtensions.includes(extension)) {
    throw new Error("Invalid file, only .csv and .json are supported");
  }

  try {
    const fullPath = path.join(process.cwd(), filePath);

    if (!fs.existsSync(fullPath)) {
      console.error(`File: ${filePath} does not exist`);
      return;
    }
    const data = await readFile(fullPath, "utf8");

    if (extension === ".json") {
      const jsonData = JSON.parse(data);
      return jsonData;
    }

    if (extension === ".csv") {
      const csvData = parseCsv(data);
      return csvData;
    }

    return null;
  } catch (error) {
    console.error("Error reading or parsing file:", error);
  }
}

module.exports = { parseFile };
