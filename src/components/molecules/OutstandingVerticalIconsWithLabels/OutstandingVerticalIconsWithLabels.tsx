import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  IconWithLabelSize,
  IconWithLabelVariant,
} from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { IconWithLabel } from "@app/components/molecules/IconWithLabel/IconWithLabel";
import { IOutstandingVerticalIconsWithLabelsProps } from "@app/components/molecules/OutstandingVerticalIconsWithLabels/@types/OutstandingVerticalIconsWithLabels";

const OutstandingVerticalIconsWithLabels: React.FC<
  IOutstandingVerticalIconsWithLabelsProps
> = ({ iconsWithLabels, themeClasses }) => (
  <LayoutContainer themeClasses={themeClasses}>
    {iconsWithLabels.map((icon, index) => (
      <IconWithLabel
        {...icon}
        isExternal
        key={icon.label + index}
        size={IconWithLabelSize.Medium}
        variant={IconWithLabelVariant.Dark}
      />
    ))}
  </LayoutContainer>
);

export { OutstandingVerticalIconsWithLabels };
