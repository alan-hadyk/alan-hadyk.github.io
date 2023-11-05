import { Section } from "@app/components/molecules/Section/Section";
import { CompanyDiH } from "@app/containers/experience/companies/CompanyDiH";
import { CompanyOmise } from "@app/containers/experience/companies/CompanyOmise";
import { CompanyPersonallyEmployed } from "@app/containers/experience/companies/CompanyPersonallyEmployed";
import { CompanySAP } from "@app/containers/experience/companies/CompanySAP";
import { CompanyToptal } from "@app/containers/experience/companies/toptal/CompanyToptal";
import { CompanyShiji } from "@app/containers/experience/companies/CompanyShiji";

export const ExperienceContainer: React.FC = () => (
  <Section id="experience" title="Experience">
    {[
      CompanyToptal,
      CompanyOmise,
      CompanyShiji,
      CompanySAP,
      CompanyDiH,
      CompanyPersonallyEmployed,
    ].map((CompanyComponent, index) => (
      <CompanyComponent key={index} />
    ))}
  </Section>
);
