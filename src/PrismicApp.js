import React from "react";
import "whatwg-fetch";
import Prismic from "prismic-javascript";
import PrismicConfig from "./prismic-configuration";
import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import gql from "graphql-tag";
import App from "./App";

const client = new ApolloClient({
  link: PrismicLink({
    uri: "https://testkilani.prismic.io/graphql"
  }),
  cache: new InMemoryCache()
});

export default class PrismicApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prismicCtx: { image: { url: "", alt: "" }, description: [], title: [] }
    };
    // this.getDatawithoutGraphql()
    //   .then(prismicCtx => {
    //     console.log("gggg", prismicCtx);

    //     this.setState({ prismicCtx });
    //   })
    //   .catch(e => {
    //     console.error(
    //       `Cannot contact the API, check your prismic configuration:\n${e}`
    //     );
    //   });
    this.getDataUsingGraphql();
  }

  //   using direct prismic
  async getDatawithoutGraphql() {
    const api = await Prismic.getApi(PrismicConfig.apiEndpoint);

    return api.getByUID("test", "testuid").then(res => res);

    //   ----------- method 2 ----------

    // return Prismic.getApi(PrismicConfig.apiEndpoint)
    //   .then(function(api) {
    //     return api.query("");
    //   })
    //   .then(
    //     response => response.results,
    //     function(err) {
    //       console.log("Something went wrong: ", err);
    //     }
    //   );

    //   ----------- method 1 ----------
    // const accessToken = PrismicConfig.accessToken;
    // return Prismic.api(PrismicConfig.apiEndpoint).then(api => ({
    //   api,
    //   endpoint: PrismicConfig.apiEndpoint,
    //   accessToken,
    //   linkResolver: PrismicConfig.linkResolver,
    // }));
  }

  getDataUsingGraphql = () => {
    client
      .query({
        query: gql`
          query {
            test(lang: "en-us", uid: "testuid") {
              title
              description
              image
            }
          }
        `
      })
      .then(response => {
        console.log("graphslData", response);
        this.setState({ prismicCtx: response.data.test });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return <App prismicCtx={this.state.prismicCtx} />;
  }
}
