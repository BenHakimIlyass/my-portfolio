export const articles = [
  {
    id: 661,
    color: "#212023",
    title: `React custom hooks`,
    spoiler: `In this article, we are going to be talking about publishing react custom hooks to NPM.`,
    src: `https://images.unsplash.com/photo-1541544181051-e46607bc22a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`,
    body: [
      {
        p: `Since I started working on real projects, I found myself looking for predefined packages from NPM community, it’s all too easy to go crazy with downloading and importing NPM packages and end up with megabytes of JavaScript. `,
      },
      {
        p: `And that can make problems as this weighs for every client (high or low end), very possible delaying them or most likely preventing them from doing the right job.`,
      },
      { quote: "Bad for them, worse for you" },
      { p: `And here, I decided to start writing my own packages so that I can use them in the future.` },
      { h2: `Writing a custom hook` },
      {
        p: `When I was looking for a package that can make my Header component (Navbar) fixed on the top, hide it when scrolling down, and pin it each time I scroll up, I found a lot of useful packages, but the problem is each one costs +10kb as a minified bundle (that means +35kb of unpacked size), and that's a lot for this feature. `,
      },
      {
        p: `My idea was about to create a react custom hook that returns the state of the Header logic, the first try was something like that:`,
      },
      { h3: `Useheadroom hook` },
      {
        code: `2a356d49a140714551e8f224fbcae725`,
      },
      { h3: `Usage` },
      {
        code: `0cef878a036197683644f2c10f57cad3`,
      },
      { p: `It serves the need with less than 300b of Javascript.` },
      {
        p: `After some researches, I noticed that the majority of other packages provide some methods and values such as:`,
      },
      { bulleted: ["onHeaderPinned", "onHeaderUnpinned", "onHeaderFixed", "onUnHeaderfixed", "fixAtValue "] },
      {
        p: `So after adding those optional props, the hook was looking like that:`,
      },
      { i: `I added a file called helpers for handling all callbacks provided by this hook.` },
      { code: `9ca5a6e3a547e8515e39808169ae6edd` },
      { p: `In the index.js I wrapped every callback inside useEffect hook, for handling changes on each case.` },
      { code: `4d4b634f3c9a2d4d64c2221c38b90d69` },
      { p: `And the usage was something like that, it looks nice isn't?` },
      { code: `e4a04a7be86dbd978613d70bf2dc9f2f` },
    ],
  },

  {
    id: 24,
    title: `Useful utils for styled-components`,
    spoiler: `Cleaning styled component code using our own utils and libs, is an important adition for a good design system.`,
    color: "#db5fb8",
    src: `https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`,
    body: [
      {
        p: `In this article, we are going to be talking about. Cleaning styled component code using your iwn utils and libs.`,
      },
      {
        p: `Since I started working on real projects, I found myself looking for predefined packages from NPM community, it’s all too easy to go crazy with downloading and importing NPM packages and end up with megabytes of JavaScript. `,
      },
    ],
  },
];
