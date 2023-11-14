import React, { useState } from 'react';
import styled from 'styled-components';

//Dichiarazione Styled Components:
const Div = styled.div`
  margin: 100px auto;
  padding: 50px;
  background-color: #66A182;
  border: 2px solid #2E4057;
  max-width: 700px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  color: #2E4057;
  margin: auto;
  text-align: center;
  font-size: 70px;
`;

const App = () => {

  return(
    <Div>
      <H1>Hello world</H1>
    </Div>
  )
};

export default App;
