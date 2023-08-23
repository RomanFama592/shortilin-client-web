# Shortilin

Frontend web project for the "Shortilin" service created with Astro using a hybrid output, it allows the creation of shortened URLs and their redirection.

__you need to raise the backend api to fully use the page.__

_the backend api repository:_
- **https://github.com/RomanFama592/shortilin-backend-api**

<br>


## 📑 Contents:

1. [👩‍💻 **Commands**](#👩‍💻-commands)
2. [🐳 **Ready for Docker**](#🐳-ready-for-docker)
3. [🚀 **Project Structure**](#🚀-project-structure)
4. [👨‍⚖️ **License**](#👨‍⚖️-license)


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

## 🐳 Ready for Docker

This project already includes a Dockerfile to create an image of itself using these commands:

- Exposed port: 10000

1. Move to root of client.

```sh
cd client-web-shortilin
```

2. Create the project's image.

```sh
docker build -t client-web-shortilin .
```

3. Run a container based on that image.

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
│   ├── image-meta-404.png
│   ├── light-off.png
│   ├── light-on.png
│   └── query-selector.js
├── src/
│   ├── components/
│   │    └── header.astro
│   ├── css/
│   │    └── index/
│   │         ├── button-get-url.css
│   │         ├── div-loader.css
│   │         ├── input-url.css
│   │         └── link-to-url.css
│   ├── layouts/
│   │    └── head.astro
│   ├── pages/
│   │    ├── [toRedirect].astro
│   │    ├── 404.astro
│   │    └── index.astro
│   └── utils.js
├── ...
└── tsconfig.json
```

<p align="right"><a href="#top">Back to top 🔼</a></p>
<br>

## 👨‍⚖️ License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right"><a href="#top">Back to top 🔼</a></p>