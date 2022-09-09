import { trimTemplateLiteral } from "helpers/strings/trimTemplateLiteral";

const Spinner: React.FC = () => (
  <div
    className={trimTemplateLiteral(`
      animate-rotation-slower
      border-[0.25vh] border-solid border-blue300
      inline-block
      h-[12vh] w-[12vh]
    `)}
  />
);

export { Spinner };
