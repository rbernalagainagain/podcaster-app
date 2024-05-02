# Podcaster | La plataforma de podcasting que necesitabas

This repository provides a deployment guide that demonstrates the Podcaster application. It offers a detailed step-by-step guide to configuring, modifying and using the application.

To start working on it:

`npm install`

To start the application in development mode:

`npm run dev`

To start the application in production mode:

`npm run preview`

The application has two modes for compiling the code, development and production. To start the development mode:

`npm run build:dev`

To start the production mode:

`npm run build`

## Features

### Cache / Service Worker

The application has a strong default cache. For this functionality it is important that the browser you use allows the use of service worker.

## Architecture

**SOLID** principles have been followed, with a **Hexagonal / DDD architecture** with Use Cases.

To Inject dependencies, use the **Locator pattern**.

**_The application is built with the following technologies:_**

- [React](https://reactjs.org/)
- CSS Modules
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [Node.js](https://nodejs.org/) (version 20 or higher)

## Tests

The application has unit tests and integration tests. To run the tests:

**_The tests are built with the following technologies:_**

- [Vitest](https://vitejs.dev/guide/features.html#testing)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Cypress](https://www.cypress.io/)
- [Ts-mockito](https://www.npmjs.com/package/ts-mockito)

Unit tests && Component tests:

`npm run test`

End-to-end tests:

`npm run cy:open`
