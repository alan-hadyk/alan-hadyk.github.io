import React from "react";
import { RenderResult } from "@testing-library/react";

import ExperienceSection from "<pages>/Home/sections/experience/ExperienceSection";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("pages / Home / sections / experience / ExperienceSection", () => {
  test("should have correct structure", () => {
    const {
      CompanyDiH,
      CompanyOmise,
      CompanyPersonallyEmployed,
      CompanySAP,
      CompanyShiji,
      ExperienceSectionContainer
    } = setup();

    expect(ExperienceSectionContainer.children[1]).toEqual(CompanyOmise);
    expect(ExperienceSectionContainer.children[2]).toEqual(CompanyShiji);
    expect(ExperienceSectionContainer.children[3]).toEqual(CompanySAP);
    expect(ExperienceSectionContainer.children[4]).toEqual(CompanyDiH);
    expect(ExperienceSectionContainer.children[5]).toEqual(CompanyPersonallyEmployed);
  });

  describe("ExperienceSectionContainer", () => {
    describe("Props", () => {
      describe("title", () => {
        test("should have Experience", () => {
          const {
            ExperienceSectionContainer
          } = setup();
  
          expect(ExperienceSectionContainer.children[0].children[0].textContent).toEqual("Experience");
        });
      });
    });
  });
  
});

interface Setup extends RenderResult {
  CompanyDiH: Element;
  CompanyOmise: Element;
  CompanyPersonallyEmployed: Element;
  CompanySAP: Element;
  CompanyShiji: Element;
  ExperienceSectionContainer: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <ExperienceSection />
  );

  const { queryAllByTestId } = utils || {};
  
  const CompanyDiH: Element = queryAllByTestId("CompanyDiH")[0];
  const CompanyOmise: Element = queryAllByTestId("CompanyOmise")[0];
  const CompanyPersonallyEmployed: Element = queryAllByTestId("CompanyPersonallyEmployed")[0];
  const CompanySAP: Element = queryAllByTestId("CompanySAP")[0];
  const CompanyShiji: Element = queryAllByTestId("CompanyShiji")[0];
  const ExperienceSectionContainer: Element = document.querySelectorAll("#experience")[0];

  return {
    ...utils,
    CompanyDiH,
    CompanyOmise,
    CompanyPersonallyEmployed,
    CompanySAP,
    CompanyShiji,
    ExperienceSectionContainer
  };
}
 