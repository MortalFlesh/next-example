// @flow
import * as React from 'react';

type Props = {|
  name?: string,
  value: string,
  onChange: string => void,
|};

class TextInput extends React.PureComponent<Props> {
  handleChange = (e: SyntheticEvent<HTMLButtonElement>) => {
    this.props.onChange(e.currentTarget.value);
  };

  render() {
    const { name = '', value } = this.props;

    return (
      <div>
        <input
          type="text"
          name={name}
          value={value}
          onChange={this.handleChange}
        />
        <style jsx>{`
          input {
            font-size: 30px;
            line-height: 1.5;
            color: #333;
            border-radius: 10px;
          }
        `}</style>
      </div>
    );
  }
}

export default TextInput;
