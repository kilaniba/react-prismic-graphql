import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";

export default {
  apiEndpoint: "https://testkilani.prismic.io/api/v2",
  client: new ApolloClient({
    link: PrismicLink({
      uri: "https://testkilani.prismic.io/graphql"
    }),
    cache: new InMemoryCache()
  }),
  linkResolver(doc) {
    if (doc.type === "page") return `/page/${doc.uid}`;
    return "/";
  }
};
