import React, { memo } from "react";

import Section from "<molecules>/Section";
import SkillsItem from "<molecules>/SkillsItem";

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
  },
  {
    iconName: "brandReact",
    label: "React"
  }
];

// TODO: Write tests when this section will be ready
const SkillsSection = (): JSX.Element => (
  <Section
    id="skills"
    title="Skills, Technology & Tools"
  >
    <SkillsItem
      iconsWithLabels={iconsWithLabels}
      title="Languages"
    />
  </Section>
);

export default memo(SkillsSection);
