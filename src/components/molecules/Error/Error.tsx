import { Typography } from "@app/components/atoms/Typography/Typography";

import { IErrorProps } from "@app/components/molecules/Error/@types/Error";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import {
  errorContainerDefaultThemeClasses,
  errorDefaultThemeClasses,
  errorDescriptionDefaultThemeClasses,
  errorIconDefaultThemeClasses,
  errorTitleDefaultThemeClasses,
} from "@app/components/molecules/Error/styles";
import { ImageDynamic } from "@app/components/atoms/ImageDynamic/ImageDynamic";
import {
  ImageDynamicName,
  ImageDynamicVariant,
} from "@app/components/atoms/ImageDynamic/@types/ImageDynamic";

const Error: React.FC<IErrorProps> = ({ description, title }) => (
  <LayoutContainer themeClasses={errorDefaultThemeClasses}>
    <LayoutContainer themeClasses={errorContainerDefaultThemeClasses}>
      <ImageDynamic
        imageName={ImageDynamicName.Warning}
        themeClasses={errorIconDefaultThemeClasses}
        variants={[
          ImageDynamicVariant.HeightResponsive,
          ImageDynamicVariant.GlowAnimation,
        ]}
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
