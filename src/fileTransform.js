/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-undef */
import path from "path";

module.exports = {
  process(_src, filename) {
    return "module.exports = " + JSON.stringify(path.basename(filename)) + ";";
  }
};
