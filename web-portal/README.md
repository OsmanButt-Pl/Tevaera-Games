# Tevaera API Service

## About

The Tevaera web portal is a React web application that uses GraphQL-based json service using [Apollo Server](https://www.apollographql.com/docs/apollo-server/).

## Getting Started

1. Make sure you have NodeJS and Yarn installed.
2. Clone this repo.
3. In your terminal window execute the following command from the site root:

```
yarn install
```

4. Create a .env file in the site root, with the following content:

```
REACT_APP_TEVAERA_API_ENDPOINT=http://dev.api.tevaera.com/
```

5. Create a codegen.yml file in the site root, with the following content:

```
overwrite: true
schema:
  - 'http://dev.api.tevaera.com/':
      headers:
        x-daoiq-apim: '1234'
        x-daoiq-codegen: true
documents: "src/gql/*.tsx"
generates:
  src/gql-types.generated.tsx:
    plugins:
      - "typescript"
      - "typescript-operations"
      - "typescript-react-apollo"
  ./graphql.schema.json:
    plugins:
      - "introspection"
```

6. Now execute the following in your terminal window:

```
yarn start
```

This will run the React App and you can access the web portal at http://localhost:3000.
