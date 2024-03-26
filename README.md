# museum-redesign

Redesigning the website for the National Museum of Computing.

## Why Redesign?

I decided to have a go at redesigning the website for the National Museum of Computing in Bletchley Park. Before a recent visit, I went to book tickets and was quite disappointed:

- Basic site design: The site is not very well designed, lacking in clear branding, navigation and messaging. This is not very appealing to prospective visitors, especially young people like myself.
- Mixture of fonts: the site uses Arial and Proxima Nova, both of which are poor choices in my opinion.
- Hosted on Squarespace: Site should not be built and hosted on Squarespace - it has high fees and is hard to create a custom looking site on. A site built in React would be better. A CMS (like Wordpress) would allow us to provide easily updateable content.
  - Squarespace sites are normally associated with poor performance, too. This was confirmed when I ran Google Lighthouse on the site and received a performance score of just 28.
- Confusing navigation: The navigation is not well organised and lacks clarity.

  - on mobile, the hamburger icon should change to an X when clicked, to close the menu.

- Text heavy design: The website is very heavy on text, particular on the homepage when viewed on mobile.
- Calls to action: The landing page could do with some clearer calls to action to encourage visitors to explore the site, volunteer, or donate to the museum.
- Accessibility: The site lacks several accessibility features. It receives a score of 88 on Google Lighthouse, which while not the worst, could easily be improved with some small changes such as not using green text on a white background (lacks sufficient contrast)

## Planning

- I found examples of museum websites and designs I liked and gathered them on Are.na, and then a Figma board.
- Using the information and pieces above as a guide, I set about redesigning the site in Figma using wireframes. This proved very exciting because I could take elements that I liked from my moodboards and use them in my draft site.
- I decided to use Fira Sans for the titles and Fira Mono for the text. I was hoping to use just a monospace font, but Fira Sans proved the most readable for the titles - a nice midway point between a monospace and a (neo-grotesque) sans-serif font, and Fira Mono allowed me to use a monospace font for the text. It's good to have some differentiation there but know they are part of the same family. I might explore other options in the Fira family too.
- I redesigned the logo for the museum, creating something very simple and a bit more readable to use as the website's title.
- For the image carousels, I initially tried to use NPM packages to make an image carousel with React but this proved unsuccessful. I then tried to use DaisyUI for this, but realised it added too much extra complexity to my project (themes etc.) and that [Keen Slider](https://keen-slider.io) would be a better fit.

## Building

## Debugging

# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
