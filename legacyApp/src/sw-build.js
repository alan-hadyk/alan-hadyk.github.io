/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const workboxBuild = require("workbox-build");

// NOTE: This should be run *AFTER* all your assets are built
const buildSW = () =>
  workboxBuild
    .injectManifest({
      globDirectory: "build",
      globPatterns: [
        "**/!(service-worker|precache-manifest.*).{js,css,html,png}"
      ],
      swDest: "build/sw.js",
      swSrc: "src/sw-template.js"
    })
    .then(({ count, size, warnings }) => {
      // Optionally, log any warnings and details.
      warnings.forEach(console.warn);
      console.log(`${count} files will be precached, totaling ${size} bytes.`);
    });

buildSW();
