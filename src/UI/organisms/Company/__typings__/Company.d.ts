import { CompanyDescriptionProps } from "UI/organisms/__typings__/CompanyDescription";

import { Spacing } from "styles/variables/__typings__/variables";

export interface CompanyProps extends CompanyDescriptionProps {
  companyMobilePaddingBottom?: Spacing;
  dataCy?: string;
  dataTestId?: string;
  logo: string;
  timelineBottom?: Spacing;
}
