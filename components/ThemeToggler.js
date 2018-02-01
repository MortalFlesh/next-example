// @flow
import React, { type Node } from 'react';
import createReactContext, { type Context } from 'create-react-context';
import type { Theme } from '../theme/types';
import { ThemeProvider } from './Theme';
import { browserThemeLight, browserThemeDark } from '../theme/browserThemes';

type Props = { children: Node };
type State = { theme: Theme };

class ThemeToggler extends React.Component<Props, State> {
  state = {
    theme: browserThemeLight,
  };

  render() {
    return (
      // Pass the current context value to the Provider's `value` prop.
      // Changes are detected using strict comparison (Object.is)
      <ThemeProvider value={this.state.theme}>
        <button
          onClick={() => {
            this.setState(state => ({
              theme:
                state.theme.type === 'light'
                  ? browserThemeDark
                  : browserThemeLight,
            }));
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
