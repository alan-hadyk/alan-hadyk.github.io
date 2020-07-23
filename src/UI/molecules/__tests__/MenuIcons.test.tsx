import React from "react";
import { RenderResult } from "@testing-library/react";

import MenuIcons from "<molecules>/MenuIcons";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("molecules / MenuIcons", () => {
  test("should have correct structure", () => {
    const {
      IconContainers,
      Icons,
      LinkWithIcons
    } = setup();

    LinkWithIcons.forEach((LinkWithIcon, index) => {
      expect(IconContainers[index].children[0]).toEqual(Icons[index]);
    });
  });

  describe("LinkWithIcons", () => {
    describe("Link", () => {
      describe("Props", () => {
        describe("href", () => { 
          test("should have correct href", () => {
            const { LinkWithIcons } = setup();
  
            expect(LinkWithIcons[0].getAttribute("href")).toEqual("https://github.com/alan-hadyk");
            expect(LinkWithIcons[1].getAttribute("href")).toEqual("https://codesandbox.io/u/alan-hadyk");
            expect(LinkWithIcons[2].getAttribute("href")).toEqual("https://www.linkedin.com/in/alan-hadyk-78738099/");
          });
        });

        describe("isExternal", () => { 
          test("should have isExternal set to true", () => {
            const { LinkWithIcons } = setup();

            LinkWithIcons.forEach(LinkWithIcon => {
              expect(LinkWithIcon.getAttribute("target")).toEqual("_blank");
            });
          });
        });
      });
    });

    describe("Icon", () => {
      test("there should be 3 icons", () => {
        const { Icons } = setup();
  
        expect(Icons.length).toEqual(3);
      });
  
      test("icons should render correct SVGs", () => {
        const { Icons } = setup();
  
        expect(Icons[0].textContent).toEqual("Icon-GitHub.svg");
        expect(Icons[1].textContent).toEqual("Icon-CodeSandbox.svg");
        expect(Icons[2].textContent).toEqual("Icon-LinkedIn.svg");
      });
  
      describe("Props", () => {
        describe("height", () => { 
          test("should have 4.8rem", () => {
            const { IconContainers } = setup();
  
            IconContainers.forEach(IconContainer => {
              expect(IconContainer).toHaveStyleRule("height", "4.8rem");
            });
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  IconContainers: Element[];
  Icons: NodeListOf<SVGSVGElement>;
  LinkWithIcons: Element[];
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <MenuIcons />
  );

  const {
    queryAllByTestId
  } = utils || {};

  const IconContainers: Element[] = queryAllByTestId("IconContainer");
  const Icons: NodeListOf<SVGSVGElement> = document.querySelectorAll("svg");
  const LinkWithIcons = queryAllByTestId("LinkWithIcon");

  return {
    ...utils,
    IconContainers,
    Icons,
    LinkWithIcons
  };
}
