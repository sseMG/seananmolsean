// src/pages/Register.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    studentId: "",
    email: "",
    password: "",
    confirm: ""
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(err => ({ ...err, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.studentId.trim()) errs.studentId = "Student ID is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Invalid email";
    if (!form.password) errs.password = "Password is required";
    else if (form.password.length < 8)
      errs.password = "Must be at least 8 characters";
    if (!form.confirm) errs.confirm = "Please confirm password";
    else if (form.confirm !== form.password)
      errs.confirm = "Passwords do not match";
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

    setTimeout(() => {
      // Get users array from localStorage or empty array
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      // Check if email already exists
      if (users.some(u => u.email === form.email)) {
        setIsLoading(false);
        setErrors({ email: "Email already registered. Please log in." });
        return;
      }

      // Add new user to users array
      const newUser = {
        name: form.name,
        studentId: form.studentId,
        email: form.email,
        password: form.password,
        balance: 150.0
      };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      // Set as current user (auto-login after register)
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: newUser.name,
          email: newUser.email,
          balance: newUser.balance
        })
      );

      setIsLoading(false);
      navigate("/dashboard", { replace: true });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER: unchanged design */}
      <header className="w-full bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-gray-900 text-lg">
            Jesus Christ King of Kings and Lord of Lords Academy Inc.
          </div>
          <nav>
            <ul className="flex items-center space-x-8">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
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
          <h1 className="text-2xl font-bold mb-6">Register</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              error={errors.name}
            />
            <Input
              label="Student ID Number"
              name="studentId"
              value={form.studentId}
              onChange={handleChange}
              placeholder="e.g. 2023‑00001"
              error={errors.studentId}
            />
            <Input
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              error={errors.email}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a password"
              error={errors.password}
            />
            <Input
              label="Confirm Password"
              name="confirm"
              type="password"
              value={form.confirm}
              onChange={handleChange}
              placeholder="Confirm your password"
              error={errors.confirm}
            />

            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
