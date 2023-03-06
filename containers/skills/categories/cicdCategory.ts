import { IIconWithLabelProps } from "components/molecules/@types/IconWithLabel";

const iconsWithLabels: IIconWithLabelProps[] = [
  {
    iconName: "jenkins",
    label: "Jenkins"
  },
  {
    iconName: "buildkite",
    label: "Buildkite"
  },
  {
    iconName: "bamboo",
    label: "Bamboo"
  },
  {
    iconName: "github",
    label: "GitHub Actions"
  },
  {
    iconName: "github",
    label: "GitHub Enterprise"
  },
  {
    iconName: "docker",
    label: "Docker"
  },
  {
    iconName: "gitlab",
    label: "GitLab"
  },
  {
    iconName: "stash",
    label: "Stash"
  }
];

export const cicdCategory = {
  iconsWithLabels,
  title: "CI / CD"
};
