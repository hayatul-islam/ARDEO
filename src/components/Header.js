import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../features/users/loginSlice";

const Header = () => {
  const { user, loginUser, isLogin } = useSelector((state) => state.loginUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    if (loginUser === "true" || isLogin) {
      dispatch(logOut());
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="py-4 flex justify-between items-center px-6 md:px-12">
      <div>
        <img
          onClick={() => navigate("/")}
          className="cursor-pointer h-[30px] md:h-[50px]"
          src="https://i.ibb.co/Yb9859c/aredeo.png"
          alt=""
        />
      </div>
      <nav className="flex gap-x-4 items-center">
        <Link className="text-[14px] md:text-[20px]" to="/users">
          Users
        </Link>
        {(loginUser === "true" || isLogin) && (
          <h4 className="text-[14px] md:text-[20px]">{user?.name}</h4>
        )}
        <button
          onClick={handleLogOut}
          className="px-2 py-1 md:px-3 md:py-1.5 border rounded-xl text-[12px] md:text-[14px] border-[#692438] text-[#692438] hover:bg-[#692438] hover:text-white"
          type="button"
        >
          {loginUser === "true" || isLogin ? "Logout" : "Login"}
        </button>
      </nav>
    </div>
  );
};

export default Header;
