import webApisCategory from "<pages>/Home/sections/skills/categories/webApisCategory";

describe("pages / Home / sections / skills / categories / webApisCategory", () => {
  test("should have correct content", () => {
    expect(webApisCategory).toEqual({
      iconsWithLabels: [
        {
          iconName: "brandGraphQL",
          label: "GraphQL"
        },
        {
          iconName: "brandApollo",
          label: "Apollo"
        },
        {
          iconName: "brandREST",
          label: "REST"
        },
        {
          iconName: "brandWebsocket",
          label: "WebSockets"
        }
      ],
      title: "Web APIs"
    });
  });
});