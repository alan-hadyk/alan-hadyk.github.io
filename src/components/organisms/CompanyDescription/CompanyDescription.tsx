import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { TechStack } from "@app/components/molecules/TechStack/TechStack";
import {
  CompanyDescriptionSize,
  CompanyDescriptionVariant,
  ICompanyDescriptionProps,
} from "@app/components/organisms/CompanyDescription/@types/CompanyDescription";
import { companyDescriptionDefaultThemeClasses } from "@app/components/organisms/CompanyDescription/styles";
import { CompanyDescriptionTitle } from "@app/components/molecules/CompanyDescriptionTitle/CompanyDescriptionTitle";
import { CompanyResponsibilities } from "@app/components/molecules/CompanyResponsibilities/CompanyResponsibilities";
import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import {
  mapCompanyDescriptionSizeToCompanyDescriptionTitleSize,
  mapCompanyDescriptionSizeToIconWithLabelSize,
  mapCompanyDescriptionSizeToTechStackSize,
  mapCompanyDescriptionVariantToOutstandingVerticalIconsWithLabelsVariant,
  mapCompanyDescriptionVariantToCompanyResponsibilitiesVariant,
  mapCompanyDescriptionVariantToCompanyDescriptionTitleVariant,
  mapCompanyDescriptionVariantToTechStackVariant,
  mapCompanyDescriptionSizeToCompanyResponsibilitiesSize,
  mapCompanyDescriptionSizeToProjectTitleSize,
  mapCompanyDescriptionVariantToProjectTitleVariant,
} from "@app/components/organisms/CompanyDescription/config";
import { useCompanyDescriptionThemeClasses } from "@app/components/organisms/CompanyDescription/hooks/useCompanyDescriptionThemeClasses";
import { OutstandingVerticalIconsWithLabels } from "@app/components/molecules/OutstandingVerticalIconsWithLabels/OutstandingVerticalIconsWithLabels";
import { Fragment } from "react";
import { ProjectTitle } from "@app/components/molecules/ProjectTitle/ProjectTitle";

const CompanyDescription: React.FC<ICompanyDescriptionProps> = ({
  date,
  link,
  projects,
  size = CompanyDescriptionSize.Large,
  themeClasses,
  title,
  variant = CompanyDescriptionVariant.Blue,
}) => {
  const { companyDescriptionThemeClasses } = useCompanyDescriptionThemeClasses({
    size,
  });

  return (
    <LayoutContainer
      themeClasses={companyDescriptionDefaultThemeClasses.container}
    >
      <CompanyDescriptionTitle
        size={mapCompanyDescriptionSizeToCompanyDescriptionTitleSize[size]}
        themeClasses={themeClasses?.title}
        variant={
          mapCompanyDescriptionVariantToCompanyDescriptionTitleVariant[variant]
        }
      >
        {title}
      </CompanyDescriptionTitle>

      <OutstandingVerticalIconsWithLabels
        iconsWithLabels={[
          {
            iconName: IconStaticName.Calendar,
            label: date,
          },
          ...(link
            ? [
                {
                  href: link,
                  iconName: IconStaticName.Link,
                  label: link,
                },
              ]
            : []),
        ]}
        size={mapCompanyDescriptionSizeToIconWithLabelSize[size]}
        variant={
          mapCompanyDescriptionVariantToOutstandingVerticalIconsWithLabelsVariant[
            variant
          ]
        }
        themeClasses={companyDescriptionThemeClasses.outstandingIcons}
      />

      {projects.map(({ responsibilities, techStack, title }, index) => (
        <Fragment key={index}>
          {title && (
            <ProjectTitle
              size={mapCompanyDescriptionSizeToProjectTitleSize[size]}
              themeClasses={themeClasses?.title}
              variant={
                mapCompanyDescriptionVariantToProjectTitleVariant[variant]
              }
            >
              {title}
            </ProjectTitle>
          )}

          {techStack && (
            <TechStack
              iconsWithLabels={techStack}
              size={mapCompanyDescriptionSizeToTechStackSize[size]}
              variant={mapCompanyDescriptionVariantToTechStackVariant[variant]}
            />
          )}

          {responsibilities && (
            <CompanyResponsibilities
              responsibilities={responsibilities}
              shouldDisplayTitle={!!techStack}
              size={
                mapCompanyDescriptionSizeToCompanyResponsibilitiesSize[size]
              }
              themeClasses={themeClasses?.responsibilitiesWrapper}
              variant={
                mapCompanyDescriptionVariantToCompanyResponsibilitiesVariant[
                  variant
                ]
              }
            />
          )}
        </Fragment>
      ))}
    </LayoutContainer>
  );
};

export { CompanyDescription };
