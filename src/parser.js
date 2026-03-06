const { readFile } = require("fs/promises");
const fs = require("fs");
const path = require("path");
const { parseCsv } = require("./lib/csvParser.cjs");

const validExtensions = [".csv", ".json"];

async function parseFile(filePath) {
  console.log("Parsing file: " + filePath);

  const normalizedPath = path.isAbsolute(filePath)
    ? filePath
    : path.resolve(process.cwd(), filePath);
  const extension = path.extname(normalizedPath).toLowerCase();

  if (!validExtensions.includes(extension)) {
    throw new Error("Invalid file, only .csv and .json are supported");
  }

  try {
    if (!fs.existsSync(normalizedPath)) {
      console.error(`File: ${filePath} does not exist`);
      return;
    }

    const data = await readFile(normalizedPath, "utf8");

    if (extension === ".json") {
      return JSON.parse(data);
    }

    if (extension === ".csv") {
      return parseCsv(data);
    }

    return null;
  } catch (error) {
    console.error("Error reading or parsing file:", error);
  }
}

module.exports = { parseFile };
