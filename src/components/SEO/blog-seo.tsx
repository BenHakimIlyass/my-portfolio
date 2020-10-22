import Head from "next/head";
import React, { FC } from "react";
import { NextSeo } from "next-seo";
import config from "@config";
import { createUrlFromTitle } from "@utils";

const BlogSEO = ({ articles }) => (
  <>
    <NextSeo
      title="Ilyass Ben Hakim"
      openGraph={{
        title: "Blog",
        images: [
          {
            url: `${config.url}/blog_seo.png`,
            width: 800,
            height: 600,
            alt: "Blog page preview",
          },
        ],
      }}
    />
    <CarouselJsonLd
      url={`${config.url}/blog`}
      items={articles.map(({ id, title }, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${config.url}/blog/${createUrlFromTitle({ id, title })}`,
      }))}
    />
  </>
);

const markup = (jsonld: string) => ({ __html: jsonld });

export interface CarouselJsonLdProps {
  url: string;
  items: ReadonlyArray<{
    position: number;
    "@type": "ListItem";
    url: string;
  }>;
}

const CarouselJsonLd: FC<CarouselJsonLdProps> = ({ items, url }) => {
  const jslonld = JSON.stringify({
    "@context": `http://schema.org`,
    "@type": "ItemList",
    itemListElement: items,
  });

  return (
    <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={markup(jslonld)} key="jsonld-blog" />
    </Head>
  );
};

export default BlogSEO;
