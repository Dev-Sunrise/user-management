import { login } from "api/Service";
import banner from "assets/images/Banner.jpg";
import logo from "assets/images/Logo.png";
import { UserContext } from "context/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Banner from "./components/Banner";
import Form from "./components/Form";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lodingLogin, setLodingLogin] = useState(false);
  const { loginContext } = useContext(UserContext);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Email, Password id required!");
      return;
    }

    setLodingLogin(true);
    let res = await login(email, password);

    if (res && res.token) {
      loginContext(email, res.token);
      navigate("/");
      toast.success("Login successfully!");
    } else {
      if (res?.status === 400) {
        toast.error(res.data.error);
      }
    }
    setLodingLogin(false);
  };

  return (
    <div className="container flex items-center justify-center w-screen h-screen">
      <div className="w-full max-w-[900px] h-[500px]  rounded-lg flex-col md:flex-row flex overflow-hidden shadow-2xl">
        <div className="flex-1 p-5">
          <img
            src={logo}
            alt="Logo"
            className="w-[45px] h-[45px] object-cover mb-5 md:mb-[40px]"
          />
          <h3 className="mb-5 text-xl font-bold text-center capitalize text-colorPrimary">
            Login
          </h3>
          <div className="flex flex-col mb-5 text-xs gap-y-[5px]">
            <span className="font-bold">Test account:</span>
            <p className="ml-[10px]">
              <strong>Email:</strong> eve.holt@reqres.in
            </p>
            <p className="ml-[10px]">
              <strong>Password:</strong> arbitrary password you enter
            </p>
          </div>
          <Form
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            lodingLogin={lodingLogin}
          ></Form>
        </div>
        <div className="w-[50%] bg-black hidden md:block">
          <Banner src={banner}></Banner>
        </div>
      </div>
    </div>
  );
};

export default Login;
