import zIndex from "<styles>/variables/zIndex";

describe("styles / variables / zIndex", () => {
  test("should have correct layering", () => {
    expect(zIndex).toEqual({
      layer1: "100",
      layer2: "200",
      layer3: "300",
      layer4: "400",
      layer5: "500",
      layer6: "600",
      layer7: "700",
      layer8: "800",
      layer9: "900",
      layer10: "1000"
    });
  });
});