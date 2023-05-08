import { Section } from "@app/components/molecules/Section/Section";

import { CompanyRealEstateStartup } from "@app/containers/experience/companies/CompanyRealEstateStartup";
import { CompanyDiH } from "@app/containers/experience/companies/CompanyDiH";
import { CompanyOmise } from "@app/containers/experience/companies/CompanyOmise";
import { CompanyPersonallyEmployed } from "@app/containers/experience/companies/CompanyPersonallyEmployed";
import { CompanySAP } from "@app/containers/experience/companies/CompanySAP";
import { CompanyShiji } from "@app/containers/experience/companies/CompanyShiji";
import { CompanyTribe } from "@app/containers/experience/companies/CompanyTribe";
import { CompanyHealthcareSaas } from "@app/containers/experience/companies/CompanyHealthcareSaas";
import { CompanySaaSForContentWriters } from "@app/containers/experience/companies/CompanySaaSForContentWriters";
import {
  ExperienceContainerFormat,
  IExperienceContainerProps,
} from "@app/containers/experience/@types/ExperienceContainer";
import {
  SectionSize,
  SectionVariant,
} from "@app/components/molecules/Section/@types/Section";
import {
  mapExperienceContainerFormatToCompanyFormat,
  mapExperienceContainerFormatToCompanyVariant,
} from "@app/containers/experience/config";

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
