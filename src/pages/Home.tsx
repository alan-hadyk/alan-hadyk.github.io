import React from "react";

import Header from "<organisms>/Header";
import PageTemplate from "<templates>/PageTemplate";

const Home = (): JSX.Element => (
  <PageTemplate>
    <Header 
      zIndex="layer2"
    />
  </PageTemplate>
);
  
export default Home;
