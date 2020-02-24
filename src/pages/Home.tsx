import React from "react";
import styled from "styled-components";

import Header from "<organisms>/Header";
import PageTemplate from "<templates>/PageTemplate";

const Section = styled.section`
  border-bottom: 1px solid #fff;
  font-size: 40px;
  height: 150vh;
  padding: 96px;
  text-align: center;
`;

const Home = (): JSX.Element => (
  <PageTemplate>
    <Header 
      zIndex="layer2"
    />
    <Section id="dashboard">
      Dashboard
    </Section>
    <Section id="portfolio">
      Portfolio
    </Section>
    <Section id="experience">
      Experience
    </Section>
    <Section id="skills">
      Skills
    </Section>
    <Section id="about-me">
      About me
    </Section>
    <Section id="contact">
      Contact
    </Section>
  </PageTemplate>
);
  
export default Home;
