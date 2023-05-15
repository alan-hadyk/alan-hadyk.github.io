import { ImageStatic } from "@app/components/atoms/ImageStatic/ImageStatic";
import { Section } from "@app/components/molecules/Section/Section";
import { HexagonWithDescription } from "@app/components/molecules/HexagonWithDescription/HexagonWithDescription";
import { renderDescription } from "@app/containers/aboutMe/config";
import Alan from "@app/../public/images/static/alan.png";

const AboutMeContainer: React.FC = () => (
  <Section id="about-me" title="About me">
    <HexagonWithDescription description={renderDescription()}>
      <ImageStatic alt="Alan Hadyk" height={700} src={Alan} width={700} />
    </HexagonWithDescription>
  </Section>
);

export { AboutMeContainer };
