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

class Page extends React.Component<Props> {
  render() {
    return (
      <ThemeToggler>
        <Container>
          <Heading>{this.props.heading}</Heading>
          <MainNavigation />
          {this.props.children}
        </Container>
      </ThemeToggler>
    );
  }
}

export default Page;
