import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";
import Settings from "../Settings/Settings";
import NewItem from "../NewItem/NewItem";
import Profile from "../Profile/Profile";
import Layout from "./Layout";
import Reports from "../Reports/Reports";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Layout />}>
          <Route path="/settings" element={<Settings />} />
          <Route path="/new-item" element={<NewItem />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
