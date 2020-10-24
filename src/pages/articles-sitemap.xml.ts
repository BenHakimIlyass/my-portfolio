import { createUrlFromTitle } from "@utils";
import React from "react";
import config from "@config";
import { articles as data } from "../../data";

const createSitemap = (articles) => `<?xml version="1.0" encoding="UTF-8"?>
 <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${articles.map(
    ({ title, id }) =>
      `<url>
          <loc>${config.url}${createUrlFromTitle({ id, title })}</loc>
          <changefreq>daily</changefreq>
          <priority>0.85</priority>
        </url>
        `,
      )}
</urlset>
`;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap(data));
    res.end();
  }
}

export default Sitemap;
