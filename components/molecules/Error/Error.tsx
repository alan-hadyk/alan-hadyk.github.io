import { Typography } from "components/atoms/Typography/Typography";

import { IErrorProps } from "components/molecules/Error/@types/Error";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import {
  errorContainerDefaultThemeClasses,
  errorDefaultThemeClasses,
  errorDescriptionDefaultThemeClasses,
  errorIconDefaultThemeClasses,
  errorTitleDefaultThemeClasses
} from "components/molecules/Error/styles";
import { IconDynamic } from "components/atoms/IconDynamic/IconDynamic";

const Error: React.FC<IErrorProps> = ({ description, title }) => (
  <LayoutContainer themeClasses={errorDefaultThemeClasses}>
    <LayoutContainer themeClasses={errorContainerDefaultThemeClasses}>
      <IconDynamic
        iconName="warning"
        shouldDisplayGlowAnimation
        themeClasses={errorIconDefaultThemeClasses}
      />
      <Typography themeClasses={errorTitleDefaultThemeClasses}>
        {title}
      </Typography>
      <Typography themeClasses={errorDescriptionDefaultThemeClasses}>
        {description}
      </Typography>
    </LayoutContainer>
  </LayoutContainer>
);

export { Error };
