import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';
import Dashboard from './pages/Dashboard';
import './assets/tailwind.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <div id="app-container" className="bg-gray-100 min-h-screen flex">
            <Sidebar/>
            <div id="main-content" className="flex-1 p-4">
		      <Header/>
		      <Dashboard/>
	        </div>
        </div>
    </Router>
  </React.StrictMode>
);

export default Main;