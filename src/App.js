import React, { useState } from "react";
import styled from "styled-components";
import Education from "./components/Education.jsx";

import logo from "./res/insta.png";

import logo2 from "./res/insta2.png";

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

const Title = styled.h1`
  width: 75%;
  margin: auto;
  margin-bottom: 0;
  text-align: center;
  font-size: 4rem;
  @media only screen and (max-width: 900px) {
    text-align: center;
    font-size: 3rem;
  }
  color: black;
`;

const Color = styled.span`
  color: #9f3645;
`;
const Logo = styled.img`
  width: 3rem;
  border: 2px;
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
  text-align: center;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 1400px) {
    width: 1400px;
    margin: auto;
  }
  animation: backInRight;
  animation-duration: 2s; /* don't forget to set a duration! */
`;
const Conttext = styled.h3`
  margin: auto;

  width: 20rem;
  font-size: 30px;
  margin-bottom: 0;
`;

const A = styled.a`
  margin-top: auto;
  margin-bottom: auto;
`;

const Element = styled.h3`
  font-size: 25px;
  color: orange;
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

const App = () => {
  return (
    <Div>
      <Wrapper>
        <A href="https://www.instagram.com/matte_pisu/">
          <Logo src={logo2} className="Logo" />{" "}
        </A>
        <Element> Matteo Pisu </Element>
      </Wrapper>

      <Container>
        <Title> Ciao!</Title>
        <Conttext>
          Sono <Color>Matteo</Color>, ho 18 anni e frequento il liceo A.
          Pacinotti di Cagliari.
        </Conttext>
        <Education />
        <Conttext>
          <Title> Hobby.</Title>
        </Conttext>
      </Container>
    </Div>
  );
};

export default App;
