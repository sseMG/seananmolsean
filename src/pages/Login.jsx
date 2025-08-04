// src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    setCreds(c => ({ ...c, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(err => ({ ...err, [e.target.name]: "" }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!creds.email.trim()) errs.email = "Email is required";
    if (!creds.password) errs.password = "Password is required";
    return errs;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setIsLoading(true);

    // Simulate fetching users from localStorage (simple demo logic)
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const foundUser = users.find(
        u => u.email === creds.email && u.password === creds.password
      );
      setIsLoading(false);

      if (!foundUser) {
        setErrors({ email: "Invalid email or password" });
        return;
      }

      // Save the logged-in user to localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: foundUser.name,
          email: foundUser.email,
          balance:
            typeof foundUser.balance === "number"
              ? foundUser.balance
              : foundUser.balance
              ? parseFloat(foundUser.balance)
              : 150.0,
        })
      );

      navigate("/dashboard", { replace: true });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="w-full bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-gray-900 text-lg">
            Jesus Christ King of Kings and Lord of Lords Academy Inc.
          </div>
          <nav>
            <ul className="flex items-center space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors duration-200"
                >
                  Log In
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* FORM */}
      <div className="py-12 px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h1 className="text-2xl font-bold mb-6">Log In</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email Address"
              name="email"
              type="email"
              value={creds.email}
              onChange={handleChange}
              placeholder="you@example.com"
              error={errors.email}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              value={creds.password}
              onChange={handleChange}
              placeholder="••••••••"
              error={errors.password}
            />
            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Log In"}
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
