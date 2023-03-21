import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle={"About Me"}>
      <p>Gatsby Tutorial</p>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
