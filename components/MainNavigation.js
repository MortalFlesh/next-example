// @flow
import * as React from 'react';
import Link from 'next/link';

const Separator = () => <span> | </span>;

class MainNav extends React.PureComponent<{}> {
  render() {
    return (
      <div>
        <Link href="/">
          <a>home</a>
        </Link>

        <Separator />

        <Link href="/about">
          <a>about</a>
        </Link>
      </div>
    );
  }
}

export default MainNav;
