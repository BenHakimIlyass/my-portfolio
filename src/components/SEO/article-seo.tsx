import { BlogJsonLd, NextSeo } from "next-seo";
import React from "react";
import config from "@config";
import { createUrlFromTitle } from "@utils";

const ArticleSEO = ({ article }) => (
  <>
    <NextSeo
      title={`Ilyass Ben Hakim | ${article.title}`}
      description={article.spoiler}
      canonical={createUrlFromTitle({ id: article.id, title: article.title })}
      openGraph={{
        title: article.title,
        description: article.spoiler,
        url: `${config.url}${createUrlFromTitle({ id: article.id, title: article.title })}`,
        type: "article",
        article: {
          publishedTime: article.lastEdit,
          tags: article.tags,
          authors: [`Ilyass Ben Hakim`],
        },
        images: [
          {
            url: article.thumbnail,
            alt: article.title,
          },
        ],
      }}
    />
    <BlogJsonLd
      url={`${config.url}${createUrlFromTitle({ id: article.id, title: article.title })}`}
      title={article.title}
      images={[article.thumbnail]}
      datePublished={article.createdAt}
      dateModified={article.lastEdit}
      authorName="Ilyass Ben Hakim"
      description={article.spoiler}
    />
  </>
);

export default ArticleSEO;
