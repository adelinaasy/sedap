import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './assets/tailwind.css';

import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayouts';

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
import Order from './pages/Order';
import OList from './pages/List';
import Customer from './pages/Customer';
import CustomerList from './pages/CustomerList';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Unauthorized from './pages/Unauthorized';

import Login from './pages/auth/Login';
import Register2 from './pages/auth/Register2';
import Forgot from './pages/auth/Forgot';
import User from './pages/User';

// ✅ Tidak perlu lagi cek isAuthenticated
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* ✅ MainLayout untuk halaman utama */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order/list" element={<OList />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/customer/list" element={<CustomerList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<User />} />
        </Route>

        {/* ✅ AuthLayout untuk halaman auth */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register2 />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* ✅ Halaman Unauthorized global */}
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
