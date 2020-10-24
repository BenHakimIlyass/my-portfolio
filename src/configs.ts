const url = `https://ilyassbh.me`;
const configs = {
  animationDelay: 2000,
  ease: [0.6, 0, 0, 1],
  url,
  seo: {
    title: "Ilyass Ben Hakim | Frontend developer",
    description:
      "Hi dear! I'm Ilyass Ben Hakim, a software engineer, self-taught frontend developer and UI UX designer.",
    openGraph: {
      type: "website",
      url,
      site_name: "Ilyass Ben Hakim",
      images: [
        {
          url: `${url}/seo_thumbnail.png`,
          width: 800,
          height: 600,
          alt: "Ilyass's Portfolio preview image",
        },
      ],
    },

    twitter: {
      handle: "@dinasso1",
      cardType: "summary_large_image",
    },
  },
};
export default configs;
