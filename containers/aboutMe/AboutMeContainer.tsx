import { ImageStatic } from "components/atoms/ImageStatic/ImageStatic";
import { Section } from "components/molecules/Section/Section";
import { HexagonWithDescription } from "components/molecules/HexagonWithDescription/HexagonWithDescription";
import { renderDescription } from "containers/AboutMe/config/renderDescription";

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
