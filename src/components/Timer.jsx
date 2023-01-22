import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("tomato");
  let intervalRef = useRef();
  let colorRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        return (prev += 1);
      });
    }, 1000);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      clearInterval(intervalRef.current);
    }, 60 * 1000);
    return () => {
      clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    colorRef.current = setInterval(() => {
      setBackgroundColor((prev) => {
        if (prev === "tomato") {
          return "blue";
        }

        return "tomato";
      });
    }, 2000);
  }, []);
  useEffect(() => {
    const id = setTimeout(() => {
      clearInterval(colorRef.current);
    }, 60 * 1000);
    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <>
      <Container style={{ backgroundColor }}>
        <h1>Timer: {time} </h1>
      </Container>
    </>
  );
};

export default Timer;

const Container = styled.div`
  width: 600px;
  height: 180px;
  border: 1px solid #dedddd;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px auto;
  padding-top: 40px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  color: black;
`;
