import { languagesCategory } from "@app/containers/Skills/categories/languagesCategory";
import { frameworksCategory } from "@app/containers/Skills/categories/frameworksCategory";
import { stateManagementCategory } from "@app/containers/Skills/categories/stateManagementCategory";
import { webApisCategory } from "@app/containers/Skills/categories/webApisCategory";
import { webTechnologiesCategory } from "@app/containers/Skills/categories/webTechnologiesCategory";
import { cssToolsCategory } from "@app/containers/Skills/categories/cssToolsCategory";
import { testingCategory } from "@app/containers/Skills/categories/testingCategory";
import { cicdCategory } from "@app/containers/Skills/categories/cicdCategory";
import { bundlersCategory } from "@app/containers/Skills/categories/bundlersCategory";
import { taskManagementCategory } from "@app/containers/Skills/categories/taskManagementCategory";
import { designToolsCategory } from "@app/containers/Skills/categories/designToolsCategory";

import { IContentFrameWithIconsProps } from "@app/components/molecules/ContentFrameWithIcons/@types/ContentFrameWithIcons";

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
  designToolsCategory,
];
