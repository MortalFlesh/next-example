import * as React from 'react';
import MainNavigation from './MainNavigation';

const Container = ({ children }) => <div>{children}</div>;

class Page extends React.Component {
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
