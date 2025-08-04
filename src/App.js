// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing      from "./pages/Landing";
import Loading      from "./pages/Loading";
import Register     from "./pages/Register";
import Login        from "./pages/Login";
import Dashboard    from "./pages/Dashboard";
import Shop         from "./pages/Shop";
import TopUp        from "./pages/TopUp";
import Cart         from "./pages/Cart";
import Profile      from "./pages/Profile";
import EditProfile  from "./pages/EditProfile";
import TxHistory    from "./pages/TxHistory";
import TopUpHistory from "./pages/TopUpHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"               element={<Landing />} />
        <Route path="/loading"        element={<Loading />} />
        <Route path="/register"       element={<Register />} />
        <Route path="/login"          element={<Login />} />
        <Route path="/dashboard"      element={<Dashboard />} />
        <Route path="/shop"           element={<Shop />} />
        <Route path="/topup"          element={<TopUp />} />
        <Route path="/cart"           element={<Cart />} />
        <Route path="/profile"        element={<Profile />} />
        <Route path="/profile/edit"   element={<EditProfile />} />
        <Route path="/transactions"   element={<TxHistory />} />
        <Route path="/topup-history"  element={<TopUpHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
