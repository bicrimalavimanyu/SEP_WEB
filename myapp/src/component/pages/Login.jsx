import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = "72egdfwd525dtfd5rd52dr5d5";
    if (
      loginValue.email === "admin@mail.com" &&
      loginValue.password === "admin123"
    ) {
      localStorage.setItem("token", token);
      localStorage.setItem("userType", "Admin");
      navigate("/admin");
    } else if (
      loginValue.email === "user@mail.com" &&
      loginValue.password === "user123"
    ) {
      localStorage.setItem("token", token);
      localStorage.setItem("userType", "User");
      navigate("/");
    }
  };

  console.log(loginValue);

  return (
    <>
      <Header />

      <section className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-blue-100 px-4 py-10 mt-35">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">
                Welcome Back 👋
              </h1>
              <p className="text-gray-500 mt-2">
                Login to continue to your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={loginValue.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                    Forgot Password?
                  </Link>
                </div>

                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginValue.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-blue-600"
                />

                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
              >
                Sign In
              </button>
            </form>

            <div className="my-6 flex items-center">
              <div className="flex-1 border-t"></div>
              <span className="px-4 text-gray-400 text-sm">OR</span>
              <div className="flex-1 border-t"></div>
            </div>

            <button
              type="button"
              className="w-full border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition font-medium"
            >
              Continue with Google
            </button>

            <p className="text-center text-gray-500 mt-6">
              Don't have an account?
              <a
                href="/register"
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Create Account
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
