import React, { useState } from "react";
import styled from "styled-components";
import App from "../../App";
import Timer from "../Timer";
import { Users } from "../Users/Users";
import Welcome from "../Welcom";

const Navbar = ({onLogout}) => {
  const [welcome, setWelcome] = useState(true);
  const [usersNav, setUsersNav] = useState(false);
  const [timerNav, setTimerNav] = useState(false);

  const goToUserNav = (e) => {
    e.preventDefault();

    setUsersNav((prevState) => !prevState);
    setWelcome(false);
    setTimerNav(false);
  };
  const goToTimerNav = (e) => {
    e.preventDefault();
    setTimerNav((prevState) => !prevState);
    setWelcome(false);
    setUsersNav(false);
  };
  const goToLoginNav = (e) => {
    e.preventDefault();
    onLogout(true)
  
  };


      

  return (
    <Container>
      <main>
        <button onClick={goToUserNav}>
          <a href={<Users />}>Users</a>
        </button>

        <button onClick={goToTimerNav}>
          <a href={<Timer />}>Timer</a>
        </button>

        <button onClick={goToLoginNav}>
          <a href={<App />}>Logout</a>
        </button>

      </main>

      <div>
        {welcome && <Welcome />}
        {usersNav && <Users  />}
        {timerNav && <Timer />}

      </div>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 5px;
  background-color: #63067b;
  color: white;
  padding: 0px 20px;
  color: white;

  & main {
    min-width: 300px;
    display: flex;
    /*justify-content: end;*/
    margin: -60px 10px 60px auto;
  }
  /*& div {
    margin: 50px auto;
    align-items: center;
  }*/

  & button {
    border-radius: 20px;
    background-color: #fa0ad6;
    color: white;
    padding: 5px 20px;
    margin: auto 30px;
    font-size: 18px;
  }
  & button:hover {
    cursor: pointer;
    background-color: #0020be;
  }
  & a{
    color:white
  }
`;
