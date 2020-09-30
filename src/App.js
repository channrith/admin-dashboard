import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import './App.css';

import { ExchangeRates } from './components/exchange/exchange.component';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app</h2>
      </div>
      <ExchangeRates />
    </ApolloProvider>
  );
}

export default App;
