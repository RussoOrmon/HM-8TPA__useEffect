import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container >
      <h1> A Typical Page</h1>
      
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: #63067b;
  color: white;
  padding: 0px 20px;

  & h1 {
    font-size: 40px;

  }

  & div {
    min-width: 300px;
  
  }
  & button {
    border-radius: 20px;
    background-color: #fa0ad6;
    color: white;
    padding: 5px 10px;
    margin: auto 15px;
  }
`;