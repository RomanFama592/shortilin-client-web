# Shortilin

Frontend web project for the "Shortilin" service created with Astro using a hybrid output, it allows the creation of shortened URLs and their redirection.

__you need to raise the backend api to fully use the page.__

_the backend api repository:_
* (URL GITHUB) **add url**

<br>

## 👩‍💻 Commands

Clarification, all commands to execute the project have the "--host" flag to lift the project on your private network.

<br>

Allows building and running the project.
```sh
npm start
```

<br>

Allows running the project in development mode.
```sh
npm run dev
```

<br>

Allows only building the project.
```sh
npm run build
```

<br>

Allows only running the project if it's already built.
```sh
npm run preview
```

<p align="right"><a href="#top">Back to top 🔼</a></p>
<br>

## 🐳 Using Docker

This project already includes a Dockerfile to create an image of itself using these commands:

- Exposed port: 10000

1. Create the project's image.

```sh
docker build -t client-web-shortilin .
```

2. Run a container based on that image.

```sh
docker run -p 9000:10000 client-web-shortilin
```

<p align="right"><a href="#top">Back to top 🔼</a></p>
<br>

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   ├── favicon.svg
│   └── query-selector.js
├── src/
│   ├── layouts/
│   │    └── html.astro
│   ├── pages/
│   │    ├── [toRedirect].astro
│   │    └── index.astro
│   └── utils.js
└── package.json
```

<p align="right"><a href="#top">Back to top 🔼</a></p>
<br>

## 👨‍⚖️ License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right"><a href="#top">Back to top 🔼</a></p>