export const articles = [
  {
    id: 661,
    createdAt: "01 Aug 2020",
    lastEdit: "22 Oct 2020",
    color: "#FF7E06",
    tags: ["React", "React hooks", "React custom hooks", "functional programming"],
    title: `Publishing react custom hooks to npm`,
    spoiler: `In this article, we are going to be talking about publishing react custom hooks to NPM.`,
    thumbnail: `https://images.unsplash.com/photo-1541544181051-e46607bc22a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`,
    body: [
      {
        p: `Since I started working on real projects, I found myself looking for predefined packages from NPM community, it’s all too easy to go crazy with downloading and importing NPM packages and end up with megabytes of JavaScript. `,
      },
      {
        p: `And that can make problems as this weights for every client (high and low end), very possible delaying them or most likely preventing them from doing the right job.`,
      },
      { quote: "Bad for them, worse for you" },
      { p: `And here, I decided to start writing my own packages so that I can use them in the future.` },
      { h2: `Writing a custom hook`, link: `https://reactjs.org/docs/hooks-custom.html` },
      {
        p: `When I was looking for a package that can make my Header component (Navbar) fixed on the top, hide it when scrolling down, and pin it each time I scroll up, I found a lot of useful packages, but the problem is each one costs +10kb as a minified bundle (that means +35kb of unpacked size), and that's a lot for this feature. `,
      },
      {
        p: `My idea was about to create a react custom hook that returns the state of the Header logic, the first try was something like that:`,
      },
      { h3: `Useheadroom hook`, link: `https://www.npmjs.com/package/react-useheadroom` },
      {
        image: {
          alt: "Fishing hook",
          src: `https://images.unsplash.com/photo-1570353825353-5daea21cdc4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`,
        },
      },
      {
        gist: `2a356d49a140714551e8f224fbcae725`,
      },
      { h3: `Usage` },
      {
        gist: `0cef878a036197683644f2c10f57cad3`,
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
      { gist: `9ca5a6e3a547e8515e39808169ae6edd` },
      { p: `In the index.js I wrapped every callback inside useEffect hook, for handling changes on each case.` },
      { gist: `4d4b634f3c9a2d4d64c2221c38b90d69` },
      { p: `And the usage was something like that, it looks nice isn't it?` },
      { gist: `e4a04a7be86dbd978613d70bf2dc9f2f` },
      { h2: `Publishing to npm`, link: `https://zellwk.com/blog/publish-to-npm/` },
      {
        link: `https://zellwk.com/blog/publish-to-npm/`,
        p: `Before publishing to NPM, we have to compile our ES6 Javascript code to ES5 using babel.`,
      },
      {
        link: `https://babeljs.io/docs/en/`,
        p: `Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backward-compatible version of JavaScript in current and older browsers or environments.`,
      },
      { p: `So the first step is to add:` },
      { bulleted: [`babel cli`, `babel core`, `babel preset-env`, `babel preset-react`] },
      { i: `As devDependencies.` },
      { code: `yarn add —dev @babel/cli @babel/core @babel/preset-env @babel/preset-react` },
      { p: `Now we have to add a file configuration for babel called .babelrc .` },
      { gist: `a6145474a3f0a3d31f4952af680c5e20` },
      { p: `Next, we need to update our package.json by adding the build command.` },
      { gist: `e9f8700c01c9a7bd264cc34651f4f275` },
      {
        p: `And now we have to run yarn run build or yarn build, so after that, we will see a new index.js file in our project folder.`,
      },
      { p: `In package.json we have to defined the index.js file as the main file of this package.` },
      { code: `"main": "index.js"` },
      {
        image: {
          alt: "Magic",
          src: `https://images.unsplash.com/photo-1521763041807-c5f24b03ade7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`,
        },
      },
      {
        p: `After publishing to NPM, I tried importing my hook, and Houuuyah! It works. And it's live now.`,
        link: `https://codesandbox.io/s/tender-snowflake-zf79v`,
      },
      { i: `Next to do : Typescript support.` },
    ],
  },

  {
    id: 24,
    createdAt: "20 Oct 2020",
    lastEdit: "22 Oct 2020",
    tags: ["React", "styled-components", "CSSinJS"],
    title: `Useful utils for styled-components`,
    spoiler: `Cleaning styled component code using our own utils and libs is an important addition to a good design system.`,
    color: "#db5fb8",
    thumbnail: `https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
    body: [
      {
        p: `In this article, we are going to be talking about cleaning styled component code using your own utils and libs.`,
      },
      {
        h2: `Styled-component`,
        link: `https://styled-components.com/`,
      },
      {
        p: `First of all, let's have a quick idea about what is styled-components?`,
      },
      {
        p: `So the concept of this library is to make styling React JS component easier by putting CSS inside Javascript, did it start clicking in your mind? not yet? OK!`,
      },
      {
        p: `Here is an example of styled-components:`,
      },
      {
        gist: `d71a3991692d4fa4cb19b0baee38639f`,
      },
      {
        p:
          "Easy is that, we give our component a name, the HTML element that will be rendered e.g `styled.p` and we put the style inside a Template literals.",
      },
      { p: "Let's suppose we need to build a button in `button.js`, so we can use it as a reusable component." },
      { gist: "df60d5dc5e61da8ee62d911f04e1bbb0" },
      {
        p: `Now we have a ready button element to use, and we can just import it and use it where ever we want in our application.`,
      },
      { h2: "Start hacking" },
      { image: { src: "/icons/nerd-hacker.gif", alt: "Nerd Hacker" } },
      { p: "Imagine we need to make a typography utils, which we can use in all text components." },
      { p: "All we have to do is to create a new file `typoUtils.js` or whatever... " },
      {
        link: `https://styled-components.com/docs/api#css`,
        p:
          "Next, we need to define our style blocks using a function provided by styled-components called css it's a helper function to generate `CSS` from a template literal with interpolations.",
      },
      { gist: `af646370c03e878ca35c444f5b58492b` },
      { p: `And now we can import them and use them on our text components.` },
      { gist: "c1649c72d40557acb3f6f3e35433906a" },
      { h4: "I'm still working on this article ..." },
    ],
  },
];
