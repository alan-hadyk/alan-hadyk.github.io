import React, { memo } from "react";

import Section from "<molecules>/Section";
import ProjectDescription from "<molecules>/ProjectDescription";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

const iconsWithLabels: IconWithLabelProps[] = [
  {
    iconName: "brandReact",
    label: "React"
  },
  {
    iconName: "brandJS",
    label: "Javascript"
  },
  {
    iconName: "brandWebpack",
    label: "Webpack"
  }
];

const PortfolioSection = (): JSX.Element => (
  <Section
    id="portfolio"
    title="Portfolio"
  >
    <ProjectDescription
      title="Roland tb 303"
      iconsWithLabels={iconsWithLabels}
      description="A tribute to an iconic bass synthesizer released by Roland Corporation in 1981."
    />
  </Section>
);

export default memo(PortfolioSection);
