import React from "react";
import ReactGlobe from "react-globe";

import colorPalette from "<styles>/variables/colorPalette";

const Globe = (): JSX.Element => (
  <ReactGlobe
    globeOptions={{
      enableBackground: false,
      enableClouds: false,
      enableGlow: true,
      glowCoefficient: 0.05,
      glowColor: colorPalette.white,
      glowPower: 6,
      glowRadiusScale: 0.25,
      texture: "/portfolio/Hologram.png"
      // texture: "https://raw.githubusercontent.com/alan-hadyk/portfolio/master/src/assets/images/miniature-earth.svg"
    }}
  />
);
  
export default Globe;