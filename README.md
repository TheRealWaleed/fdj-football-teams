<h1 align="center"> FDJ football teams Mini-Project ⚽</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://opensource.org/licenses/mit-license.php" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Technical test


## 🛠️ Architecture

This project implements the REST architecture: 
- The API application built with NestJS (the progressive Node.js Framework) connected to a MongoDB database by the ODM Mongoose.
The documentation of the backend's endpoints is available and automatically generated by Swagger `http://localhost:3000/api`. 
To guarantee high availability and efficiency of the backend APIs we enabled the cache system. 
- The front-end application built with Angular v11 using the **SSR** (**S**erver **S**ide **R**endering) mechanism 
to ensure that the application can be quickly and effectively crawled and indexed by search engines and ready for production. 
We handle server-side errors with the `http-error` interceptor to provide a better **UX** (**U**ser-**E**xperience).
For the **UI** we used the CSS framework TailwindCSS to create a mobile-friendly application.


## 🏁 Install

Make sure you have:

- Docker up and running
- Copy `.env.dist` to `.env` at the api folder
- If you change any port in docker env file, you must reflect them on package's scripts

Before of all, install the dependencies

```sh
npm install
cd api && npm i
cd ../front && npm i
```

## 🧁 Usage

To lunch the database 

```sh
 docker-compose up
```
The front-end  and the backend
```sh
cd api/ && npm start
#then
cd front && npm run build:ssr
#then
npm run serve:ssr 
```

## Author

👤 **Dridi Waleed**

## 📝 License

This project is [MIT](https://opensource.org/licenses/mit-license.php) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
