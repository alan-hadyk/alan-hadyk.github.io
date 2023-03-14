// import { Icon } from "components/atoms/Icon/Icon";
import { Typography } from "components/atoms/Typography/Typography";

import {
  IIconWithLabelProps,
  IMapSizeToIconHeight,
  IMapSizeToTextFontSize
} from "components/molecules/@types/IconWithLabel";

import { isIE11 } from "helpers/browser/isIE11";
import { LayoutContainer } from "components/layout/LayoutContainer";
import { Link } from "components/molecules/Link";
import { IconStatic } from "components/atoms/IconStatic/IconStatic";

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
      display="flex"
      flexFlow="flex-row flex-nowrap"
      height="100%"
      justifyContent="justify-start"
    >
      <LayoutContainer paddingRight={iconPadding}>
        <IconStatic
          themeClasses={{
            height: mapSizeToIconHeight[size as "small" | "medium" | "large"],
            width: isIE11() ? "w-32" : "w-auto"
          }}
          iconName={iconName}
        />
      </LayoutContainer>
      <Typography
        isHoverable={!!href}
        themeClasses={{
          color: labelColor,
          fontSize: size ? mapSizeToTextFontSize[size] : undefined,
          groupHover: href ? "group-hover:text-white" : undefined
        }}
      >
        {label}
      </Typography>
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
