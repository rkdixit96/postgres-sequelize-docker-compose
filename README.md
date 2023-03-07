# Simple express service integrated with Postgres using Sequelize ORM

## Getting Started
```bash
# Install dependencies
npm install
```
```bash
# Build the images
docker-compose up
```
```bash
# Run the migrations from outside the container
NODE_ENV=migration ./node_modules/.bin/sequelize db:migrate
```

```bash
# Get users
curl --location 'localhost:3000/users'
```