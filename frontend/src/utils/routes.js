import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "../containers/LoginPage/LoginPage.js";
import CreateRestaurantPage from "../containers/CreateRestuarantPage/CreateRestuarantPage.js";
import ResultPage from "../containers/ResultPage.js";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<CreateRestaurantPage />} />
        <Route path="/result" element={<ResultPage />} />
        {/* Add a fallback route if needed */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
