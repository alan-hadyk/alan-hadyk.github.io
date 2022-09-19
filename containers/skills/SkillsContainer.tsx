import { Section } from "components/molecules/Section";
import { SkillsItem } from "components/molecules/SkillsItem";
import { Responsive } from "components/layout/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer";

import { languagesCategory } from "containers/skills/categories/languagesCategory";
import { frameworksCategory } from "containers/skills/categories/frameworksCategory";
import { stateManagementCategory } from "containers/skills/categories/stateManagementCategory";
import { webApisCategory } from "containers/skills/categories/webApisCategory";
import { webTechnologiesCategory } from "containers/skills/categories/webTechnologiesCategory";
import { cssToolsCategory } from "containers/skills/categories/cssToolsCategory";
import { testingCategory } from "containers/skills/categories/testingCategory";
import { cicdCategory } from "containers/skills/categories/cicdCategory";
import { bundlersCategory } from "containers/skills/categories/bundlersCategory";
import { taskManagementCategory } from "containers/skills/categories/taskManagementCategory";
import { designToolsCategory } from "containers/skills/categories/designToolsCategory";

import { ISkillsItemProps } from "components/molecules/@types/SkillsItem";
import { IRenderColumnsArgs } from "containers/skills/@types/SkillsContainer";
import { Device } from "components/layout/@types/Responsive";

const items: ISkillsItemProps[] = [
  languagesCategory,
  frameworksCategory,
  stateManagementCategory,
  webApisCategory,
  webTechnologiesCategory,
  cssToolsCategory,
  testingCategory,
  cicdCategory,
  bundlersCategory,
  taskManagementCategory,
  designToolsCategory
];

const SkillsColumns: React.FC<IRenderColumnsArgs> = ({
  columnCount,
  dataCy,
  devices
}) => (
  <Responsive dataCy={dataCy} devices={devices}>
    <LayoutContainer
      className={`
       ${columnCount} gap-32 
       directChildren:break-inside-avoid-column 
       directChildren:page-break-inside-avoid
    `}
    >
      {items.map(({ iconsWithLabels, title }: ISkillsItemProps) => (
        <LayoutContainer key={title} marginBottom="mb-32">
          <SkillsItem iconsWithLabels={iconsWithLabels} title={title} />
        </LayoutContainer>
      ))}
    </LayoutContainer>
  </Responsive>
);

const SkillsContainer: React.FC = () => (
  <Section dataCy="Skills" id="skills" title="Skills">
    <SkillsColumns
      columnCount="columns-5"
      dataCy="SkillsResponsiveTv"
      devices={[Device.TV]}
    />

    <SkillsColumns
      columnCount="columns-3"
      dataCy="SkillsResponsiveDesktop"
      devices={[Device.DESKTOP]}
    />

    <SkillsColumns
      columnCount="columns-2"
      dataCy="SkillsResponsiveTablet"
      devices={[Device.TABLET]}
    />

    <Responsive dataCy="SkillsResponsiveMobile" devices={[Device.MOBILE]}>
      {items.map(({ iconsWithLabels, title }: ISkillsItemProps) => (
        <LayoutContainer key={title} marginBottom="mb-32">
          <SkillsItem iconsWithLabels={iconsWithLabels} title={title} />
        </LayoutContainer>
      ))}
    </Responsive>
  </Section>
);

export { SkillsContainer };
