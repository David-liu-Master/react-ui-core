## Prerequisites

[Node.js](http://nodejs.org/) >= 6 must be installed.

## Installation

- Running `npm install` in the component's root directory will install everything you need for development.

## Demo Development Server

- `npm start` will run a development server with [react-cosmos](https://github.com/react-cosmos/react-cosmos) at [http://localhost:8989](http://localhost:8989) with hot module reloading.

## Running Tests

- `npm test` will run the tests once.

- `npm run test:coverage` will run the tests and produce a coverage report in `coverage/`.

- `npm run test:watch` will run the tests on every change.

## Building

- `npm run build` will build the component for publishing to npm and also bundle the demo app.

- `npm run clean` will delete built resources.

## Export Cosmos

- `npm run cosmos:export` will bundle cosmos.
