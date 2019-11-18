import React from "react";

import "./App.css";
import HomePage from "./HomePage";
import { ApolloProvider } from "react-apollo";
import graphqlClient from "./graphql";

function App() {
  return (
    <ApolloProvider client={graphqlClient.client}>
      <HomePage />
    </ApolloProvider>
  );
}

export default App;
