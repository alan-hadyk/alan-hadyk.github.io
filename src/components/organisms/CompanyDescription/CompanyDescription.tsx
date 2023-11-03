import { LayoutContainer } from "@app/components/layout/LayoutContainer/LayoutContainer";
import { TechStack } from "@app/components/molecules/TechStack/TechStack";
import { ICompanyDescriptionProps } from "@app/components/organisms/CompanyDescription/@types/CompanyDescription";
import { companyDescriptionDefaultThemeClasses } from "@app/components/organisms/CompanyDescription/styles";
import { CompanyPosition } from "@app/components/molecules/CompanyPosition/CompanyPosition";
import { CompanyResponsibilities } from "@app/components/molecules/CompanyResponsibilities/CompanyResponsibilities";
import { IconStaticName } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { OutstandingVerticalIconsWithLabels } from "@app/components/molecules/OutstandingVerticalIconsWithLabels/OutstandingVerticalIconsWithLabels";
import { Fragment } from "react";
import { ProjectTitle } from "@app/components/molecules/ProjectTitle/ProjectTitle";

const CompanyDescription: React.FC<ICompanyDescriptionProps> = ({
  date,
  link,
  position,
  projects,
  themeClasses,
}) => (
  <LayoutContainer
    themeClasses={companyDescriptionDefaultThemeClasses.container}
  >
    <CompanyPosition themeClasses={themeClasses?.position}>
      {position}
    </CompanyPosition>

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
      themeClasses={companyDescriptionDefaultThemeClasses.outstandingIcons}
    />

    {projects.map(({ responsibilities, techStack, title }, index) => (
      <Fragment key={index}>
        {title && (
          <ProjectTitle themeClasses={themeClasses?.position}>
            {title}
          </ProjectTitle>
        )}

        {techStack && <TechStack iconsWithLabels={techStack} />}

        {responsibilities && (
          <CompanyResponsibilities
            responsibilities={responsibilities}
            shouldDisplayTitle={!!techStack}
            themeClasses={themeClasses?.responsibilitiesWrapper}
          />
        )}
      </Fragment>
    ))}
  </LayoutContainer>
);

export { CompanyDescription };
