import { Section } from "components/molecules/Section/Section";
import { SkillsItem } from "components/molecules/SkillsItem/SkillsItem";
import { Responsive } from "components/layout/Responsive/Responsive";
import { LayoutContainer } from "components/layout/LayoutContainer/LayoutContainer";

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

import {
  ISkillsItemProps,
  SkillsItemVariant
} from "components/molecules/SkillsItem/@types/SkillsItem";
import {
  IRenderColumnsArgs,
  ISkillsContainerProps,
  SkillsContainerFormat
} from "containers/skills/@types/SkillsContainer";
import { Device } from "components/layout/Responsive/@types/Responsive";
import {
  SectionSize,
  SectionVariant
} from "components/molecules/Section/@types/Section";

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

const SkillsContainer: React.FC<ISkillsContainerProps> = ({
  format = SkillsContainerFormat.Web
}) => (
  <Section
    id="skills"
    title="Skills"
    size={
      format === SkillsContainerFormat.Web
        ? SectionSize.Large
        : SectionSize.Small
    }
    variant={
      format === SkillsContainerFormat.Web
        ? SectionVariant.Blue
        : SectionVariant.Light
    }
  >
    {format === SkillsContainerFormat.Web && (
      <>
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
      </>
    )}

    {format === SkillsContainerFormat.Pdf &&
      items.map(({ iconsWithLabels, title }: ISkillsItemProps) => (
        <LayoutContainer
          key={title}
          themeClasses={{
            marginBottom: "mb-24"
          }}
        >
          <SkillsItem
            iconsWithLabels={iconsWithLabels}
            title={title}
            variant={SkillsItemVariant.Limited}
          />
        </LayoutContainer>
      ))}
  </Section>
);

export { SkillsContainer };
