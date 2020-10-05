import React, { memo } from "react";

import Section from "<molecules>/Section";
import Project from "<organisms>/Project";

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

// TODO: Write tests when this section will be ready
const PortfolioSection = (): JSX.Element => (
  <Section
    dataTestId="PortfolioSection"
    dataCy="Portfolio"
    id="portfolio"
    marginBottom="spacing12"
    title="Portfolio"
  >
    <Project
      title="Roland tb 303"
      iconsWithLabels={iconsWithLabels}
      projectIcon="react"
      description="A tribute to an iconic bass synthesizer released by Roland Corporation in 1981."
    />
  </Section>
);

export default memo(PortfolioSection);
