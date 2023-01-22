import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";


function App() {
  const [isLoggidIn, setLoggidIn] = useState(false);

  useEffect(()=>{
    const result = localStorage.getItem('LOGIN', )
    setLoggidIn(!!result)  // перевод string в boolean
  },[])

  const LoginHahdler = ({email, password}) => {
    setLoggidIn(true);

    localStorage.setItem('LOGIN', JSON.stringify(true))

  };

  const logoutHandler=()=>{
      setLoggidIn(false)
    localStorage.removeItem('LOGIN')
    }

  return (
    <div className="App">
      <h1> #hELlo@</h1>

      <Header    onLogout={logoutHandler} />
      <main>
      {!isLoggidIn && <Login onClick={LoginHahdler}   />  }
      {isLoggidIn && <Navbar onLogout={logoutHandler}   />  }
      </main>

    </div>
  );
}

export default App;
