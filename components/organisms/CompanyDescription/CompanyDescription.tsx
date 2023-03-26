import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";
import { TechStack } from "components/molecules/TechStack/TechStack";
import { ICompanyDescriptionProps } from "components/organisms/CompanyDescription/@types/CompanyDescription";
import {
  companyDescriptionContainerDefaultThemeClasses,
  companyDescriptionIconsWithLabelsContainerDefaultThemeClasses
} from "components/organisms/CompanyDescription/styles";
import { CompanyDescriptionTitle } from "components/molecules/CompanyDescriptionTitle/CompanyDescriptionTitle";
import { CompanyDescriptionResponsibilities } from "components/molecules/CompanyDescriptionResponsibilities/CompanyDescriptionResponsibilities";
import { CompanyDescriptionIconWithLabel } from "components/molecules/CompanyDescriptionIconWithLabel/CompanyDescriptionIconWithLabel";
import { IconStaticName } from "components/atoms/IconStatic/@types/IconStatic";

const CompanyDescription: React.FC<ICompanyDescriptionProps> = ({
  date,
  iconsWithLabels,
  link,
  responsibilities,
  themeClasses,
  title
}) => (
  <LayoutContainer
    themeClasses={companyDescriptionContainerDefaultThemeClasses}
  >
    <CompanyDescriptionTitle themeClasses={themeClasses?.title}>
      {title}
    </CompanyDescriptionTitle>

    <LayoutContainer
      themeClasses={
        companyDescriptionIconsWithLabelsContainerDefaultThemeClasses
      }
    >
      <CompanyDescriptionIconWithLabel
        iconName={IconStaticName.Calendar}
        label={date}
      />

      {link && (
        <CompanyDescriptionIconWithLabel
          href={link}
          label={link}
          iconName={IconStaticName.Link}
        />
      )}
    </LayoutContainer>

    <TechStack iconsWithLabels={iconsWithLabels} />

    <CompanyDescriptionResponsibilities
      responsibilities={responsibilities}
      themeClasses={themeClasses?.responsibilitiesWrapper}
    />
  </LayoutContainer>
);

export { CompanyDescription };
