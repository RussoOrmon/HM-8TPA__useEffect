import React from 'react';
import styled from "styled-components";

const Welcome = () => {
  return (
    <Container>
        <h1> Welcome Users ! ! ! </h1>

    </Container>
  )
}

export default Welcome;

const Container = styled.div`
  width: 600px;
  height: 200px;
  border: 1px solid #dedddd;
  border-radius: 10px;
  display: flex;
  /*align-items: center;*/
  flex-direction: column;
  margin: 50px auto;
  padding-top: 40px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #f5baf770;
  color: black;

 


`;