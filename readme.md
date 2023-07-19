## Installation

```bash
$ npm install
```

Run the following command (A postgres db will be exposed on port 3001)

```bash
$ docker-compose up
```

With the progress db running use the following command to setup the development database

```
$ npx sequelize-cli db:migrate
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

## Test

```bash
# unit tests
$ npm run test

## Testing the API

Use the exported postman collection (V2.1) provided with the API endpoints.