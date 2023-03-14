import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useSelector((state) => state.loginUser);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user?.email === email && user?.password === password) {
      localStorage.setItem("loginUser", true);
      navigate("/users");
    } else {
      alert("Email or password wrong");
    }
  };
  return (
    <div class="w-full max-w-xs mx-auto py-12">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-[30px] font-bold pb-4">Login</h2>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleLogin}
          >
            Login
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="pt-6 text-center">
          <Link to="/register" className="text-blue-400">
            Don’t have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
