# Bob's Burgers Demo

![](https://media.giphy.com/media/3mV5n5Vgboad2/giphy.gif)

This is a basic demo, using the public Bob's Burgers API:\
https://bobs-burgers-api-ui.herokuapp.com/

It lists characters and episodes.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Demo Deployments

### Live Demo: [https://bobs-burgers-demo.web.app/](https://bobs-burgers-demo.web.app/)

### Component Library: [https://bobs-burgers-storybook.web.app/](https://bobs-burgers-storybook.web.app/)

# Contents

- [Quick Start](#quick-start)
- [Available Scripts](#available-scripts)

# Quick Start

1. clone the repo: `git clone git@github.com:jblossomweb/bobs-burgers-demo.git`
2. navigate to directory: `cd bobs-burgers-demo`
3. install dependencies: `yarn`
4. start dev server: `yarn start`
5. open your browser to [http://localhost:3000](http://localhost:3000)

# Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:ci`

Runs the test runner once in CI mode (no colors).\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:coverage`

Runs the test runner once, and generates a coverage report.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn lint`

Runs the linter from the command line.

### `yarn storybook`

Runs storybook in dev mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn storybook:build`

Builds the storybook for production to the `.storybook/build` folder.\
Your storybook is ready to be deployed!

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn Storybook, check out the [Storybook documentation](https://storybook.js.org/docs).

To learn TailwindCSS, check out the [Tailwind documentation](https://tailwindcss.com/docs).

To learn Typescript, check out the [Typescript documentation](https://www.typescriptlang.org/docs).

---

## Original Requirements

This code sample will be used to evaluate your understanding of foundational frontend concepts and as a way for you to demonstrate your coding style, approach to application architecture, and implementation of product requirements. You will be asked to describe your work in the live interview and discuss the decision making behind your approach.

There are no "gotchas" in this exercise. The only things we are looking for are listed below.

## Sample Overview

Please create a web app that uses a [public api](https://github.com/public-apis/public-apis) to display a list of entities. When an individual entity is clicked on, navigate to a separate URL that displays more details about that entity. This app should have a fixed navigation containing a link that returns the user to the list view.

## Technical Requirements

This app should:

- Use [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/). Using tools such as [Next.js](https://nextjs.org/) or [Create React App](https://create-react-app.dev/) will not positively or negatively affect your evaluation. Please use them if you feel it will save you time.
- Implement a routing solution of your choice.
- Unit test multiple files. Complete coverage isn't necessary, but there should be a large enough sample size to demonstrate your approach to writing unit tests. Roughly 30% coverage should be plenty. Less than that is fine if you feel it still represents your approach well.
- Use any and all other dependencies that are useful to you.

## Style Requirements

Implement a design of your choice. Use whatever style solution you prefer. You will not be judged on how pretty the application is.

Your style implementation should:

- Demonstrate a consistent ideology when it comes to naming and structure.
- Allow individual components to be modular and reused easily in various contexts.
- Show a solid understanding of different display and positioning types (i.e. use [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)).
- Be detail oriented and intentional in how spacing is applied to individual elements. Make sure your padding and margins are interacting as you intend them to.
- Respond to different browser widths.
- Look and function similarly on Chrome, Firefox, and Safari. Slight differences are fine.

## Delivery

Please put your project on GitHub and provide a link to your contact at Bitly. Please include a README describing how to install and run your app.
