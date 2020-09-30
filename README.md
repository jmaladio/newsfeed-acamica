# Newsfeed

Front-end of a newsfeed website, where user can read the lastest news from Argentina's online journals. Data is fetched from [Canillita API](https://github.com/Canillitapp/headlines-api).

This is the second project from the online (due to Covid-19) bootcamp "Advanced Front-End with React" dictated by Acamica and sponsored by Globant (-70% fees 💜).

![GitHub repo size](https://img.shields.io/github/repo-size/jmaladio/newsfeed-acamica?color=%235959a9&style=for-the-badge)

## Usage

The webapp was developed using React 16 and the Create React App aka CRA boilerplate. Redux manages the global states with Redux Thunk as the middleware, Styled Components is used to style the UI components. No hooks allowed in this challenge.

If you want to deploy a fullstack webapp with your own backend and db, just change the API endpoints and check the actions file.

## Develop, Build and Deploy

In order to start working with the app, NodeJS 12.18.4 or more is needed.
Fork and clone the repo, cd to the main folder ans install dependencies:

```
npm install
```

In order to start the development server:

```
npm start
```

Finally, to get a production-ready build:

```
npm run build
```

## To-do list

- [x] [Challenge approved by evaluator](https://imgur.com/a/tiHE2g4)
- [ ] Refactor class components and implement hooks
- [ ] Implement pagination
- [ ] Redesign UI - Refactor UI Components
- [ ] Develop own API
- [ ] Add user authentication and user store
