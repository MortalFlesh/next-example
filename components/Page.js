// @flow
import * as React from 'react';
import MainNavigation from './MainNavigation';
import ThemeToggler from './ThemeToggler';
import Heading from './Heading';
import Container from './Container';

type Props = {|
  children: React.Node,
  heading: string,
|};

class Page extends React.PureComponent<Props> {
  render() {
    return (
      <ThemeToggler>
        <Container>
          <MainNavigation />
          <Heading>{this.props.heading}</Heading>
          {this.props.children}
        </Container>
      </ThemeToggler>
    );
  }
}

export default Page;
