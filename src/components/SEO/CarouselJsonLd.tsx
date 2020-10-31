import Head from "next/head";
import React, { FC } from "react";

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

export default CarouselJsonLd;
