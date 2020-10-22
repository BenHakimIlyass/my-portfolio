import { BlogJsonLd, NextSeo } from "next-seo";
import React from "react";
import config from "@config";

const ArticleSEO = ({ article }) => (
  <>
    <NextSeo
      title={`Ilyass Ben Hakim | ${article.title}`}
      description={article.spoiler}
      canonical={`/blog/${article.title.replace(/ /g, "_")}?_id=${article.id}`}
      openGraph={{
        title: article.title,
        description: article.spoiler,
        url: `${config.url}/blog/${article._id}`,
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
      url={`${config.url}/blog/${article.title.replace(/ /g, "_")}?_id=${article.id}`}
      title={article.title}
      images={[article.thumbnail]}
      datePublished={article.createdAt}
      dateModified={article.lastEdit}
      authorName="Ilyass Ben Hakim"
      description={article.description}
    />
  </>
);

export default ArticleSEO;
