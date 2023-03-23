import { Typography } from "components/atoms/Typography/Typography";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import {
  ISectionTitleProps,
  SectionTitleVariant
} from "components/molecules/SectionTitle/@types/SectionTitle";
import { sectionTitleTypographyDefaultThemeClasses } from "components/molecules/SectionTitle/styles";
import { IThemeClasses } from "types/theme";

const SectionTitle: React.FC<ISectionTitleProps> = ({
  children,
  themeClasses,
  variant = SectionTitleVariant.Dark
}) => {
  const sectionTitleTypographyThemeClasses: IThemeClasses = {
    ...sectionTitleTypographyDefaultThemeClasses,
    color:
      variant === SectionTitleVariant.Dark ? "text-blue100" : "text-blue600",
    ...themeClasses.title
  };

  return (
    <LayoutContainer themeClasses={themeClasses.wrapper}>
      <Typography themeClasses={sectionTitleTypographyThemeClasses}>
        {children}
      </Typography>
    </LayoutContainer>
  );
};

export { SectionTitle };
