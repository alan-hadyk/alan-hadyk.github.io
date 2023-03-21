import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";

const iconsWithLabels: IIconWithLabelProps[] = [
  {
    iconName: IconStaticName.Jenkins,
    label: "Jenkins"
  },
  {
    iconName: IconStaticName.Buildkite,
    label: "Buildkite"
  },
  {
    iconName: IconStaticName.Bamboo,
    label: "Bamboo"
  },
  {
    iconName: IconStaticName.GitHub,
    label: "GitHub Actions"
  },
  {
    iconName: IconStaticName.GitHub,
    label: "GitHub Enterprise"
  },
  {
    iconName: IconStaticName.Docker,
    label: "Docker"
  },
  {
    iconName: IconStaticName.GitLab,
    label: "GitLab"
  },
  {
    iconName: IconStaticName.Stash,
    label: "Stash"
  }
];

export const cicdCategory = {
  iconsWithLabels,
  title: "CI / CD"
};
