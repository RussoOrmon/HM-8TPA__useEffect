import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();

    setUsers(data);
  };



  useEffect(() => {
  getUsers();

    //fetch("https://jsonplaceholder.typicode.com/users")
    //    .then((res)=> {return res.json()} )
    //    .then((data) =>setUsers(data))
    //    .catch((error)=>{console.log(error)
    //    })
  }, []);


  return (
    <Container>
      <h1>Users!</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h3 style={{ color: "green" }}>
              {user.name} ---
              <i style={{ color: "blue", fontSize: "29px" }}>{user.username}</i>
              --- {user.email}
            </h3>
          </li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  width: 1000px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
  border: 1px solid #c1bdbd9f;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  margin: 5px auto;
  box-sizing: border-box;
  padding: 10px;
  color: black;

  & ul {
    margin: 1px;
  }

  & li {
    font-size: 18px;
    list-style: none;
  }
`;
