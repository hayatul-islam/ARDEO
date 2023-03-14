import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { loginUser } = useSelector((state) => state.loginUser);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (loginUser === "false") {
      navigate("/login");
    }
    if (loginUser === "true") {
      localStorage.setItem("loginUser", false);
    }
  };
  return (
    <div className="py-4 flex justify-between items-center px-6 md:px-12">
      <div>
        <img
          onClick={() => navigate("/")}
          className="cursor-pointer h-[50px]"
          src="https://i.ibb.co/Yb9859c/aredeo.png"
          alt=""
        />
      </div>
      <nav className="flex gap-x-4 items-center">
        <Link className="text-[20px]" to="/users">
          Users
        </Link>
        <button
          onClick={handleLogin}
          className="px-3 py-1.5 border rounded-xl border-[#692438] text-[#692438]"
          type="button"
        >
          {loginUser === "true" ? "Logout" : "Login"}
        </button>
      </nav>
    </div>
  );
};

export default Header;
