import React from 'react';

interface Props {
  children?: React.ReactNode;
}

function Header(props: Props): JSX.Element {
  return (
    <header>
      <h1>{props.children}</h1>
      <section>
        <ul>
          <li>Zuzia Kochanek</li>
          <li>Two</li>
        </ul>
      </section>
    </header>
  );
}

export default Header;
