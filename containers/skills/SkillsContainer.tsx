import { Section } from "components/molecules/Section/Section";
import { SkillsItem } from "components/molecules/SkillsItem/SkillsItem";
import { Responsive } from "components/layout/Responsive/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

import { languagesCategory } from "containers/Skills/categories/languagesCategory";
import { frameworksCategory } from "containers/Skills/categories/frameworksCategory";
import { stateManagementCategory } from "containers/Skills/categories/stateManagementCategory";
import { webApisCategory } from "containers/Skills/categories/webApisCategory";
import { webTechnologiesCategory } from "containers/Skills/categories/webTechnologiesCategory";
import { cssToolsCategory } from "containers/Skills/categories/cssToolsCategory";
import { testingCategory } from "containers/Skills/categories/testingCategory";
import { cicdCategory } from "containers/Skills/categories/cicdCategory";
import { bundlersCategory } from "containers/Skills/categories/bundlersCategory";
import { taskManagementCategory } from "containers/Skills/categories/taskManagementCategory";
import { designToolsCategory } from "containers/Skills/categories/designToolsCategory";

import { ISkillsItemProps } from "components/molecules/SkillsItem/@types/SkillsItem";
import { IRenderColumnsArgs } from "containers/Skills/@types/SkillsContainer";
import { Device } from "components/layout/Responsive/@types/Responsive";

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
  devices
}) => (
  <Responsive devices={devices}>
    <LayoutContainer
      themeClasses={{
        columns: columnCount,
        gap: "gap-32",
        pseudoClasses: [
          "directChildren:break-inside-avoid-column",
          "directChildren:page-break-inside-avoid"
        ]
      }}
    >
      {items.map(({ iconsWithLabels, title }: ISkillsItemProps) => (
        <LayoutContainer
          key={title}
          themeClasses={{
            marginBottom: "mb-32"
          }}
        >
          <SkillsItem iconsWithLabels={iconsWithLabels} title={title} />
        </LayoutContainer>
      ))}
    </LayoutContainer>
  </Responsive>
);

const SkillsContainer: React.FC = () => (
  <Section id="skills" title="Skills">
    <SkillsColumns columnCount="columns-5" devices={[Device.Tv]} />

    <SkillsColumns columnCount="columns-3" devices={[Device.Desktop]} />

    <SkillsColumns columnCount="columns-2" devices={[Device.Tablet]} />

    <Responsive devices={[Device.Mobile]}>
      {items.map(({ iconsWithLabels, title }: ISkillsItemProps) => (
        <LayoutContainer
          key={title}
          themeClasses={{
            marginBottom: "mb-32"
          }}
        >
          <SkillsItem iconsWithLabels={iconsWithLabels} title={title} />
        </LayoutContainer>
      ))}
    </Responsive>
  </Section>
);

export { SkillsContainer };
