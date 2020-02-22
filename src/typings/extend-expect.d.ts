// tslint:disable:no-namespace
// eslint-disable-next-line no-unused-vars
declare namespace jest {
  interface Matchers<R> {
    toHaveStyleRule: import("node_modules/jest-styled-components/typings/index.d.ts").jest.Matchers["toHaveStyleRule"];
  }
}