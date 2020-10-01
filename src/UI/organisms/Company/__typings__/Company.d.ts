import { CompanyDescriptionProps } from "<organisms>/__typings__/CompanyDescription.d.ts";

import {
  IconProps
} from "<atoms>/__typings__/Icon.d.ts";
import { Spacing } from "<styles>/variables/__typings__/variables";

export interface CompanyProps extends CompanyDescriptionProps {
  companyMobilePaddingBottom?: Spacing
  dataCy?: string;
  dataTestId?: string;
  logo: IconProps["iconName"];
  timelineBottom?: Spacing;
}