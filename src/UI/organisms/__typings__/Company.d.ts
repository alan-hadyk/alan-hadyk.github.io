import { CompanyDescriptionProps } from "<organisms>/__typings__/CompanyDescription.d.ts";

import {
  IconProps
} from "<atoms>/__typings__/Icon.d.ts";

export interface CompanyProps extends CompanyDescriptionProps {
  dataTestId?: string;
  logo: IconProps["iconName"];
}