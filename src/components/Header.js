import { Popover } from "@headlessui/react";
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

        {(loginUser === "false" || !isLogin) && (
          <button
            onClick={() => navigate("/login")}
            className="px-3 py-1.5 border rounded-xl border-[#692438] text-[#692438]"
            type="button"
          >
            Login
          </button>
        )}
        {(loginUser === "true" || isLogin) && (
          <Popover className="relative">
            <Popover.Button>{user?.name}</Popover.Button>

            <Popover.Panel className="absolute z-10">
              <div className="px-6">
                <button
                  onClick={handleLogOut}
                  className="px-3 py-1.5 border rounded-xl border-[#692438] text-[#692438]"
                  type="button"
                >
                  Logout
                </button>
              </div>
            </Popover.Panel>
          </Popover>
        )}
      </nav>
    </div>
  );
};

export default Header;
