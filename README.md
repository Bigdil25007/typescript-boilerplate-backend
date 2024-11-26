# TypeScript Frontend Boilerplate

This is a boilerplate project for building frontend applications using Vite and TypeScript. It includes configurations for ESLint, Prettier, Husky, and Vitest.

## Features

- Vite for building and fast HMR
- TypeScript support
- ESLint for linting
- Prettier for code formatting
- Husky for Git hooks
- Vitest for testing

## Getting Started

### Prerequisites

- Node.js (version specified in `.nvmrc`)
- npm (comes with Node.js)

### Installation

```sh
git clone https://github.com/Bigdil25007/typescript-boilerplate-frontend.git
cd typescript-boilerplate-frontend
npm install
```

## Available Scripts

- `dev` - run on localhost
- `build` - transpile TypeScript to ES6 and bundle the project using Vite
- `preview` - preview the production build locally
- `test` - run tests once using Vitest
- `test:watch` - run tests in watch mode, re-running tests on file changes
- `test:coverage` - run tests and generate a coverage report
- `lint:dev` - lint source files in the `src` directory using ESLint
- `lint:fix` - lint and fix source files in the `src` directory using ESLint
- `lint:build` - run linting with no warnings allowed
- `format` - format modified files using Prettier without staging them
- `format:staged` - format staged files using Prettier and restage them
- `format:all` - reformat all files using Prettier
- `format-check` - check formatting of files using Prettier
- `prepare` - install Husky hooks

### Git Hooks

Husky is configured to run linting, formatting, and tests before each commit. This ensures code quality and consistency.

### Customization

To customize the project, you can modify the following files:

- **TypeScript Configuration**: Modify `tsconfig.json` to change TypeScript compiler options.
- **ESLint Configuration**: Modify `.eslintrc.cjs` to change linting rules and settings.
- **Prettier Configuration**: Modify `.prettierrc` to change code formatting rules.
- **Husky Configuration**: Modify `.husky/pre-commit` to change pre-commit hooks.
- **EditorConfig**: Modify `.editorconfig` to change editor settings.
- **NPM Scripts**: Modify the `scripts` object in `package.json` to add or change npm scripts.

### Project Structure

```
.
├── .editorconfig
├── eslint.config.js
├── .gitignore
├── .husky
│   └── pre-commit
├── .nvmrc
├── .prettierignore
├── .prettierrc
├── package.json
├── tsconfig.json
├── vite.config.js
├── src
│   ├── main.ts
│   └── main.test.ts
└── README.md
```

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
