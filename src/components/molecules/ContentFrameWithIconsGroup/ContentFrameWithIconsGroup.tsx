import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import { Responsive } from "@app/components/layout/Responsive/Responsive";
import { IContentFrameWithIconsGroupProps } from "@app/components/molecules/ContentFrameWithIconsGroup/@types/ContentFrameWithIconsGroup";
import { contentFrameWithIconsGroupDefaultThemeClasses } from "@app/components/molecules/ContentFrameWithIconsGroup/styles";
import { ContentFrameWithIconsItems } from "@app/components/molecules/ContentFrameWithIconsItems/ContentFrameWithIconsItems";

export const ContentFrameWithIconsGroup: React.FC<
  IContentFrameWithIconsGroupProps
> = ({ columnCount, device, items }) => {
  if (device === Device.Mobile) {
    return (
      <Responsive devices={[Device.Mobile]}>
        <ContentFrameWithIconsItems device={device} items={items} />
      </Responsive>
    );
  }

  return device ? (
    <Responsive devices={[device]}>
      <LayoutContainer
        themeClasses={{
          ...contentFrameWithIconsGroupDefaultThemeClasses.wrapper,
          columns: columnCount,
        }}
      >
        <ContentFrameWithIconsItems device={device} items={items} />
      </LayoutContainer>
    </Responsive>
  ) : (
    <ContentFrameWithIconsItems device={device} items={items} />
  );
};
