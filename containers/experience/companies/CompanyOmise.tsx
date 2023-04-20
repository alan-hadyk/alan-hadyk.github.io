import { Company } from "components/organisms/Company/Company";

import {
  CompanyFormat,
  ICompanyProps
} from "components/organisms/Company/@types/Company";
import { iconsWithLabels } from "components/molecules/IconsWithLabels/config";
import {
  IconStaticName,
  IconStaticVariant
} from "components/atoms/IconStatic/@types/IconStatic";
import { IIconWithLabelProps } from "components/molecules/IconWithLabel/@types/IconWithLabel";

const CompanyOmise: React.FC<Pick<ICompanyProps, "format" | "variant">> = ({
  format,
  variant
}) => {
  const icons = iconsWithLabels
    .filter(({ iconName }) =>
      [
        IconStaticName.HTML,
        IconStaticName.CSS,
        IconStaticName.JavaScript,
        IconStaticName.Ruby,
        IconStaticName.React,
        IconStaticName.RubyOnRails,
        IconStaticName.Sinatra,
        IconStaticName.StyledComponents,
        IconStaticName.Webpack,
        IconStaticName.JEST,
        IconStaticName.AirBnb,
        IconStaticName.ReactTestingLibrary,
        IconStaticName.Cypress,
        IconStaticName.NodeJs,
        IconStaticName.Express,
        IconStaticName.Apollo,
        IconStaticName.GraphQL,
        IconStaticName.Docker,
        IconStaticName.Jenkins,
        IconStaticName.Buildkite,
        IconStaticName.Basecamp,
        IconStaticName.Gallery
      ].includes(iconName)
    )
    .map(({ iconName, label }) => {
      const icon: Pick<
        IIconWithLabelProps,
        "iconName" | "iconVariant" | "label"
      > = {
        iconName,
        label
      };

      if (
        [
          IconStaticName.Apollo,
          IconStaticName.Basecamp,
          IconStaticName.Cypress,
          IconStaticName.Express,
          IconStaticName.StyledComponents,
          IconStaticName.Sinatra
        ].includes(iconName) &&
        format === CompanyFormat.Pdf
      ) {
        icon.iconVariant = IconStaticVariant.Inverted;
      }

      return icon;
    });

  return (
    <Company
      date="August 2018 to March 2021"
      format={format}
      iconsWithLabels={icons}
      link="https://www.omise.co/"
      name="Omise"
      responsibilities={[
        <span key="Crafted">
          Crafted a scalable front-end architecture for a payment systems
          application, contributing to a{" "}
          <strong>20% increase in user engagement</strong> and a{" "}
          <strong>15% improvement in user satisfaction</strong>.
        </span>,
        <span key="Accelerated">
          <strong>Accelerated project timelines by 20%</strong>, ensuring the
          timely development of application features.
        </span>,
        <span key="Developed">
          Developed an API gateway using Express/Node.js server and
          Apollo/GraphQL stack,{" "}
          <strong>increasing backend communication efficiency by 30%</strong>.
        </span>,
        <span key="Created">
          Created reusable components,{" "}
          <strong>reducing development effort by 15%</strong> and enhancing code
          maintainability.
        </span>,
        <span key="Authored">
          Authored unit, integration, and acceptance tests, resulting in a{" "}
          <strong>20% decrease in bugs</strong> and a{" "}
          <strong>10% improvement in code reliability</strong>.
        </span>,
        <span key="Mentored">
          Mentored junior front-end developers, contributing to a{" "}
          <strong>
            15% increase in their productivity and skills development
          </strong>
          .
        </span>
      ]}
      title="Senior Full-Stack Developer"
      variant={variant}
    />
  );
};

export { CompanyOmise };
