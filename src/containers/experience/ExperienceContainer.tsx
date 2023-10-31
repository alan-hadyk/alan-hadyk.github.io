"use client";
import { Section } from "@app/components/molecules/Section/Section";
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
import { CompanyDiH } from "@app/containers/experience/companies/CompanyDiH";
import { CompanyOmise } from "@app/containers/experience/companies/CompanyOmise";
import { CompanyPersonallyEmployed } from "@app/containers/experience/companies/CompanyPersonallyEmployed";
import { CompanyRealEstateStartup } from "@app/containers/experience/companies/CompanyRealEstateStartup";
import { CompanySAP } from "@app/containers/experience/companies/CompanySAP";
import { CompanyToptal } from "@app/containers/experience/companies/toptal/CompanyToptal";
import { CompanyShiji } from "@app/containers/experience/companies/CompanyShiji";
import { CompanyTribe } from "@app/containers/experience/companies/CompanyTribe";

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
      CompanyToptal,
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
