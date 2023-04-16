import { Section } from "components/molecules/Section/Section";

import { CompanyRealEstateStartup } from "containers/experience/companies/CompanyRealEstateStartup";
import { CompanyDiH } from "containers/experience/companies/CompanyDiH";
import { CompanyOmise } from "containers/experience/companies/CompanyOmise";
import { CompanyPersonallyEmployed } from "containers/experience/companies/CompanyPersonallyEmployed";
import { CompanySAP } from "containers/experience/companies/CompanySAP";
import { CompanyShiji } from "containers/experience/companies/CompanyShiji";
import { CompanyTribe } from "containers/experience/companies/CompanyTribe";
import { CompanyHealthcareSaas } from "containers/experience/companies/CompanyHealthcareSaas";
import { CompanySaaSForContentWriters } from "containers/experience/companies/CompanySaaSForContentWriters";
import {
  ExperienceContainerFormat,
  IExperienceContainerProps
} from "containers/experience/@types/ExperienceContainer";
import {
  SectionSize,
  SectionVariant
} from "components/molecules/Section/@types/Section";
import { mapExperienceContainerFormatToCompanyVariant } from "containers/experience/config";

const ExperienceContainer: React.FC<IExperienceContainerProps> = ({
  format = ExperienceContainerFormat.Web
}) => (
  <Section
    id="experience"
    title="Experience"
    size={
      format === ExperienceContainerFormat.Web
        ? SectionSize.Large
        : SectionSize.Small
    }
    variant={
      format === ExperienceContainerFormat.Web
        ? SectionVariant.Blue
        : SectionVariant.Dark
    }
  >
    <CompanySaaSForContentWriters
      variant={mapExperienceContainerFormatToCompanyVariant[format]}
    />
    <CompanyHealthcareSaas
      variant={mapExperienceContainerFormatToCompanyVariant[format]}
    />
    <CompanyRealEstateStartup
      variant={mapExperienceContainerFormatToCompanyVariant[format]}
    />
    <CompanyTribe
      variant={mapExperienceContainerFormatToCompanyVariant[format]}
    />
    <CompanyOmise
      variant={mapExperienceContainerFormatToCompanyVariant[format]}
    />
    <CompanyShiji
      variant={mapExperienceContainerFormatToCompanyVariant[format]}
    />
    <CompanySAP
      variant={mapExperienceContainerFormatToCompanyVariant[format]}
    />
    <CompanyDiH
      variant={mapExperienceContainerFormatToCompanyVariant[format]}
    />
    <CompanyPersonallyEmployed
      variant={mapExperienceContainerFormatToCompanyVariant[format]}
    />
  </Section>
);

export { ExperienceContainer };
