import React, { useContext } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import { AuthContext } from "./contexts/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      <main>
        {!authCtx.isLoggedIn && <Login />}
        {authCtx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
