import { ImageStatic } from "components/atoms/ImageStatic/ImageStatic";
import { Section } from "components/molecules/Section/Section";
import { HexagonWithDescription } from "components/molecules/HexagonWithDescription/HexagonWithDescription";

const renderDescription = () => (
  <>
    A <strong>highly skilled front-end architect</strong> with extensive
    experience in designing and developing engaging user interfaces for a
    diverse range of industries. Proficient in{" "}
    <strong>HTML, CSS, JavaScript</strong>, and modern front-end frameworks such
    as <strong>React</strong> and <strong>Next.js</strong>. Committed to
    implementing <strong>best practices</strong> and driving{" "}
    <strong>team collaboration</strong> to deliver exceptional products.
    Demonstrated expertise in <strong>agile methodologies</strong>,{" "}
    <strong>cross-functional leadership</strong>, and integrating{" "}
    <strong>REST & GraphQL</strong> for seamless communication with backend
    systems. A dedicated professional with a strong focus on{" "}
    <strong>continuous improvement</strong> and the ability to adapt to the
    latest technological trends.
  </>
);

const AboutMeContainer: React.FC = () => (
  <Section id="about-me" title="About me">
    <HexagonWithDescription description={renderDescription()}>
      <ImageStatic
        alt="Alan Hadyk"
        src="/images/alan.png"
        themeClasses={{
          height: "h-100%",
          width: "w-[700px]"
        }}
      />
    </HexagonWithDescription>
  </Section>
);

export { AboutMeContainer };
