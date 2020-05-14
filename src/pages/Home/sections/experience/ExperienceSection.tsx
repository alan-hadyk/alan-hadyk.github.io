import React, { memo } from "react";

import Section from "<molecules>/Section";
import CompanyDescription from "<organisms>/CompanyDescription";

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

const ExperienceSection = (): JSX.Element => (
  <Section
    id="experience"
    title="Experience"
  >
    <CompanyDescription
      date="August 2018 to present"
      iconsWithLabels={iconsWithLabels}
      responsibilites={[
        <span key="create-scalable"><strong>Create</strong> scalable and sane front-end architecture</span>, 
        "Orchestrate and direct collaborative team operational objectives for front-end layer of an application designed to manage payment systems"
      ]}
      title="Front end developer"
    />
  </Section>
);

export default memo(ExperienceSection);
