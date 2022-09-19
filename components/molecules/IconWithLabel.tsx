import PropTypes from "prop-types";

import { Icon, iconNames } from "components/atoms/Icon";
import { Text } from "components/atoms/Text";

import {
  IIconWithLabelProps,
  IMapSizeToIconHeight,
  IMapSizeToTextFontSize
} from "components/molecules/@types/IconWithLabel";

import { colorPropType } from "helpers/propTypes/color";

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
          height={mapSizeToIconHeight[size as "small" | "medium" | "large"]}
          iconName={iconName}
          isHeightResponsive
          width={isIE11() ? "w-32" : "w-auto"}
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

IconWithLabel.propTypes = {
  href: PropTypes.string,
  iconName: PropTypes.oneOf(iconNames).isRequired,
  isExternal: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelColor: colorPropType("text"),
  size: PropTypes.oneOf(["small", "medium", "large"])
};

export { IconWithLabel, mapSizeToIconHeight, mapSizeToTextFontSize };
