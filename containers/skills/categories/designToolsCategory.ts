import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";

const iconsWithLabels: IIconWithLabelProps[] = [
  {
    iconName: IconStaticName.Photoshop,
    label: "Photoshop"
  },
  {
    iconName: IconStaticName.Sketch,
    label: "Sketch"
  },
  {
    iconName: IconStaticName.Figma,
    label: "Figma"
  },
  {
    iconName: IconStaticName.CorelDraw,
    label: "CorelDRAW"
  },
  {
    iconName: IconStaticName.AfterEffects,
    label: "After Effects"
  },
  {
    iconName: IconStaticName.Zeplin,
    label: "Zeplin"
  },
  {
    iconName: IconStaticName.Gallery,
    label: "Gallery"
  }
];

export const designToolsCategory = {
  iconsWithLabels,
  title: "Design Tools"
};
