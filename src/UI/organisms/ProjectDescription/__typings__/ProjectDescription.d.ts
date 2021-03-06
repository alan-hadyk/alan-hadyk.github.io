import { IconWithLabelProps } from "UI/molecules/__typings__/IconWithLabel";

import { ButtonProps } from "UI/molecules/__typings__/Button";

export interface ProjectDescriptionProps {
  codeSandboxLink?: string;
  description: string;
  iconsWithLabels: IconWithLabelProps[];
  projectLink?: string;
  size: ButtonProps["size"];
  title: string;
}
