import React from "react";
import { RenderResult } from "@testing-library/react";

import ExperienceDescription from "<organisms>/ExperienceDescription";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  ExperienceDescriptionProps
} from "<organisms>/__typings__/ExperienceDescription.d.ts";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

describe("organisms / ExperienceDescription", () => {
  test("should have correct structure", () => {
    const {
      DateIcon,
      DateSpacingContainer,
      ExperienceDescriptionContainer,
      IconsWithLabels,
      IconsWithLabelsSpacingContainer,
      ResponsibilitiesListSpacingContainer,
      ResponsibilitiesSpacingContainer,
      TechStackSpacingContainer,
      Texts,
      UnorderedList
    } = setup();

    expect(ExperienceDescriptionContainer.children[0]).toEqual(Texts[0]);
    expect(ExperienceDescriptionContainer.children[1]).toEqual(DateSpacingContainer);
    expect(ExperienceDescriptionContainer.children[2]).toEqual(TechStackSpacingContainer);
    expect(ExperienceDescriptionContainer.children[3]).toEqual(ResponsibilitiesSpacingContainer);

    expect(DateSpacingContainer.children[0]).toEqual(DateIcon);

    expect(TechStackSpacingContainer.children[0]).toEqual(Texts[1]);
    expect(TechStackSpacingContainer.children[1]).toEqual(IconsWithLabelsSpacingContainer);
    expect(IconsWithLabelsSpacingContainer.children[0]).toEqual(IconsWithLabels);

    expect(ResponsibilitiesSpacingContainer.children[0]).toEqual(Texts[2]);
    expect(ResponsibilitiesSpacingContainer.children[1]).toEqual(ResponsibilitiesListSpacingContainer);
    expect(ResponsibilitiesListSpacingContainer.children[0]).toEqual(UnorderedList);
  });

  describe("Texts", () => { 
    describe("Texts[0] (title)", () => {
      test("should render textContent equal to title prop", () => {
        const { Texts } = setup({
          title: "Self employed"
        });
  
        expect(Texts[0].textContent).toEqual("Self employed");
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
          test("should have 36px", () => {
            const { Texts } = setup();
      
            expect(Texts[0]).toHaveStyleRule("font-size", "36px");
          });
        });

        describe("lineHeight", () => {
          test("should have 3.6rem", () => {
            const { Texts } = setup();
      
            expect(Texts[0]).toHaveStyleRule("line-height", "3.6rem");
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

    describe("Texts[1] (tech stack)", () => {
      test("should render textContent - Tech stack", () => {
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

    test("should have correct content passed via label props", () => {
      const { LabelTexts } = setup({
        iconsWithLabels
      });

      expect(LabelTexts[0].textContent).toEqual("Javascript");
      expect(LabelTexts[1].textContent).toEqual("React");
    });

    describe("Props", () => {
      describe("size - large", () => {
        describe("FlexContainer - gap", () => {    
          test("should have 2.8rem to all children except the first one", () => {
            const { IconsWithLabels } = setup();
            
            expect(IconsWithLabels).toHaveStyleRule("padding-left", "2.8rem", {
              modifier: "& > *"
            });
            expect(IconsWithLabels).toHaveStyleRule("padding-left", "0", {
              modifier: "& > *:first-child"
            });
          });
        });

        describe("IconContainer - height", () => {
          test("should have 4rem", () => {
            const { IconContainers } = setup();
    
            expect(IconContainers[0]).toHaveStyleRule("height", "4rem");
            expect(IconContainers[1]).toHaveStyleRule("height", "4rem");
          });
        });

        describe("IconWithLabelSpacingContainer - paddingRight", () => {
          test("should have 1.2rem", () => {
            const { IconWithLabelSpacingContainers } = setup();
    
            expect(IconWithLabelSpacingContainers[0]).toHaveStyleRule("padding-right", "1.2rem");
            expect(IconWithLabelSpacingContainers[1]).toHaveStyleRule("padding-right", "1.2rem");
          });
        });

        describe("LabelTexts - fontSize", () => {  
          test("should have 24px", () => {
            const { LabelTexts } = setup();
  
            expect(LabelTexts[0]).toHaveStyleRule("font-size", "24px");
            expect(LabelTexts[1]).toHaveStyleRule("font-size", "24px");
          });
        });
      });

      describe("position - horizontal", () => {
        describe("FlexContainer - flexFlow", () => {      
          test("should have row nowrap", () => {
            const { IconsWithLabels } = setup();
  
            expect(IconsWithLabels).toHaveStyleRule("flex-flow", "row nowrap");
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
          describe("should have large", () => {     
            describe("height", () => {      
              test("should have 5.6rem", () => {
                const { Buttons } = setup();
          
                expect(Buttons[0]).toHaveStyleRule("height", "5.6rem");
              });
            });
          });
        });

        describe("type", () => {
          describe("should have primary", () => {       
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
          describe("should have large", () => { 
            describe("height", () => {      
              test("should have 5.6rem", () => {
                const { Buttons } = setup();
          
                expect(Buttons[1]).toHaveStyleRule("height", "5.6rem");
              });
            });
          });
        });

        describe("type", () => {
          describe("should have secondary", () => {       
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
  DateIcon: Element;
  DateSpacingContainer: Element;
  ExperienceDescriptionContainer: Element;
  IconsWithLabels: Element;
  IconsWithLabelsSpacingContainer: Element;
  ResponsibilitiesListSpacingContainer: Element;
  ResponsibilitiesSpacingContainer: Element;
  TechStackSpacingContainer: Element;
  Texts: Element[];
  UnorderedList: Element;
}

type ExperienceDescriptionTestProps = Partial<ExperienceDescriptionProps>;

function setup(addedProps?: ExperienceDescriptionTestProps): Setup {
  const responsibilites: ExperienceDescriptionProps["responsibilites"] = [
    "Create> scalable and sane front-end architecture", 
    "Orchestrate and direct collaborative team operational objectives for front-end layer of an application designed to manage payment systems"
  ];

  const iconsWithLabels: ExperienceDescriptionProps["iconsWithLabels"] = [
    {
      iconName: "brandJS",
      label: "Javascript"
    },
    {
      iconName: "brandReact",
      label: "React"
    }
  ];

  const props: ExperienceDescriptionProps = {
    date: "August 2018 to present",
    iconsWithLabels,
    responsibilites,
    title: "Front end developer",
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(
    <ExperienceDescription {...props} />
  );

  const { queryAllByTestId } = utils || {};
  
  const DateIcon: Element = queryAllByTestId("IconWithLabel")[0];
  const DateSpacingContainer: Element = queryAllByTestId("DateSpacingContainer")[0];
  const ExperienceDescriptionContainer: Element = queryAllByTestId("ExperienceDescription")[0];
  const IconsWithLabels: Element = queryAllByTestId("IconsWithLabels")[0];
  const IconsWithLabelsSpacingContainer: Element = queryAllByTestId("IconsWithLabelsSpacingContainer")[0];
  const ResponsibilitiesListSpacingContainer: Element = queryAllByTestId("ResponsibilitiesListSpacingContainer")[0];
  const ResponsibilitiesSpacingContainer: Element = queryAllByTestId("ResponsibilitiesSpacingContainer")[0];
  const TechStackSpacingContainer: Element = queryAllByTestId("TechStackSpacingContainer")[0];
  const Texts: Element[] = queryAllByTestId("Text");
  const UnorderedList: Element = queryAllByTestId("UnorderedList")[0];

  return {
    ...utils,
    DateIcon,
    DateSpacingContainer,
    ExperienceDescriptionContainer,
    IconsWithLabels,
    IconsWithLabelsSpacingContainer,
    ResponsibilitiesListSpacingContainer,
    ResponsibilitiesSpacingContainer,
    TechStackSpacingContainer,
    Texts,
    UnorderedList
  };
}
 