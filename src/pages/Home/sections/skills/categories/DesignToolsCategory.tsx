import React from "react";

import SkillsItem from "<molecules>/SkillsItem";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

const iconsWithLabels: IconWithLabelProps[] = [
  {
    iconName: "brandPhotoshop",
    label: "Photoshop"
  },
  {
    iconName: "brandSketch",
    label: "Sketch"
  },
  {
    iconName: "brandFigma",
    label: "Figma"
  },
  {
    iconName: "brandCorel",
    label: "CorelDRAW"
  },
  {
    iconName: "brandAfterEffects",
    label: "After Effects"
  },
  {
    iconName: "brandZeplin",
    label: "Zeplin"
  },
  {
    iconName: "brandGallery",
    label: "Gallery"
  }
];

const DesignToolsCategory = (): JSX.Element => (
  <SkillsItem
    iconsWithLabels={iconsWithLabels}
    title="Design tools"
  />
);

export default DesignToolsCategory;
