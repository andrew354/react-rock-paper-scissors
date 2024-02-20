<div align="center">
  <h2>Rock, Paper, Scissors Game <br/>React + Typescript</h2>
</div>

## Starter template

This starter template includes:

- [Vite](https://vitejs.dev/guide/)
- [React v18](https://beta.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/docs/handbook/react.html)
- [React Router](https://reactrouter.com/en/main)
- [Tailwind CSS](https://tailwindcss.com/docs/configuration)
- Linters:
  - [eslint](https://eslint.org/) + [prettier](https://prettier.io/) + [stylelint](https://stylelint.io/) + [lintstaged](https://github.com/okonet/lint-staged)
  - [prettier-plugin-tailwindcss](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) - Automatic Class Sorting with Prettier

### Clone the repository and install dependencies

```sh
git clone https://github.com/andrew354/react-rock-paper-scissors
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

### Advantages and disadvantages of the design.

- Given the requirements for the project I've set up a global provider for the entire application, called _GameProvider_. The provider essentially contains the state related to the _TotalScore_, and a setter function that allows to update the state.
  The main logic of the game is contained in a custom hook, called _useGameLogic_.
  Regarding the design pattern, I tried as much possible to separate those components that contain the actual logic from those components that are only use for representational porpuses. I've also used custom hooks to extract and isolate the core logic of the application.
  The main advantage in the design is that the majority of the components have little logic and are easy to test and to maintain.
  The main disadvantages is that it is not scalable and there is not the implication of a state management such as redux.
  Moreover, it lack the implementation of a web server where to store the actual state, instead the information are kept in the localStorage to enhance the user experience and avoid to delete the TotalScore when refreshing the page.

  Over the last weekend I've created another repository and implement a full-stack approach for the same application, using Nextjs, GraphQl and MongoDb. I've choosen not to send this [repo](https://github.com/andrew354/rock-paper-scissors) since I did not include the test.

## Structure of the project

- public
- src
  - components
  - features
  - hooks
  - pages
    - landingPage
      - components
      - **test**
      - Landing.tsx
  - providers
  - router
  - styles
