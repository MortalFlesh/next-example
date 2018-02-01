import * as React from 'react';
import ThemeConsumer from './Theme';

type Props = {|
  children: React.Node,
|};

class Heading extends React.PureComponent<Props> {
  render() {
    return (
      <ThemeConsumer>
        {theme => (
          <h1 style={{ color: theme.textColor }}>{this.props.children}</h1>
        )}
      </ThemeConsumer>
    );
  }
}

export default Heading;
