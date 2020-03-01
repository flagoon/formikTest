import React from 'react';

function Games({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <main>
      <section>
        <div>{children}</div>
      </section>
    </main>
  );
}

export default Games;
