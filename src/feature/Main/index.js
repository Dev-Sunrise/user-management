import Header from "components/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="container">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
