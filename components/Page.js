// @flow
import * as React from 'react';
import MainNavigation from './MainNavigation';

const Container = ({ children }) => <div>{children}</div>;

type Props = {
  children: React.Node,
};

class Page extends React.Component<Props> {
  render() {
    return (
      <Container>
        <MainNavigation />

        {this.props.children}
      </Container>
    );
  }
}

export default Page;
