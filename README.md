# About This Project

## Design 
Link https://www.figma.com/file/itK1QmuOcnWZTPzo9hqiL6/UI-assignment_Thunkable-(Mobile--tablet)?node-id=0%3A1&t=r0KD3SF5jQyXjgwT-1


## Description

This is a simple app written in:

- React
- Relay as the State Manager and GraphQL client (https://relay.dev/)
- GraphQL (https://graphql.org/)
- graphql-ws for GraphQL Subscription
- Vite (https://vitejs.dev/)
- TypeScript (https://www.typescriptlang.org/)
- CSS
- Apollo Server (https://www.apollographql.com/docs/apollo-server/)

## Some changes over the design

- The backend code with graphql subscription that can synchronize the change across sessions
- The warning dialog in mobile view is replaced by a Bottom Sheet.
- The error is displayed in a snackbar.

## How to run

1. Clone the repo
2. Run `npm install`
3. Run `npm run dev`

## How to build for production

This is my experiment with vite + react 18 SSR, the server.js code is not great at the moment, please disregard it as I
don't have time to refactor it. I will update it later using React. The server code is for SSR follows the guideline here https://vitejs.dev/guide/ssr.html

GraphQL server using Apollo and graphql subscriptions using graphql-ws are also included in this project.

1. Run `npm run build`
2. Run `npm run serve`

## How to test

Open https://localhost:3000

## Folder Structure

- src/backend - GraphQL Resolvers
- src/components - React Components
- src/relay - Relay client code

## How state management works

Relay Store will be the global state store. 
Data is query from the server using GraphQL query.
Changes are made to the backend using GraphQL mutation. After the mutation is done, the data is updated in the Relay Store.
The UI will be updated automatically.
The GraphQL subscription is used to synchronize the change across sessions. You can test by open 2 browsers and make changes in one browser, the other browser will be updated automatically.
