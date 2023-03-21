import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle={"About Me"}>
      <p>Hi there! 1'm the proud creator of this site</p>
    </Layout>
  );
};

// Gatsby Head API.
// This is metadata that helps search engines better know my site.
export const Head = () => <title>About Me</title>;

export default AboutPage;
