import { IIconWithLabelProps } from "components/molecules/@types/IconWithLabel";

const iconsWithLabels: IIconWithLabelProps[] = [
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

export const cicdCategory = {
  iconsWithLabels,
  title: "CI / CD"
};
