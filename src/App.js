import { UserContext } from "context/UserContext";
import Home from "feature/Home";
import Login from "feature/Login";
import Main from "feature/Main";
import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const { loginContext } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      loginContext(
        localStorage.getItem("email"),
        localStorage.getItem("token")
      );
    }
  }, [loginContext]);

  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<Home />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
