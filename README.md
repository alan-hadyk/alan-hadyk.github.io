# Alan Hadyk's portfolio

## Website: [https://alanhadyk.dev](https://alanhadyk.dev)

[![Netlify Status](https://api.netlify.com/api/v1/badges/bae1837e-2a9b-4ccc-8701-c06585a1e169/deploy-status)](https://app.netlify.com/sites/musing-dijkstra-a44ab4/deploys)

![Portfolio - design](https://raw.githubusercontent.com/alan-hadyk/portfolio/master/portfolio-design.png)

## Available Scripts

In the project directory, you can run:

### `yarn start`
 
Runs the app in the development mode.<br />

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
 
### `yarn build`
 
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn cypress:open`

To install:
```
node_modules\.bin\cypress.cmd install --force
```

Launches E2E tests in `open` mode via Cypress (See [https://docs.cypress.io/](https://docs.cypress.io/) for more information

Alternative (directly in terminal):
```
node_modules\.bin\cypress open --config-file cypress.json
```

### `yarn cypress:run`

Launches E2E tests in `run` mode (headless) via Cypress (See [https://docs.cypress.io/](https://docs.cypress.io/) for more information

### `yarn lint`

Launches the ESLint.

### `yarn lint:fix`

Fixes all ESLint issues.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back! Please don't run this command!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
