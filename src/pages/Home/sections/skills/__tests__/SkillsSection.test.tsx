import React from "react";
import { RenderResult } from "@testing-library/react";

import SkillsSection from "<pages>/Home/sections/skills/SkillsSection";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("pages / Home / sections / skills / SkillsSection", () => {
  test("should have correct structure", () => {
    const {
      Masonry,
      SkillsSectionContainer
    } = setup();

    expect(SkillsSectionContainer.children[4]).toEqual(Masonry);
  });

  describe("SkillsSectionContainer", () => {
    describe("Props", () => {
      describe("title", () => {
        test("should have Skills, Technology & Tools", () => {
          const {
            SkillsSectionContainer
          } = setup();
  
          expect(SkillsSectionContainer.children[0].children[0].textContent).toEqual("Skills, Technology & Tools");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Masonry: Element;
  SkillsSectionContainer: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <SkillsSection />
  );

  
  const Masonry: Element = document.querySelector("[role='grid']");
  const SkillsSectionContainer: Element = document.querySelectorAll("#skills")[0];

  return {
    ...utils,
    Masonry,
    SkillsSectionContainer
  };
}
 