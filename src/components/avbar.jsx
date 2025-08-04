import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/dashboard",     label: "Dashboard" },
  { to: "/shop",          label: "Shop" },
  { to: "/topup",         label: "Top‑Up" },
  { to: "/transactions",  label: "History" },
  { to: "/profile",       label: "Profile" },
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <ul className="container mx-auto flex space-x-6 p-4">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-500"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
