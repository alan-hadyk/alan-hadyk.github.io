import { IconWithLabelProps } from "<molecules>/__typings__/IconWithLabel.d.ts";

import { ButtonProps } from "<molecules>/__typings__/Button.d.ts";

export interface ProjectDescriptionProps {
  codeSandboxLink?: string;
  description: string;
  iconsWithLabels: IconWithLabelProps[];
  projectLink?: string;
  size: ButtonProps["size"];
  title: string;
}
