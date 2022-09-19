describe("Header", () => {
  it("should match snapshot at tv width", () => {
    cy.viewport(1921, 1080);

    cy.visit("/");

    cy.get(".Header").matchImageSnapshot();
  });

  it("should match snapshot at desktop width", () => {
    cy.viewport(1681, 1080);

    cy.visit("/");

    cy.get(".Header").matchImageSnapshot();
  });

  it("should match snapshot at tablet width", () => {
    cy.viewport(1681, 1080);

    cy.visit("/");

    cy.get(".Header").matchImageSnapshot();

    cy.dataCy("MenuButton")
      .should("be.visible")
      .should("not.be.disabled")
      .click();

    cy.dataCy("SideMenu").matchImageSnapshot();
  });
});
