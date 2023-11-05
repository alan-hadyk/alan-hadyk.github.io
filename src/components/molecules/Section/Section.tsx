import { ISectionProps } from "@app/components/molecules/Section/@types/Section";
import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { SectionTitle } from "@app/components/molecules/SectionTitle/SectionTitle";
import { sectionDefaultThemeClasses } from "@app/components/molecules/Section/styles";
import { IThemeClasses } from "@app/types/theme";

export const Section: React.FC<ISectionProps> = ({
  children,
  id,
  themeClasses,
  title,
}) => {
  const sectionThemeClasses: IThemeClasses = {
    ...sectionDefaultThemeClasses,
    ...themeClasses,
  };

  return (
    <LayoutContainer id={id} themeClasses={sectionThemeClasses}>
      {title && <SectionTitle>{title}</SectionTitle>}

      {children}
    </LayoutContainer>
  );
};
