import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

export interface ProjectDescriptionProps {
  codeSandboxLink?: string;
  description: string;
  iconsWithLabels: IconWithLabelProps[];
  projectLink?: string;
  title: string;
}