import { ApolloClient, ApolloProvider, InMemoryCache, ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { createUploadLink } from 'apollo-upload-client';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from '../store';
const uploadLink = createUploadLink({
  uri: `${process.env.REACT_APP_TEVAERA_API_ENDPOINT}`,
  credentials: 'same-origin',
}) as unknown;

export const gqlClient = new ApolloClient({
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
  },
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
        );
      }
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    uploadLink as ApolloLink,
  ]),
  cache: new InMemoryCache(),
});

const AppProvider: React.FC = ({ children }) => {
  return (
    <ApolloProvider client={gqlClient}>
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
    </ApolloProvider>
  );
};

export default AppProvider;
