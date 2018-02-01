// @flow
import * as React from 'react';

type Props = {|
  children: string,
|};

class Text extends React.PureComponent<Props> {
  render() {
    return (
      <span>
        {this.props.children}
        <style jsx>{`
          span {
            font-size: 36px;
            line-height: 1.5;
            color: #333;
          }
        `}</style>
      </span>
    );
  }
}

export default Text;
