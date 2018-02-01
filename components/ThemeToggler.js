// @flow
import React, { type Node } from 'react';
import createReactContext, { type Context } from 'create-react-context';
import type { Theme } from '../theme/types';
import { ThemeProvider } from './Theme';
import { browserThemeLight, browserThemeDark } from '../theme/browserThemes';

type Props = { children: Node };
type State = { theme: Theme };

const storage = {
  theme: browserThemeLight,
};

class ThemeToggler extends React.PureComponent<Props, State> {
  state = {
    theme: storage.theme,
  };

  render() {
    return (
      // Pass the current context value to the Provider's `value` prop.
      // Changes are detected using strict comparison (Object.is)
      <ThemeProvider value={this.state.theme}>
        <button
          onClick={() => {
            this.setState(state => {
              const theme =
                state.theme.type === 'light'
                  ? browserThemeDark
                  : browserThemeLight;

              storage.theme = theme;

              return { theme };
            });
          }}
        >
          Toggle theme
        </button>
        {this.props.children}
      </ThemeProvider>
    );
  }
}

export default ThemeToggler;
