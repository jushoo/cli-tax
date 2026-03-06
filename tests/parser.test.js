const { parseFile } = require("../src/parser.js");

describe("parser.js", () => {
  it("should throw an error when invalid file is given", async () => {
    const path = "./test.pdf";

    await expect(parseFile(path)).rejects.toThrow();
  });

  it("should return an array if given json file", async () => {
    const path = "./data/orders.json";

    const result = await parseFile(path);

    expect(Array.isArray(result)).toBeTruthy();
  });

  it("should return an array of object when given csv file", async () => {
    const path = "./data/orders.csv";

    const result = await parseFile(path);

    expect(Array.isArray(result)).toBeTruthy();
  });

  it("should throw an error when csv is malformed", async () => { });
});
