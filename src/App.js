import React, { useState } from "react";
import styled from "styled-components";

import logo from "./res/insta.png";

//Dichiarazione Styled Components:
const Div = styled.div`
  background-color: grey;
  border: 2px solid #2e4057;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Logo = styled.img`
  width: 3rem;
  margin: auto;
  margin-left: 0;
  filter: invert(0);
  @media only screen and (max-width: 900px) {
    width: 2rem;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding-top: 50px;
  background-color: grey;
`;

const Element = styled.p`
  font-size: 30px;
  color: orange;
  list-style: none;
  margin: 20px;
  transition: 0;
  padding: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: #1d1d1d;
  display: flex;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const title = styled.h1`
  width: 75%;
  margin: auto;
  margin-bottom: 0;
  text-align: center;
  font-size: 4rem;
`;

const App = () => {
  return (
    <Div>
      <Wrapper>
        <Logo src={logo} className="Logo" />
        <Element> Matteo Pisu </Element>
      </Wrapper>
      <Container>corpo</Container>
    </Div>
  );
};

export default App;
