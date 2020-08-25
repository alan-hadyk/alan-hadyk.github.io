import capitalize from "<helpers>/strings/capitalize";

describe("helpers / string / capitalize", () => {
  test("should be able to capitalize string", () => {
    expect(capitalize("samsung")).toEqual("Samsung");
    expect(capitalize("n")).toEqual("N");
    expect(capitalize("NOKIA")).toEqual("Nokia");
    expect(capitalize("aPpLe")).toEqual("Apple");
    expect(capitalize("aRTURIA")).toEqual("Arturia");
  });

  test("should return string", () => {
    expect(typeof capitalize("phrase")).toBe("string");
  });
});