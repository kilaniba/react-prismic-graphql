import React from 'react';
import 'whatwg-fetch';
import { Query } from 'react-apollo';

import gql from 'graphql-tag';

// graphql query request

const PAGE_QUERY = gql`
  query {
    testPage {
      title
      description
      image
    }
  }
`;
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prismicCtx: { image: { url: '', alt: '' }, description: [], title: [] },
    };
  }

  render() {
    return (
      <Query query={PAGE_QUERY} errorPolicy="all">
        {({ loading, data = {}, error }) => {
          if (loading) return null;
          if (!data || !data.testPage)
            return (
              <h1>No Data,test may be you have to start your graphql server</h1>
            );
          if (error) return <h1>error occured</h1>;
          const { image, description, title } = data.testPage;

          return (
            <div className="App">
              <header className="App-header">
                <h1> {title.length !== 0 && title[0].text} </h1>
                <img src={image.url} className="App-logo" alt={image.alt} />
                <p>{description.length !== 0 && description[0].text}</p>
              </header>
            </div>
          );
        }}
      </Query>
    );
  }
}
