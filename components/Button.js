// @flow
import * as React from 'react';

type Props = {|
  children: string,
  bold?: boolean,
|};

class Button extends React.PureComponent<Props> {
  render() {
    return (
      <button>
        {this.props.children}
        <style jsx>{`
          button {
            font-size: 36px;
            line-height: 1.5;
            color: #333;
          }
        `}</style>
      </button>
    );
  }
}

export default Button;
