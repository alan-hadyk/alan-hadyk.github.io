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

    expect(ContactSectionContainer.children[4]).toEqual(FlexContainer);
    expect(FlexContainer.children[0]).toEqual(Link);
    expect(Link.children[0]).toEqual(Text);
  });

  describe("ContactSectionContainer", () => {
    describe("Props", () => {
      describe("id", () => {	
        test("should equal contact", () => {	
          const { ContactSectionContainer } = setup();	

          expect(ContactSectionContainer.getAttribute("id")).toEqual("contact");	
        });	
      });	

      describe("title", () => {
        test("should have Contact", () => {
          const { ContactSectionContainer } = setup();
  
          expect(ContactSectionContainer.children[0].children[0].textContent).toEqual("Contact");
        });
      });
    });
  });

  describe("FlexContainer", () => {
    describe("Props", () => {
      describe("justifyContent", () => {
        test("should have center", () => {
          const {
            FlexContainer
          } = setup();
  
          expect(FlexContainer).toHaveStyleRule("justify-content", "center");
        });
      });
    });
  });

  describe("Link", () => {
    describe("Props", () => {
      describe("href", () => {
        test("should have mailto:alan.hadyk@gmail.com", () => {
          const { Link } = setup();
  
          expect(Link.getAttribute("href")).toEqual("mailto:alan.hadyk@gmail.com");
        });
      });

      describe("isHoverable", () => {
        describe("opacity", () => {      
          test("should have 1", () => {
            const { Link } = setup();
      
            expect(Link).toHaveStyleRule("opacity", "1", {
              modifier: "&:hover .line"
            });
          });
        });
    
        describe("visibility", () => {      
          test("should have visible", () => {
            const { Link } = setup();
      
            expect(Link).toHaveStyleRule("visibility", "visible", {
              modifier: "&:hover .line"
            });
          });
        });
    
        describe("width", () => {      
          test("should have 50%", () => {
            const { Link } = setup();
      
            expect(Link).toHaveStyleRule("width", "50%", {
              modifier: "&:hover .line"
            });
          });
        });
      });
    });
  });

  describe("Text", () => {
    test("should have content - alan.hadyk@gmail.com", () => {
      const { Text } = setup();

      expect(Text.textContent).toEqual("alan.hadyk@gmail.com");
    });

    describe("Props", () => {
      describe("color", () => {
        test("should have #78b0b5", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("color", "#78b0b5");
        });
      });

      describe("ellipsis", () => {
        describe("text-overflow", () => {
          test("should have ellipsis", () => {
            const { Text } = setup();
  
            expect(Text).toHaveStyleRule("text-overflow", "ellipsis");
          });
        });
  
        describe("overflow", () => {
          test("should have hidden", () => {
            const { Text } = setup();
  
            expect(Text).toHaveStyleRule("overflow", "hidden");
          });
        });
  
        describe("white-space", () => {
          test("should have nowrap", () => {
            const { Text } = setup();
  
            expect(Text).toHaveStyleRule("white-space", "nowrap");
          });
        });
      });

      describe("fontSize", () => {
        test("should have 28px", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("font-size", "28px");
        });
      });

      describe("isHoverable", () => {
        describe("color", () => {      
          test("should have #fff when is hovered", () => {
            const { Text } = setup();
      
            expect(Text).toHaveStyleRule("color", "#fff", {
              modifier: "&:hover"
            });
          });
        });
      });

      describe("paddingBottom", () => {
        test("should have 1.6rem", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("padding-bottom", "1.6rem");
        });
      });

      describe("textAlign", () => {
        test("should have center", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("text-align", "center");
        });
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
  
  const ContactSectionContainer: Element = queryAllByTestId("ContactSection")[0];
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
 