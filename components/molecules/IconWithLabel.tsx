import { Icon } from "components/atoms/Icon";
import { Text } from "components/atoms/Text";

import {
  IIconWithLabelProps,
  IMapSizeToIconHeight,
  IMapSizeToTextFontSize
} from "components/molecules/@types/IconWithLabel";

import { isIE11 } from "helpers/browser/isIE11";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { ITextProps } from "components/atoms/@types/Text";
import { Link } from "components/molecules/Link";

const mapSizeToIconHeight: IMapSizeToIconHeight = {
  large: "h-40",
  medium: "h-32",
  small: "h-28"
};

const mapSizeToTextFontSize: IMapSizeToTextFontSize = {
  large: "text-24",
  medium: "text-20",
  small: "text-16"
};

const IconWithLabel: React.FC<IIconWithLabelProps> = ({
  href,
  iconName,
  isExternal,
  label,
  labelColor = "text-blue100",
  size = "medium"
}) => {
  const iconPadding = size === "small" ? "pr-8" : "pr-12";

  const renderContent = () => (
    <LayoutContainer
      alignItems="items-center"
      className="group"
      dataCy="IconWithLabel"
      display="flex"
      flexFlow="flex-row flex-nowrap"
      height="100%"
      justifyContent="justify-start"
    >
      <LayoutContainer paddingRight={iconPadding}>
        <Icon
          className={
            href
              ? `
              childrenPath:transition-all 
              childrenPath:duration-fast 
              childrenPath:ease-in-out 
              childrenMask:transition-all 
              childrenMask:duration-fast 
              childrenMask:ease-in-out 
              group-hover:childrenMask:fill-white 
              group-hover:childrenPath:fill-white
          `
              : ""
          }
          themeClasses={{
            height: mapSizeToIconHeight[size as "small" | "medium" | "large"],
            width: isIE11() ? "w-32" : "w-auto"
          }}
          iconName={iconName}
          isHeightResponsive
        />
      </LayoutContainer>
      <Text
        className={href ? "group-hover:text-white" : ""}
        dataCy="LabelText"
        color={labelColor as ITextProps["color"]}
        fontSize={mapSizeToTextFontSize[size as "small" | "medium" | "large"]}
        isHoverable={!!href}
      >
        {label}
      </Text>
    </LayoutContainer>
  );

  return href ? (
    <Link
      height={
        mapSizeToIconHeight[size as "small" | "medium" | "large"] as
          | "h-40"
          | "h-32"
          | "h-28"
      }
      href={href}
      isExternal={isExternal}
    >
      {renderContent()}
    </Link>
  ) : (
    renderContent()
  );
};

export { IconWithLabel, mapSizeToIconHeight, mapSizeToTextFontSize };
