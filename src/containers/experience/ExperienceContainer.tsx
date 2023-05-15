import { Section } from "@app/components/molecules/Section/Section";

import { CompanyRealEstateStartup } from "@app/containers/Experience/companies/CompanyRealEstateStartup";
import { CompanyDiH } from "@app/containers/Experience/companies/CompanyDiH";
import { CompanyOmise } from "@app/containers/Experience/companies/CompanyOmise";
import { CompanyPersonallyEmployed } from "@app/containers/Experience/companies/CompanyPersonallyEmployed";
import { CompanySAP } from "@app/containers/Experience/companies/CompanySAP";
import { CompanyShiji } from "@app/containers/Experience/companies/CompanyShiji";
import { CompanyTribe } from "@app/containers/Experience/companies/CompanyTribe";
import { CompanyHealthcareSaas } from "@app/containers/Experience/companies/CompanyHealthcareSaas";
import { CompanySaaSForContentWriters } from "@app/containers/Experience/companies/CompanySaaSForContentWriters";
import {
  ExperienceContainerFormat,
  IExperienceContainerProps,
} from "@app/containers/Experience/@types/ExperienceContainer";
import {
  SectionSize,
  SectionVariant,
} from "@app/components/molecules/Section/@types/Section";
import {
  mapExperienceContainerFormatToCompanyFormat,
  mapExperienceContainerFormatToCompanyVariant,
} from "@app/containers/Experience/config";

const ExperienceContainer: React.FC<IExperienceContainerProps> = ({
  format = ExperienceContainerFormat.Web,
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
    {[
      CompanySaaSForContentWriters,
      CompanyHealthcareSaas,
      CompanyRealEstateStartup,
      CompanyTribe,
      CompanyOmise,
      CompanyShiji,
      CompanySAP,
      CompanyDiH,
      CompanyPersonallyEmployed,
    ].map((CompanyComponent, index) => (
      <CompanyComponent
        format={mapExperienceContainerFormatToCompanyFormat[format]}
        key={index}
        variant={mapExperienceContainerFormatToCompanyVariant[format]}
      />
    ))}
  </Section>
);

export { ExperienceContainer };
