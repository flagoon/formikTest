import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import React from 'react';
import { Header, Footer } from './pageElements';
import FormsContainer from './formikComponents/FormsContainer';

function App(): JSX.Element {
  return (
    <Container>
      <Header>Header</Header>
      <FormsContainer data={{ profileName: 'zero' }} />
      <FormsContainer data={{ profileName: '1' }} />
      <FormsContainer data={{ profileName: '2' }} />
      <FormsContainer data={{ profileName: '3' }} />
      <button onClick={() => console.log('test')}>Submit</button>
      <Footer>footers</Footer>
    </Container>
  );
}

const Container = styled.div`
  margin: 3rem auto;
  border: 1px solid black;
  width: 70%;
  padding: 2rem;
`;

export default hot(App);
