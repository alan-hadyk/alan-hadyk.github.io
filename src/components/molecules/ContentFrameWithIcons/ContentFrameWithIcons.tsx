import { IconsWithLabels } from "@app/components/molecules/IconsWithLabels/IconsWithLabels";
import { ContentFrame } from "@app/components/molecules/ContentFrame/ContentFrame";

import {
  IContentFrameWithIconsProps,
  ContentFrameWithIconsVariant,
} from "@app/components/molecules/ContentFrameWithIcons/@types/ContentFrameWithIcons";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { useContentFrameWithIconsThemeClasses } from "@app/components/molecules/ContentFrameWithIcons/hooks/useContentFrameWithIconsThemeClasses";
import { mapContentFrameWithIconsVariantToContentFrameProps } from "@app/components/molecules/ContentFrameWithIcons/config";
import { VerticalIconsWithLabels } from "@app/components/molecules/VerticalIconsWithLabels/VerticalIconsWithLabels";
import {
  IconWithLabelSize,
  IconWithLabelVariant,
} from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";

const ContentFrameWithIcons: React.FC<IContentFrameWithIconsProps> = ({
  iconsWithLabels,
  title,
  variant = ContentFrameWithIconsVariant.Full,
}) => {
  const { contentFrameWithIconsThemeClasses } =
    useContentFrameWithIconsThemeClasses({
      variant,
    });

  return (
    <ContentFrame
      title={title}
      themeClasses={contentFrameWithIconsThemeClasses.contentFrame}
      {...mapContentFrameWithIconsVariantToContentFrameProps[variant]}
    >
      <LayoutContainer
        themeClasses={contentFrameWithIconsThemeClasses.iconsWrapper}
      >
        {variant === ContentFrameWithIconsVariant.Full ? (
          <VerticalIconsWithLabels
            iconsWithLabels={iconsWithLabels}
            themeClasses={contentFrameWithIconsThemeClasses.iconsWithLabels}
          />
        ) : (
          <IconsWithLabels
            iconsWithLabels={iconsWithLabels}
            size={IconWithLabelSize.Small}
            variant={IconWithLabelVariant.White}
            themeClasses={contentFrameWithIconsThemeClasses.iconsWithLabels}
          />
        )}
      </LayoutContainer>
    </ContentFrame>
  );
};

export { ContentFrameWithIcons };
