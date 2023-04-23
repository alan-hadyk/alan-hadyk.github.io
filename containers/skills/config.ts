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

import { IContentFrameWithIconsProps } from "components/molecules/ContentFrameWithIcons/@types/ContentFrameWithIcons";

export const skillsItems: IContentFrameWithIconsProps[] = [
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
