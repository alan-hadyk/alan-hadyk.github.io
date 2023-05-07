import { Typography } from "components/atoms/Typography/Typography";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { Device } from "components/layout/Responsive/@types/Responsive";
import { Responsive } from "components/layout/Responsive/Responsive";
import {
  ISectionTitleProps,
  SectionTitleSize,
  SectionTitleVariant
} from "components/molecules/SectionTitle/@types/SectionTitle";
import { useSectionTitleThemeClasses } from "components/molecules/SectionTitle/hooks/useSectionTitleThemeClasses";

const SectionTitle: React.FC<ISectionTitleProps> = ({
  children,
  size = SectionTitleSize.Large,
  themeClasses,
  variant = SectionTitleVariant.Blue
}) => {
  const {
    sectionTitleMobileThemeClasses,
    sectionTitleTvDesktopTabletThemeClasses
  } = useSectionTitleThemeClasses({ size, themeClasses, variant });

  return (
    <>
      <Responsive devices={[Device.Tv, Device.Desktop, Device.Tablet]}>
        <LayoutContainer
          themeClasses={sectionTitleTvDesktopTabletThemeClasses.wrapper}
        >
          <Typography
            themeClasses={sectionTitleTvDesktopTabletThemeClasses.title}
          >
            {children}
          </Typography>
        </LayoutContainer>
      </Responsive>

      <Responsive devices={[Device.Mobile]}>
        <LayoutContainer themeClasses={sectionTitleMobileThemeClasses.wrapper}>
          <Typography themeClasses={sectionTitleMobileThemeClasses.title}>
            {children}
          </Typography>
        </LayoutContainer>
      </Responsive>
    </>
  );
};

export { SectionTitle };
