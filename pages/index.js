// @flow
import * as React from 'react';
import Page from '../components/Page';
import 'isomorphic-unfetch';
import Text from '../components/Text';

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
    console.log({ stars: this.props.stars });
    return (
      <Page heading="Example Next">
        <Text>{`Stars: ${this.props.stars} \u{2605}`}</Text>
      </Page>
    );
  }
}

export default Index;
