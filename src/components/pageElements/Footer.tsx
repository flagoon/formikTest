import React from 'react';

function Footer({ children }: { children?: React.ReactNode }): JSX.Element {
  return (
    <section>
      <div>{children}</div>
    </section>
  );
}

export default Footer;
