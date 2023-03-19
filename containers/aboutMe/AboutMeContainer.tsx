import { ImageStatic } from "components/atoms/ImageStatic/ImageStatic";
import { Section } from "components/molecules/Section";
import { HexagonWithDescription } from "components/molecules/HexagonWithDescription";

const renderDescription = () => (
  <div>
    <strong>Proven talent</strong> for aligning software development strategy
    and objectives with established user interface implementation and technology
    management paradigms to achieve maximum operational impacts with minimum
    resource expenditures. <strong>Growth-focused thought leader</strong> with
    expertise spanning application layering, polygot language coding expertise,
    best practice compliance, agile methodology, cross-functional team
    leadership, REST & GraphQL architectural styles, comprehensive components,
    and project management.{" "}
    <strong>Exceptionally dedicated technical professional</strong> with keen
    organizational skills.
  </div>
);

const AboutMeContainer: React.FC = () => (
  <Section id="about-me" title="About me">
    <HexagonWithDescription description={renderDescription()}>
      <ImageStatic
        alt="Alan Hadyk"
        src="/images/alan.png"
        themeClasses={{
          height: "504px",
          width: "700px"
        }}
      />
    </HexagonWithDescription>
  </Section>
);

export { AboutMeContainer };
