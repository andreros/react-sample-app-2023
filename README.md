# react-sample-app-2023

React Sample Application built with 2023 technologies. THIS APPLICATION WILL NO LONGER BE MAINTAINED and is only here for references purposes.

## Application purpose

React sample application purpose is to help bootstrap new React projects in a simple and fast way. This application can also be considered a boilerplate application with all the preferred development configurations, folder structure and tools in place and ready to start coding.

Please, bear in mind that this application is always evolving and new tools may be added along the way.

## Application Tech Stack

-   `React` framework (with Typescript) for the overall application development;
-   `Typescript` coding language;
-   `SASS` style pre-processor to build the needed application styles;
-   `Axios` to communicate with the backend API;
-   `DotEnv` to load project environment variables;
-   `PicniCSS` lightweight CSS framework for UI styling;

## Application Support and Tools

-   `Webpack` to bundle the application and serve it in development mode;
-   `Log4Brains` to manage Architectural Decision Record (ADR) and generate static HTML knowledge base;
-   `Statoscope` to generate reports about the application;
-   `husky` to automate git hooks;

## Application Code Quality

-   `ESLint` for code linting;
-   `Prettier` for code formatting;
-   `StyleLint` for style linting;

## Application Testing tools

-   `Jest` javascript testing framework;
-   `React Testing Library` testing framework for working with React components;

## Application scripts

### Installation and application bootstrap

From the project root folder, please execute the following commands in a terminal window:

```bash
# install the application dependencies
npm i

# start the application in development mode
npm start
# or
npm run dev

# build a version of the application for distribution
npm run build
```

### Code Quality

```bash
# run prettier automatic file formatter
npm run prettier-format-all

# run ESLint
npm run lint

# run ESLint and fix all automatically fixable problems
npm run lint:fix

# run StyleLint
npm run lint:css

# run StyleLint and fix all automatically fixable problems
npm run lint:css:fix

# run all the necessary commands before a code commit
npm run pre-commit
```

### Testing

```bash
# run the application unit tests
npm run test

# run the application unit tests in file watch mode
npm run test:watch

# run the application unit tests and present a code coverage report
npm run test:coverage
```

### Architecture Decisions Record (ADR)

```bash
# add a new entry to the application ADR
npm run adr:add

# serve the application ADR for consulting in a browser
npm run adr:serve
```
