import React, { useState ,useEffect } from "react";
import styled from "styled-components";

const Login = (props) => {
  const [emailValue, setEmailValue] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [disabledBtn, setDisabledBtn] =  useState(false)


  useEffect(() => {
  
    setDisabledBtn(emailValue.includes("@") && passwordValue.trim().length > 6 )
  }, [emailValue, passwordValue])
  

  const getEmailValue = (e) => {
    setEmailValue(e.target.value);
  };

  const getPasswordValue = (e) => {
    setPasswordValue(e.target.value);
    setDisabledBtn(e.target.value.trim().length>6 &&  emailValue.includes("@"))
  };

  const checkEmailValue = () => {
    setEmailIsValid(emailValue.includes("@"));
    setDisabledBtn(true)
  };

  const checkPasswordValue = () => {
    setPasswordIsValid(passwordValue.trim().length > 6);
    setDisabledBtn(true)
  };

  const sandValueUser = (e) => {
    e.preventDefault();
    props.onClick(emailValue, passwordValue)
  };

  return (
    <Container onSubmit={sandValueUser} >
      <label htmlFor="email">
        E-Mail ` `
        <input
        className={!emailIsValid ? "invalid" : ""   }
          value={emailValue}
          onChange={getEmailValue}
          onFocus={checkEmailValue}
          style={{
            backgroundColor: !emailIsValid ? "#fa7a642d " : "#dae4fdac ",
          }}
          type="email"
          id="email"
          required
        />
      </label>

      <label htmlFor="password">
        Password
        <input
          value={passwordValue}
          onChange={getPasswordValue}
          onBlur={checkPasswordValue}
          style={{
            backgroundColor: !passwordIsValid ? "#f37c6731 " : "#dae4fdac ",
          }}
          type="password"
          id="password"
          required
        />
      </label>

      <button className="btn" disabled={!disabledBtn} > Login </button>
    </Container>
  );
};

export default Login;

const Container = styled.form`
  width: 600px;
  height: 200px;
  border: 1px solid #dedddd;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px auto;
  padding-top: 40px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  & label {
    display: flex;
    justify-content: flex-start;
    font-size: 20px;
    font-weight: 700;
    margin: 15px;
    /*margin-left: 30px;*/
  }

  & label input {
    margin-left: 60px;
    width: 400px;
    border: 2px solid #fa7b64fd;
    border-radius: 5px;
    background-color:  #c2f6f0;
  }

  & .invalid{
    background-color:#fa7b64fd;
  }

  & button {
    width: 120px;
    height: 40px;
    font-size: 18px;
    background-color: #e82de8;
    border-radius: 90px;
    cursor: pointer;
    border: 1px solid #c1bdbd9f;
    margin: 10px;
  }
  & .btn:disabled{
      background-color: #c1bdbd9f;
  }
`;
