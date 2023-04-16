import { IconWithLabelVariant } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { TechStackVariant } from "components/molecules/TechStack/@types/TechStack";

export const mapTechStackVariantToIconsWithLabelsVariant: Record<
  TechStackVariant,
  IconWithLabelVariant
> = {
  [TechStackVariant.Blue]: IconWithLabelVariant.Blue,
  [TechStackVariant.Dark]: IconWithLabelVariant.Dark
};
