// @flow
import * as React from 'react';
import * as validation from '../backend/validation';
import { translateError } from '../backend/validation/translation';

type Props = {|
  error: ?validation.ValidationError,
|};

class ValidationError extends React.PureComponent<Props> {
  render() {
    const { error } = this.props;

    return error ? (
      <div>
        {translateError(error)}
        <style jsx>{`
          div {
            font-size: 30px;
            line-height: 1.5;
            color: #d20000;
          }
        `}</style>
      </div>
    ) : null;
  }
}

export default ValidationError;
