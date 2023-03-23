import { Typography } from "components/atoms/Typography/Typography";
import { IconWithLabel } from "components/molecules/IconWithLabel/IconWithLabel";
import { UnorderedList } from "components/molecules/UnorderedList/UnorderedList";

import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { TechStack } from "components/molecules/TechStack/TechStack";
import { IconWithLabelSize } from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";
import { ICompanyDescriptionProps } from "components/organisms/CompanyDescription/@types/CompanyDescription";
import {
  companyDescriptionContainerDefaultThemeClasses,
  companyDescriptionIconWithLabelDefaultThemeClasses,
  companyDescriptionLinkWrapperDefaultThemeClasses,
  companyDescriptionResponsibilitiesDefaultThemeClasses,
  companyDescriptionUnorderedListWrapperDefaultThemeClasses
} from "components/organisms/CompanyDescription/styles";
import { useCompanyDescriptionThemeClasses } from "components/organisms/CompanyDescription/hooks/useCompanyDescriptionThemeClasses";

const CompanyDescription: React.FC<ICompanyDescriptionProps> = ({
  date,
  iconsWithLabels,
  link,
  responsibilities,
  themeClasses,
  title
}) => {
  const {
    companyDescriptionTitleThemeClasses,
    companyDescriptionIconWithLabelWrapperThemeClasses,
    companyDescriptionResponsibilitiesWrapperThemeClasses
  } = useCompanyDescriptionThemeClasses({ link, themeClasses });

  return (
    <LayoutContainer
      themeClasses={companyDescriptionContainerDefaultThemeClasses}
    >
      <Typography themeClasses={companyDescriptionTitleThemeClasses}>
        {title}
      </Typography>

      <LayoutContainer
        themeClasses={companyDescriptionIconWithLabelWrapperThemeClasses}
      >
        <IconWithLabel
          iconName={IconStaticName.Calendar}
          label={date}
          size={IconWithLabelSize.Medium}
          themeClasses={companyDescriptionIconWithLabelDefaultThemeClasses}
        />
      </LayoutContainer>

      {link && (
        <LayoutContainer
          themeClasses={companyDescriptionLinkWrapperDefaultThemeClasses}
        >
          <IconWithLabel
            href={link}
            isExternal
            iconName={IconStaticName.Link}
            label={link}
            size={IconWithLabelSize.Medium}
            themeClasses={companyDescriptionIconWithLabelDefaultThemeClasses}
          />
        </LayoutContainer>
      )}

      <TechStack iconsWithLabels={iconsWithLabels} />

      <LayoutContainer
        themeClasses={companyDescriptionResponsibilitiesWrapperThemeClasses}
      >
        <Typography
          themeClasses={companyDescriptionResponsibilitiesDefaultThemeClasses}
        >
          Responsibilities
        </Typography>
        <LayoutContainer
          themeClasses={
            companyDescriptionUnorderedListWrapperDefaultThemeClasses
          }
        >
          <UnorderedList items={responsibilities} />
        </LayoutContainer>
      </LayoutContainer>
    </LayoutContainer>
  );
};
export { CompanyDescription };
