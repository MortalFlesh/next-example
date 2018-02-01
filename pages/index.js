// @flow
import * as React from 'react';
import Page from '../components/Page';
import 'isomorphic-unfetch';
import Text from '../components/Text';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

type Props = {|
  stars: number,
|};

type State = {|
  email: string,
  password: string,
|};

const initalState: State = {
  email: '',
  password: '',
};

class Index extends React.Component<Props, State> {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/zeit/next.js');
    const json = await res.json();

    return { stars: json.stargazers_count };
  }

  state = initalState;

  handleFormSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  handleChange = (text: string) => {};

  render() {
    return (
      <Page heading="Example Next">
        <Text>{`Stars: ${this.props.stars} \u{2605}`}</Text>

        <form>
          <TextInput
            name="email"
            value={this.state.email}
            onChange={email => this.setState({ email })}
          />
          <TextInput
            name="email"
            value={this.state.password}
            onChange={password => this.setState({ password })}
          />

          <Button>Send</Button>
        </form>
      </Page>
    );
  }
}

export default Index;
