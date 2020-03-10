import colorPalette from "<styles>/variables/colorPalette";
import fontFamilies from "<styles>/variables/fontFamilies";

export default `
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, button, input {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: ${fontFamilies.AnonymousPro};
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 62.5%;
  }

  *, 
  *:after, 
  *:before, 
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  body {
    background-color: ${colorPalette.blue700};
    color: ${colorPalette.blue300};
    line-height: 1;
    min-height: 100vh;
    position: relative;
    scroll-behavior: smooth;
  }

  ::selection { 
    background: ${colorPalette.blue100}; 
    color: ${colorPalette.blue700}; 
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fontFamilies.Exan};
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    text-decoration: none;
  }
`;
