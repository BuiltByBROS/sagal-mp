
# Landing page form MP

IMPORTANT: To run without docker, remember to change redis host to "localhost" on config file.

IMPORTANT: On config file you must replace the client_id and client_secret for the actual account that will be used for receive payments. Also replace localhost on success and failure URL's for the correct domain. Notification URL must be set also on mercadopago seller account.

## Features

- Webpack development and production environment configuration
- Webpack SCSS configuration
- React Hot loader
- React Router configuration
- React, Redux configuration

## Getting Started

Clone Repo

````
git clone https://github.com/BuiltByBROS/sagal-mp.git
````

npm install dependencies

````
cd sagal-mp

npm install
````

### Start development server with hot reloading

````
npm run dev
````

### Production

Build for production

````
npm run build
````

Start production server

````
npm run start
````

I'm using pm2 for production server, you should install it on server via 'npm install pm2 -g'.
if you don't want to use pm2, just change pm2 with node in package.json file in scripts section.

### To run on docker

````
docker-compose build
````

````
docker-compose up
````
