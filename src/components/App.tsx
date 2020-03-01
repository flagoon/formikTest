import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Header, Games, Footer } from './pageElements';

function App(): JSX.Element {
  return (
    <>
      <Header>Header</Header>
      <Games>Gamez</Games>
      <Footer>footers</Footer>
    </>
  );
}

export default hot(App);
