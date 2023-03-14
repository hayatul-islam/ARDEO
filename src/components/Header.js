import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../features/users/loginSlice";

const Header = () => {
  const { loginUser, isLogin } = useSelector((state) => state.loginUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (loginUser === "false" || !isLogin) {
      navigate("/login");
    }
    if (loginUser === "true" || isLogin) {
      dispatch(logOut());
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
          {loginUser === "true" || isLogin ? "Logout" : "Login"}
        </button>
      </nav>
    </div>
  );
};

export default Header;
