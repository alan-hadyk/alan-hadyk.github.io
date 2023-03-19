import { LinkWithIcon } from "components/molecules/LinkWithIcon/LinkWithIcon";

import { horizontalLinksWithIconsIconDefaultThemeClasses } from "components/molecules/HorizontalLinksWithIcons/styles";
import { IHorizontalLinksWithIconsProps } from "components/molecules/HorizontalLinksWithIcons/@types/HorizontalLinksWithIcons";

const HorizontalLinksWithIcons: React.FC<IHorizontalLinksWithIconsProps> = ({
  icons
}) => (
  <>
    {icons.map(({ href, iconName, isExternal }) => (
      <LinkWithIcon
        href={href}
        iconName={iconName}
        isExternal={isExternal}
        key={iconName}
        themeClasses={horizontalLinksWithIconsIconDefaultThemeClasses}
      />
    ))}
  </>
);

export { HorizontalLinksWithIcons };
