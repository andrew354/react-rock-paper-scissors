<div align="center">
  <h2>Template <br/> Template + Vite + React + Typescript</h2>
</div>

## Table of Contents

`template-vite-react-typescript`

- [Starter template](#starter-template)
- [Project setup](#project-setup)
- [Project distribution](#project-distribution)
- [Micro Frontend Architecture](#micro-frontend-architecture)

## Starter template

This starter template includes:

- [Vite](https://vitejs.dev/guide/)
- [React v18](https://beta.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/docs/handbook/react.html)
- [React Router](https://reactrouter.com/en/main)
- [React i18n](https://react.i18next.com/latest/using-with-hooks)
- [Tailwind CSS](https://tailwindcss.com/docs/configuration)
- Linters:
  - [eslint](https://eslint.org/) + [prettier](https://prettier.io/) + [stylelint](https://stylelint.io/) + [lintstaged](https://github.com/okonet/lint-staged)
  - [prettier-plugin-tailwindcss](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) - Automatic Class Sorting with Prettier
  - [commitlint](https://commitlint.js.org/) to check your commit messages with the [conventional commit format](https://conventionalcommits.org/)
- [Standard Version](https://github.com/conventional-changelog/standard-version) - Automate versioning using [semver](https://semver.org/) and CHANGELOG generation powered by [Conventional Commits](https://conventionalcommits.org/)

### Roadmap

:warning: The below dependencies marked as _optional_ are not included in the package.json.

- Form validation:
  - [React Hook Form](https://react-hook-form.com/)
  - [Yup](https://www.npmjs.com/package/yup) - optional for form validation
- HTTP client:
  - [Axios](https://axios-http.com/)
- Testing:
  - [Jest](https://jestjs.io/)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- Store (state management pattern):
  - [React Context API](https://beta.reactjs.org/reference/react#context-hooks)
  - [MobX](https://mobx.js.org/react-integration.html) - optional
- Docker - optional
- Components Library :
  - [Headless UI](https://headlessui.com/) - optional
  - [Material UI](https://mui.com/material-ui/getting-started/overview/) - optional

## Project setup

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)

### Node version

- [Node v18.12.1](https://nodejs.org/en/blog/release/v18.12.1/):

Manage node version with [nvm](https://github.com/nvm-sh/nvm)

```sh
nvm use 18
```

or install the node version with [nvm](https://gist.github.com/d2s/372b5943bce17b964a79)

### Clone the repository and install dependencies

```sh
git clone https://github.com/Dekalabs/template-vite-react-typescript.git
```

```sh
yarn
```

### Open project in the browser

```sh
yarn dev
```

### Run test

```sh
yarn test
```

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Micro Frontend Architecture

This is just extension of micro services architecture to front-end layer. As project grows with multiple functionalities it becomes unmanageable in terms of dependencies, builds deployments.

Based on micro frontends concept front-end app will be separated to different use case areas. This use case area either have responsible front team members or in big applications separate teams handling end-to-end micro areas.

- [src](src/README.md)
  - [`assets`](src/assets/README.md)
  - [`components`](src/components/README.md)
  - [`hooks`](src/hooks/README.md)
  - [`i18n`](src/i18n/README.md)
  - [`pages`](src/pages/README.md)
    - [`landingPage`](src/pages/landindPage/README.md)
      - [`components`](src/pages/landindPage/components/README.md)
      - [`__test__`](src/pages/landindPage/__test__/README.md)
      - [`LandingPage.tsx`](src/pages/landindPage/LandingPage.tsx/README.md)
  - [`providers`](src/providers/README.md)
  - [`router`](src/router/README.md)
  - [`services`](services/README.md)
  - [`styles`](src/styles/README.md)
