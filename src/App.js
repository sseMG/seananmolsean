// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// public / student-facing
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

// admin screens
import AdminHome           from "./pages/admin/adminhomes";
import AdminShop           from "./pages/admin/adminShop";
import AdminAddRice        from "./pages/admin/adminAddRice";
import AdminAddSnacks      from "./pages/admin/adminAddSnacks";
import AdminAddDrinks      from "./pages/admin/adminAddDrinks";
import AdminEditCategories from "./pages/admin/adminEditCategories";
import AdminEditItems      from "./pages/admin/adminEditItems";
import AdminTopUp          from "./pages/admin/adminTopUp";
import AdminOrders         from "./pages/admin/adminOrders";
import AdminSummary        from "./pages/admin/adminSummary";
import AdminReservations   from "./pages/admin/adminReservations";
import AdminApproved       from "./pages/admin/adminApproved";
import AdminStats          from "./pages/admin/adminStats";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public/student routes */}
        <Route path="/"              element={<Landing />} />
        <Route path="/loading"       element={<Loading />} />
        <Route path="/register"      element={<Register />} />
        <Route path="/login"         element={<Login />} />
        <Route path="/dashboard"     element={<Dashboard />} />
        <Route path="/shop"          element={<Shop />} />
        <Route path="/topup"         element={<TopUp />} />
        <Route path="/cart"          element={<Cart />} />
        <Route path="/profile"       element={<Profile />} />
        <Route path="/profile/edit"  element={<EditProfile />} />
        <Route path="/transactions"  element={<TxHistory />} />
        <Route path="/topup-history" element={<TopUpHistory />} />

        {/* admin routes */}
        <Route path="/admin"                            element={<AdminHome />} />
        <Route path="/admin/shop"                       element={<AdminShop />} />
        <Route path="/admin/shop/add-rice"              element={<AdminAddRice />} />
        <Route path="/admin/shop/add-snacks"            element={<AdminAddSnacks />} />
        <Route path="/admin/shop/add-drinks"            element={<AdminAddDrinks />} />
        <Route path="/admin/shop/edit-categories"       element={<AdminEditCategories />} />
        <Route path="/admin/shop/edit-items"            element={<AdminEditItems />} />
        <Route path="/admin/topup"                      element={<AdminTopUp />} />
        <Route path="/admin/orders"                     element={<AdminOrders />} />
        <Route path="/admin/orders/summary"             element={<AdminSummary />} />
        <Route path="/admin/reservations"               element={<AdminReservations />} />
        <Route path="/admin/reservations/approved"      element={<AdminApproved />} />
        <Route path="/admin/stats"                      element={<AdminStats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
