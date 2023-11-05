import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { ContentFrameWithIconsVariant } from "@app/components/molecules/ContentFrameWithIcons/@types/ContentFrameWithIcons";
import { IContentFrameWithIconsItemsProps } from "@app/components/molecules/ContentFrameWithIconsItems/@types/ContentFrameWithIconsItems";
import { ContentFrameWithIcons } from "@app/components/molecules/ContentFrameWithIcons/ContentFrameWithIcons";

export const ContentFrameWithIconsItems: React.FC<
  IContentFrameWithIconsItemsProps
> = ({ device, items }) => (
  <>
    {items.map(({ iconsWithLabels, title }) => (
      <LayoutContainer
        key={title}
        themeClasses={{
          marginBottom: device ? "mb-32" : "mb-24",
        }}
      >
        <ContentFrameWithIcons
          iconsWithLabels={iconsWithLabels}
          title={title}
          variant={
            device
              ? ContentFrameWithIconsVariant.Full
              : ContentFrameWithIconsVariant.Limited
          }
        />
      </LayoutContainer>
    ))}
  </>
);
