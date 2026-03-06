const { parseCsv } = require("../src/lib/csvParser.cjs");

describe("csvParser.cjs", () => {
  it("should throw an error when passed a non string value", () => {
    const data = 123123123;

    expect(() => parseCsv(data)).toThrow("CSV content must be a string");
  });
});
