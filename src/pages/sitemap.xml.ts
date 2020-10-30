import React from "react";
import config from "@config";

const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
      <loc>${config.url}/blog-sitemap.xml</loc>
    </sitemap>
  </sitemapindex>
`;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap());
    res.end();
  }
}

export default Sitemap;
