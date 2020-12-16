# Onix Manual

This project uses [Docusaurus 2](https://v2.docusaurus.io/) to build a React.JS based friendly documentation website for Onix.

The manual is **work in progress** and will be improved overtime.

The online version can be found [here](https://gatblau.github.io/onix).

## Installation

```bash
$ yarn
```

## Local Development

```bash
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
