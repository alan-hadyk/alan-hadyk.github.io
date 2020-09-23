import globalStyle from "<styles>/globalStyle";

describe("styles / globalStyle", () => {
  test("should have correct global styling", () => {
    expect(globalStyle.replace(/\s/g,"")).toEqual(`
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
        font-family: 'Anonymous Pro', monospace;
      }

      /* HTML5 display-role reset for older browsers */
      article, aside, details, figcaption, figure, 
      footer, header, hgroup, menu, nav, section {
        display: block;
      }

      html {
        font-size: 62.5%;
      }

      * {
        -webkit-tap-highlight-color: transparent;
      }

      *, 
      *:after, 
      *:before, 
      *::before, 
      *::after {
        box-sizing: border-box;
        outline: 0;
      }

      body {
        background-color: #1e2224;
        color: #78b0b5;
        line-height: 1;
        min-height: 100vh;
        overflow-x: hidden;
        position: relative;
        scroll-behavior: smooth;
      }

      ::selection { 
        background: #bcd8db; 
        color: #1e2224; 
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: ExanModifiedRegular, monospace;
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
    }`.replace(/\s/g,""));
  });
});
