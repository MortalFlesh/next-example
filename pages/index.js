// @flow
import * as React from 'react';
import Page from '../components/Page';
import 'isomorphic-unfetch';

class Index extends React.Component {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/zeit/next.js');
    const json = await res.json();
    return { stars: json.stargazers_count };
  }

  //state = {
  //    seconds: Date.now(),
  //  };

  render() {
    return (
      <Page>
        <div>Seconds: {this.state.stars}</div>
      </Page>
    );
  }
}

export default Index;
