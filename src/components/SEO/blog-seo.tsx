import React from "react";
import { NextSeo } from "next-seo";
import config from "@config";
import { createUrlFromTitle } from "@utils";
import CarouselJsonLd from "./CarouselJsonLd";

const BlogSEO = ({ articles }) => (
  <>
    <NextSeo
      title="Ilyass Ben Hakim - blog"
      openGraph={{
        url: `${config.url}/blog`,
        title: "Ilyass Ben Hakim - blog",
        description: "You love reading? This might be a good page for you!",
        images: [
          {
            url: `${config.url}/blog_seo.png`,
            width: 800,
            height: 600,
            alt: "Blog preview",
          },
        ],
      }}
    />
    <CarouselJsonLd
      url={`${config.url}/blog`}
      items={articles.map(({ id, title }, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${config.url}/${createUrlFromTitle({ id, title })}`,
      }))}
    />
  </>
);

export default BlogSEO;
