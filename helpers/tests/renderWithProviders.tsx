import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  NormalizedCacheObject
} from "@apollo/client";
import { render } from "@testing-library/react";

const renderWithProviders = (
  children: JSX.Element,
  options?: {
    apolloClient: ApolloClient<NormalizedCacheObject>;
  }
) =>
  render(
    <ApolloProvider
      client={
        options?.apolloClient ||
        new ApolloClient({
          cache: new InMemoryCache(),
          uri: ""
        })
      }
    >
      {children}
    </ApolloProvider>
  );

export { renderWithProviders };
