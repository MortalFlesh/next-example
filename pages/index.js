// @flow
import * as React from 'react';
import Page from '../components/Page';
import 'isomorphic-unfetch';
import Text from '../components/Text';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import * as validation from '../backend/validation';
import ValidationError from '../components/ValidationError';

type Props = {|
  stars: number,
|};

type Fields = {|
  email: string,
  password: string,
|};

type State = {|
  ...Fields,
  validationErrors: validation.ValidationErrors<Fields>,
|};

const initalState = {
  email: '',
  password: '',
  validationErrors: {},
};

class Index extends React.PureComponent<Props, State> {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/zeit/next.js');
    const json = await res.json();

    return { stars: json.stargazers_count };
  }

  state = initalState;

  handleFormSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const variables = {
      email: this.state.email,
      password: this.state.password,
    };

    const validationErrors = validation.validateEmailPassword(variables);
    if (validationErrors) {
      this.setState({ validationErrors });
      return;
    }

    this.setState(initalState);
  };

  handleChange = (text: string) => {};

  render() {
    const { validationErrors } = this.state;

    return (
      <Page heading="Example Next">
        <Text>{`Stars: ${this.props.stars} \u{2605}`}</Text>

        <form onSubmit={this.handleFormSubmit}>
          <TextInput
            name="email"
            value={this.state.email}
            onChange={email => this.setState({ email })}
          />
          <ValidationError error={validationErrors.email} />

          <TextInput
            name="email"
            value={this.state.password}
            onChange={password => this.setState({ password })}
          />
          <ValidationError error={validationErrors.password} />

          <Button>Send</Button>
        </form>
      </Page>
    );
  }
}

export default Index;
