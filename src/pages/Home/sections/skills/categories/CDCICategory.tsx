import React from "react";

import SkillsItem from "<molecules>/SkillsItem";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

const iconsWithLabels: IconWithLabelProps[] = [
  {
    iconName: "brandJenkins",
    label: "Jenkins"
  },
  {
    iconName: "brandBuildkite",
    label: "Buildkite"
  },
  {
    iconName: "brandBamboo",
    label: "Bamboo"
  },
  {
    iconName: "brandGithub",
    label: "GitHub Actions"
  },
  {
    iconName: "brandGithub",
    label: "GitHub Enterprise"
  },
  {
    iconName: "brandDocker",
    label: "Docker"
  },
  {
    iconName: "brandGitlab",
    label: "GitLab"
  },
  {
    iconName: "brandStash",
    label: "Stash"
  }
];

const CDCICategory = (): JSX.Element => (
  <SkillsItem
    iconsWithLabels={iconsWithLabels}
    title="CD / CI"
  />
);

export default CDCICategory;
