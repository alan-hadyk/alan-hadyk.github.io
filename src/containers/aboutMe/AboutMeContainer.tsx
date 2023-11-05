"use client";
import { ImageStatic } from "@app/components/atoms/ImageStatic/ImageStatic";
import { Section } from "@app/components/molecules/Section/Section";
import { aboutMeDescription } from "@app/containers/aboutMe/config";
import Alan from "@public/images/static/alan.png";
import { HexagonWithDescription } from "@app/components/molecules/HexagonWithDescription/HexagonWithDescription";

export const AboutMeContainer: React.FC = () => (
  <Section id="about-me" title="About me">
    <HexagonWithDescription
      id="about-me-description"
      description={aboutMeDescription}
    >
      <ImageStatic alt="Alan Hadyk" height={700} src={Alan} width={700} />
    </HexagonWithDescription>
  </Section>
);
