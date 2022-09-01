describe("Sidebar", () => {
  it("should match snapshot at root url", () => {
    cy.visit("/");

    cy.get(".Sidebar").matchImageSnapshot();
  });
});
