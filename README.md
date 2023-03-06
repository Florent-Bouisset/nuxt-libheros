# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup
- Install Node version 16
- Install Docker

### Run the following commands:


#### Install node dependencies
```bash
npm install
```

#### Run the mongo database:
```
docker-compose up -d
```

#### Initialize the database
```
npm run seedDb
```

#### Start the app
Start the development server on http://localhost:3000

```
npm run dev
```


## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
