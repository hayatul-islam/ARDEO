import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const user = { name, email, password };
  const userString = JSON.stringify(user);

  const handleRegister = () => {
    if (name !== "" && email !== "" && password !== "") {
      localStorage.setItem("user", userString);
      navigate("/login");
    }
  };
  return (
    <div class="w-full max-w-xs mx-auto py-12">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-[30px] font-bold pb-4">Register</h2>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
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
            onClick={handleRegister}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
        <div className="pt-6 text-center">
          <Link to="/login" className="text-blue-400">
            I have an account.
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
