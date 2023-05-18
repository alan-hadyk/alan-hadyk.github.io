"use client";
import { Section } from "@app/components/molecules/Section/Section";
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
import { lazy } from "react";
import { LazyLoadingWrapper } from "@app/components/layout/LazyLoadingWrapper/LazyLoadingWrapper";

const CompanyRealEstateStartup = lazy(() =>
  import("@app/containers/Experience/companies/CompanyRealEstateStartup").then(
    (module) => ({ default: module.CompanyRealEstateStartup }),
  ),
);

const CompanyDiH = lazy(() =>
  import("@app/containers/Experience/companies/CompanyDiH").then((module) => ({
    default: module.CompanyDiH,
  })),
);

const CompanyOmise = lazy(() =>
  import("@app/containers/Experience/companies/CompanyOmise").then(
    (module) => ({ default: module.CompanyOmise }),
  ),
);

const CompanyPersonallyEmployed = lazy(() =>
  import("@app/containers/Experience/companies/CompanyPersonallyEmployed").then(
    (module) => ({ default: module.CompanyPersonallyEmployed }),
  ),
);

const CompanySAP = lazy(() =>
  import("@app/containers/Experience/companies/CompanySAP").then((module) => ({
    default: module.CompanySAP,
  })),
);

const CompanyShiji = lazy(() =>
  import("@app/containers/Experience/companies/CompanyShiji").then(
    (module) => ({ default: module.CompanyShiji }),
  ),
);

const CompanyTribe = lazy(() =>
  import("@app/containers/Experience/companies/CompanyTribe").then(
    (module) => ({ default: module.CompanyTribe }),
  ),
);

const CompanyHealthcareSaas = lazy(() =>
  import("@app/containers/Experience/companies/CompanyHealthcareSaas").then(
    (module) => ({ default: module.CompanyHealthcareSaas }),
  ),
);

const CompanySaaSForContentWriters = lazy(() =>
  import(
    "@app/containers/Experience/companies/CompanySaaSForContentWriters"
  ).then((module) => ({ default: module.CompanySaaSForContentWriters })),
);

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
    <LazyLoadingWrapper>
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
    </LazyLoadingWrapper>
  </Section>
);

export { ExperienceContainer };
