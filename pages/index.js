// @flow
import * as React from 'react';
import Page from '../components/Page';
import 'isomorphic-unfetch';

type Props = {|
  stars: number,
|};

class Index extends React.Component<Props> {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/zeit/next.js');
    const json = await res.json();

    return { stars: json.stargazers_count };
  }

  render() {
    return (
      <Page>
        <div>Stars: {this.props.stars} *</div>
      </Page>
    );
  }
}

export default Index;
