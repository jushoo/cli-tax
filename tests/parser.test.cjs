const path = require("path");
const { parseFile } = require("../src/parser.js");

describe("parser.js", () => {
  it("should call console.error when file doesnt exist", async () => {
    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => { });
    const filePath = "~/.something/this-doesnt-exist.json";

    await parseFile(filePath);

    expect(errorSpy).toHaveBeenCalledWith(`File: ${filePath} does not exist`);
  });

  it("should throw an error when invalid file is given", async () => {
    const filePath = "./test.pdf";

    await expect(parseFile(filePath)).rejects.toThrow();
  });

  it("should return an array if given json file", async () => {
    const filePath = "./data/orders.json";

    const result = await parseFile(filePath);

    expect(Array.isArray(result)).toBeTruthy();
  });

  it("should return an array of object when given csv file", async () => {
    const filePath = "./data/orders.csv";

    const result = await parseFile(filePath);

    expect(Array.isArray(result)).toBeTruthy();
  });

  it("should parse json when given an absolute path", async () => {
    const filePath = path.resolve(process.cwd(), "data/orders.json");

    const result = await parseFile(filePath);

    expect(Array.isArray(result)).toBeTruthy();
  });
});
