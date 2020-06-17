import React from "react";
import { RenderResult } from "@testing-library/react";

import ContactSection from "<pages>/Home/sections/contact/ContactSection";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("pages / Home / sections / contact / ContactSection", () => {
  test("should have correct structure", () => {
    const {
      ContactSectionContainer,
      FlexContainer,
      Link,
      Text
    } = setup();

    expect(ContactSectionContainer.children[1]).toEqual(FlexContainer);
    expect(FlexContainer.children[0]).toEqual(Link);
    expect(Link.children[0]).toEqual(Text);
  });

  describe("ContactSectionContainer", () => {
    describe("Props", () => {
      describe("title", () => {
        test("should have About me", () => {
          const {
            ContactSectionContainer
          } = setup();
  
          expect(ContactSectionContainer.children[0].children[0].textContent).toEqual("Contact");
        });
      });
    });
  });

  describe("Link", () => {
    describe("Props", () => {
      describe("href", () => {
        test("should have correct content", () => {
          const {
            Link
          } = setup();
  
          expect(Link.getAttribute("href")).toEqual("mailto:alan.hadyk@gmail.com");
        });
      });
    });
  });

  describe("Text", () => {
    describe("should have correct content", () => {
      test("should have correct content", () => {
        const {
          Link
        } = setup();

        expect(Link.textContent).toEqual("alan.hadyk@gmail.com");
      });
    });
  });
});

interface Setup extends RenderResult {
  ContactSectionContainer: Element;
  FlexContainer: Element;
  Link: Element;
  Text: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <ContactSection />
  );

  const { queryAllByTestId } = utils || {};
  
  const ContactSectionContainer: Element = document.querySelectorAll("#contact")[0];
  const FlexContainer: Element = queryAllByTestId("FlexContainer")[0];
  const Link: Element = queryAllByTestId("Link")[0];
  const Text: Element = queryAllByTestId("EmailText")[0];

  return {
    ...utils,
    ContactSectionContainer,
    FlexContainer,
    Link,
    Text
  };
}
 