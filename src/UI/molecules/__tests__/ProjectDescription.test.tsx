import React from "react";
import { RenderResult } from "@testing-library/react";

import ProjectDescription from "<molecules>/ProjectDescription";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  ProjectDescriptionProps
} from "<molecules>/__typings__/ProjectDescription.d.ts";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

describe("molecules / ProjectDescription", () => {
  test("should have correct structure", () => {
    const {
      Buttons,
      ButtonsSpacingContainer,
      IconsWithLabels,
      IconsWithLabelsSpacingContainer,
      ProjectDescriptionContainer,
      Texts,
      TitleWithDescriptionSpacingContainer,
      UsedTechnologiesSpacingContainer
    } = setup();

    expect(ProjectDescriptionContainer.children[0]).toEqual(Texts[0]);
    expect(ProjectDescriptionContainer.children[1]).toEqual(TitleWithDescriptionSpacingContainer);
    expect(ProjectDescriptionContainer.children[2]).toEqual(UsedTechnologiesSpacingContainer);
    expect(ProjectDescriptionContainer.children[3]).toEqual(Buttons[0]);
    expect(ProjectDescriptionContainer.children[4]).toEqual(ButtonsSpacingContainer);

    expect(TitleWithDescriptionSpacingContainer.children[0]).toEqual(Texts[1]);
    expect(UsedTechnologiesSpacingContainer.children[0]).toEqual(Texts[2]);
    expect(UsedTechnologiesSpacingContainer.children[1]).toEqual(IconsWithLabelsSpacingContainer);
    expect(IconsWithLabelsSpacingContainer.children[0]).toEqual(IconsWithLabels);
    expect(ButtonsSpacingContainer.children[0]).toEqual(Buttons[1]);
  });

  describe("Texts", () => { 
    describe("Text[0]", () => {
      test("should render textContent equal to title prop", () => {
        const { Texts } = setup({
          title: "New project"
        });
  
        expect(Texts[0].textContent).toEqual("New project");
      });

      describe("Props", () => {
        describe("color", () => {
          test("should have #fff", () => {
            const { Texts } = setup();
      
            expect(Texts[0]).toHaveStyleRule("color", "#fff");
          });
        });
  
        describe("fontFamily", () => {
          test("should have ExanModifiedRegular, monospace", () => {
            const { Texts } = setup();

            expect(Texts[0]).toHaveStyleRule("font-family", "ExanModifiedRegular,monospace");
          });
        });
  
        describe("fontSize", () => {
          test("should have 48px", () => {
            const { Texts } = setup();
      
            expect(Texts[0]).toHaveStyleRule("font-size", "48px");
          });
        });

        describe("lineHeight", () => {
          test("should have 4.8rem", () => {
            const { Texts } = setup();
      
            expect(Texts[0]).toHaveStyleRule("line-height", "4.8rem");
          });
        });

        describe("textTransform", () => {
          test("should have uppercase", () => {
            const { Texts } = setup();
      
            expect(Texts[0]).toHaveStyleRule("text-transform", "uppercase");
          });
        });
      });
    });

    describe("Text[1]", () => {
      test("should render textContent equal to description prop", () => {
        const { Texts } = setup({
          description: "Project description"
        });
  
        expect(Texts[1].textContent).toEqual("Project description");
      });

      describe("Props", () => {
        describe("color", () => {
          test("should have #78b0b5", () => {
            const { Texts } = setup();
      
            expect(Texts[1]).toHaveStyleRule("color", "#78b0b5");
          });
        });
  
        describe("font-family", () => {
          test("should have 'Anonymous Pro',monospace", () => {
            const { Texts } = setup();

            expect(Texts[1]).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
          });
        });

        describe("fontSize", () => {
          test("should have 24px", () => {
            const { Texts } = setup();
      
            expect(Texts[1]).toHaveStyleRule("font-size", "24px");
          });
        });

        describe("lineHeight", () => {
          test("should have 3.2rem", () => {
            const { Texts } = setup();
      
            expect(Texts[1]).toHaveStyleRule("line-height", "3.2rem");
          });
        });
      });
    });

    describe("Text[2]", () => {
      test("should have correct content", () => {
        const { Texts } = setup();
  
        expect(Texts[2].textContent).toEqual("Made with:");
      });

      describe("Props", () => {
        describe("color", () => {
          test("should have #bcd8db", () => {
            const { Texts } = setup();
      
            expect(Texts[2]).toHaveStyleRule("color", "#bcd8db");
          });
        });
  
        describe("fontFamily", () => {
          test("should have 'Anonymous Pro',monospace", () => {
            const { Texts } = setup();

            expect(Texts[2]).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
          });
        });

        describe("fontSize", () => {
          test("should have 24px", () => {
            const { Texts } = setup();
      
            expect(Texts[2]).toHaveStyleRule("font-size", "24px");
          });
        });

        describe("fontWeight", () => {
          test("should have 700", () => {
            const { Texts } = setup();
      
            expect(Texts[2]).toHaveStyleRule("font-weight", "700");
          });
        });

        describe("lineHeight", () => {
          test("should have 4rem", () => {
            const { Texts } = setup();
      
            expect(Texts[2]).toHaveStyleRule("line-height", "4rem");
          });
        });
      });
    });
  });

  describe("IconsWithLabels", () => {
    const iconsWithLabels: IconWithLabelProps[] = [
      {
        iconName: "brandJS",
        label: "Javascript"
      },
      {
        iconName: "brandReact",
        label: "React"
      }
    ];

    describe("Props", () => {
      describe("flexFlow", () => {      
        test("should have row nowrap", () => {
          const { IconsWithLabels } = setup();

          expect(IconsWithLabels).toHaveStyleRule("flex-flow", "row nowrap");
        });
      });
    });

    describe("Icon", () => {
      test("there should be correct number of icons", () => {
        const { Icons } = setup({
          iconsWithLabels
        });
  
        expect(Icons.length).toEqual(4);
      });
  
      test("icons should render correct SVGs", () => {
        const { Icons } = setup({
          iconsWithLabels
        });
  
        expect(Icons[0].textContent).toEqual("Brand-JS.svg");
        expect(Icons[1].textContent).toEqual("Brand-React.svg");
      });
    });

    describe("Text", () => {
      describe("Props", () => {
        describe("label", () => {
          describe("should have correct content passed via label props", () => {
            const { LabelTexts } = setup({
              iconsWithLabels
            });

            expect(LabelTexts[0].textContent).toEqual("Javascript");
            expect(LabelTexts[1].textContent).toEqual("React");
          });
        });

        describe("fontSize", () => {  
          test("should have 24px", () => {
            const { LabelTexts } = setup();
  
            expect(LabelTexts[0]).toHaveStyleRule("font-size", "24px");
            expect(LabelTexts[1]).toHaveStyleRule("font-size", "24px");
          });
        });
      });
    });
  });
  
  describe("Buttons", () => {
    describe("Buttons[0]", () => {      
      test("should have correct icon and text", () => {
        const { Buttons } = setup();
  
        const ButtonsText = Buttons[0].querySelector("[font-family=\"Exan\"]");
        const ButtonsIcon = Buttons[0].querySelector("svg");
  
        expect(ButtonsText.textContent).toEqual("Launch project");
        expect(ButtonsIcon.textContent).toEqual("Btn-ExternalLink.svg");
      });
  
      describe("Props", () => {
        describe("size", () => {
          describe("should have correct height for large size", () => {     
            describe("height", () => {      
              test("should have 5.6rem", () => {
                const { Buttons } = setup();
          
                expect(Buttons[0]).toHaveStyleRule("height", "5.6rem");
              });
            });
          });
        });

        describe("type", () => {
          describe("should have correct background-color for type primary", () => {       
            describe("background-color", () => {      
              test("should have #2b595e", () => {
                const { Buttons } = setup();
          
                expect(Buttons[0]).toHaveStyleRule("background-color", "#2b595e");
              });
            });
          });
        });
      });
    });

    describe("Buttons[1]", () => {      
      test("should have correct icon and text", () => {
        const { Buttons } = setup();
  
        const ButtonsText = Buttons[1].querySelector("[font-family=\"Exan\"]");
        const ButtonsIcon = Buttons[1].querySelector("svg");
  
        expect(ButtonsText.textContent).toEqual("Open in codesandbox");
        expect(ButtonsIcon.textContent).toEqual("Btn-CodeSandbox.svg");
      });
  
      describe("Props", () => {
        describe("size", () => {
          describe("should have correct height for large size", () => { 
            describe("height", () => {      
              test("should have 5.6rem", () => {
                const { Buttons } = setup();
          
                expect(Buttons[1]).toHaveStyleRule("height", "5.6rem");
              });
            });
          });
        });

        describe("type", () => {
          describe("should have correct background-color for type secondary", () => {       
            describe("background-color", () => {      
              test("should have transparent", () => {
                const { Buttons } = setup();
          
                expect(Buttons[1]).toHaveStyleRule("background-color", "transparent");
              });
            });
          });
        });
      });
    });
  });

  describe("SpacingContainers", () => { 
    describe("TitleWithDescriptionSpacingContainer", () => { 
      describe("Props", () => {
        describe("marginBottom", () => {      
          test("should have 4rem", () => {
            const { TitleWithDescriptionSpacingContainer } = setup();

            expect(TitleWithDescriptionSpacingContainer).toHaveStyleRule("margin-bottom", "4rem");
          });
        });

        describe("marginTop", () => {      
          test("should have 1.6rem", () => {
            const { TitleWithDescriptionSpacingContainer } = setup();

            expect(TitleWithDescriptionSpacingContainer).toHaveStyleRule("margin-top", "1.6rem");
          });
        });
      });
    });

    describe("UsedTechnologiesSpacingContainer", () => { 
      describe("Props", () => {
        describe("marginBottom", () => {      
          test("should have 4rem", () => {
            const { UsedTechnologiesSpacingContainer } = setup();

            expect(UsedTechnologiesSpacingContainer).toHaveStyleRule("margin-bottom", "4rem");
          });
        });
      });
    });

    describe("IconsWithLabelsSpacingContainer", () => { 
      describe("Props", () => {
        describe("marginTop", () => {      
          test("should have .8rem", () => {
            const { IconsWithLabelsSpacingContainer } = setup();

            expect(IconsWithLabelsSpacingContainer).toHaveStyleRule("margin-top", ".8rem");
          });
        });
      });
    });

    describe("ButtonsSpacingContainer", () => { 
      describe("Props", () => {
        describe("marginTop", () => {      
          test("should have 1.6rem", () => {
            const { ButtonsSpacingContainer } = setup();

            expect(ButtonsSpacingContainer).toHaveStyleRule("margin-top", "1.6rem");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Buttons: NodeListOf<HTMLButtonElement>;
  ButtonsSpacingContainer: Element;
  Icons: NodeListOf<SVGSVGElement>;
  IconsWithLabels: Element;
  IconsWithLabelsSpacingContainer: Element;
  LabelTexts: Element[];
  ProjectDescriptionContainer: Element;
  Texts: Element[];
  TitleWithDescriptionSpacingContainer: Element;
  UsedTechnologiesSpacingContainer: Element;
}

type ProjectDescriptionTestProps = Partial<ProjectDescriptionProps>;

function setup(addedProps?: ProjectDescriptionTestProps): Setup {
  const iconsWithLabels: IconWithLabelProps[] = [
    {
      iconName: "brandJS",
      label: "Javascript"
    },
    {
      iconName: "brandReact",
      label: "React"
    }
  ];

  const props: ProjectDescriptionProps = {
    description: "Lorem ipsum dolor sit amet",
    iconsWithLabels,
    title: "Roland 303",
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(
    <ProjectDescription {...props} />
  );

  const { queryAllByTestId } = utils || {};

  const Buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll("button");
  const ButtonsSpacingContainer: Element = queryAllByTestId("ButtonsSpacingContainer")[0];
  const Icons: NodeListOf<SVGSVGElement> = document.querySelectorAll("svg");
  const IconsWithLabels: Element = queryAllByTestId("IconsWithLabels")[0];
  const IconsWithLabelsSpacingContainer: Element = queryAllByTestId("IconsWithLabelsSpacingContainer")[0];
  const LabelTexts: Element[] = queryAllByTestId("LabelText");
  const ProjectDescriptionContainer: Element = queryAllByTestId("ProjectDescription")[0];
  const Texts: Element[] = queryAllByTestId("Text");
  const TitleWithDescriptionSpacingContainer: Element = queryAllByTestId("TitleWithDescriptionSpacingContainer")[0];
  const UsedTechnologiesSpacingContainer: Element = queryAllByTestId("UsedTechnologiesSpacingContainer")[0];


  return {
    ...utils,
    Buttons,
    ButtonsSpacingContainer,
    Icons,
    IconsWithLabels,
    IconsWithLabelsSpacingContainer,
    LabelTexts,
    ProjectDescriptionContainer,
    Texts,
    TitleWithDescriptionSpacingContainer,
    UsedTechnologiesSpacingContainer
  };
}
 