import getRandomDelay from "<helpers>/math/getRandomDelay";

const mockMath = Object.create(global.Math);
mockMath.random = (): number => 0.5;
global.Math = mockMath;

describe("helpers / math / getRandomDelay", () => {
  test("should return random number within min and max range", () => {
    expect(getRandomDelay(5, 10)).toEqual(7);
    expect(getRandomDelay(10, 15)).toEqual(12);
    expect(getRandomDelay(30, 50)).toEqual(40);
    expect(getRandomDelay(78, 103)).toEqual(90);
  });

  test("should return number", () => {
    expect(typeof getRandomDelay(5, 10)).toBe("number");
  });
});