import logo from "assets/images/Logo.png";
import { UserContext } from "context/UserContext";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  const { logout, user } = useContext(UserContext);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  const handleLogout = () => {
    logout();
    navigate("/");
    toast.success("Logout successfully!");
  };

  return (
    <header className="flex flex-col items-center justify-between w-full px-[10px] py-5 md:gap-y-0 gap-y-5 md:flex-row ">
      <div className="flex items-center gap-x-[50px]">
        <Link to="/" className="flex items-center cursor-pointer gap-x-[10px]">
          <img
            src={logo}
            alt="Logo"
            className="w-[45px] h-[45px] object-cover"
          />
          <span className="text-xl font-medium">User Management</span>
        </Link>
        <div className="font-bold transition-all text-colorGray">
          <NavLink
            to="/"
            className={(isActive) =>
              isActive ? "text-colorPrimary " : "hover:text-colorPrimary"
            }
          >
            Home
          </NavLink>
        </div>
      </div>

      {user && user.auth === true ? (
        <div className="flex flex-col items-center gap-x-5 md:flex-row gap-y-[10px] md:gap-y-0">
          <span className="text-sm font-medium underline">{user.email}</span>

          <button
            onClick={() => handleLogout()}
            className="px-5 py-[5px] bg-colorPrimary text-white rounded-lg font-semibold hover:opacity-80 transition-all"
          >
            Logout
          </button>
        </div>
      ) : (
        <NavLink
          to="/login"
          className="px-5 py-[5px] bg-colorPrimary text-white rounded-lg font-semibold hover:opacity-80 transition-all"
        >
          Login
        </NavLink>
      )}
    </header>
  );
};

export default Header;
