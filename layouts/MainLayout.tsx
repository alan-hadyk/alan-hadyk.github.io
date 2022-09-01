import { PageTemplate } from "components/templates/PageTemplate";
import { childrenPropTypes } from "helpers/propTypes/children";
import { IMainLayoutProps } from "layouts/@types/MainLayout";
import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";

const MainLayout: React.FC<IMainLayoutProps> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <PageTemplate as="main">{children}</PageTemplate>
  </>
);

MainLayout.propTypes = {
  children: childrenPropTypes.isRequired,
  title: PropTypes.string.isRequired
};

export { MainLayout };
