import { CompanyDescriptionProps } from "UI/organisms/__typings__/CompanyDescription";

import { IconProps } from "UI/atoms/__typings__/Icon";
import { Spacing } from "styles/variables/__typings__/variables";

export interface CompanyProps extends CompanyDescriptionProps {
  companyMobilePaddingBottom?: Spacing;
  dataCy?: string;
  dataTestId?: string;
  logo: IconProps["iconName"];
  timelineBottom?: Spacing;
}
