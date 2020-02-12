import colorPalette from "<styles>/variables/colorPalette";
import fontFamily from "<styles>/variables/fontFamily";

export default `
  /* Anonymous Pro - regular */
  @font-face {
    font-family: 'Anonymous Pro';
    font-style: normal;
    font-weight: 400;
    src: url('fonts/anonymous-pro-v13-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Anonymous Pro Regular'), local('AnonymousPro-Regular'),
        url('fonts/anonymous-pro-v13-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/anonymous-pro-v13-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/anonymous-pro-v13-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('fonts/anonymous-pro-v13-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/anonymous-pro-v13-latin-regular.svg#AnonymousPro') format('svg'); /* Legacy iOS */
  }

  /* Anonymous Pro - bold */
  @font-face {
    font-family: 'Anonymous Pro';
    font-style: normal;
    font-weight: 700;
    src: url('fonts/anonymous-pro-v13-latin-700.eot'); /* IE9 Compat Modes */
    src: local('Anonymous Pro Bold'), local('AnonymousPro-Bold'),
        url('fonts/anonymous-pro-v13-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('fonts/anonymous-pro-v13-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('fonts/anonymous-pro-v13-latin-700.woff') format('woff'), /* Modern Browsers */
        url('fonts/anonymous-pro-v13-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('fonts/anonymous-pro-v13-latin-700.svg#AnonymousPro') format('svg'); /* Legacy iOS */
  }

  /* Exan */
  @font-face {
    font-family: 'ExanModifiedRegular';
    src: url('fonts/ExanModifiedRegular.eot?#iefix') format('embedded-opentype'),  
         url('fonts/ExanModifiedRegular.otf')  format('opentype'),
         url('fonts/ExanModifiedRegular.woff') format('woff'), 
         url('fonts/ExanModifiedRegular.ttf')  format('truetype'), 
         url('fonts/ExanModifiedRegular.svg#ExanModifiedRegular') format('svg');
    font-weight: normal;
    font-style: normal;
  }  

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
    font-family: ${fontFamily.AnonymousPro};
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
    line-height: 1;
    min-height: 100vh;
    scroll-behavior: smooth;
    background-color: ${colorPalette.blue700};
    color: ${colorPalette.blue300};
    position: relative;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fontFamily.Exan};
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
