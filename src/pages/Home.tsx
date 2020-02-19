import React from "react";
import styled from "styled-components";

import Header from "<organisms>/Header";
import PageTemplate from "<templates>/PageTemplate";

const Section = styled.section`
  height: 150vh;
  font-size: 40px;
  text-align: center;
  padding: 96px;
  border-bottom: 1px solid #fff;
`;


const Rect = styled.div`
margin-top: 20px;
text-align:center;
  font-family: Arial;
  color: #fff;
  font-size: 40px;
`;


const Home = (): JSX.Element => (
  <PageTemplate>
    <Header 
      zIndex="layer2"
    />
    <Section id="dashboard">
      Dashboard
      <Rect>This text does not flicker</Rect>

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
