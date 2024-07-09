import React from 'react';
import { FaClipboardList, FaUsers, FaStar, FaUtensils, FaUserTie, FaChartBar } from 'react-icons/fa';
import { AiOutlineDashboard } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col fixed inset-y-0">
      <div className="p-4 flex items-center">
        <AiOutlineDashboard className="text-3xl mr-3" />
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>
      <div className="flex-grow">
        <nav className="mt-8">
          <ul>
            <li className="mb-2">
              <Link to="/admin/dashboard" className="flex items-center p-3 text-gray-200 hover:bg-gray-700 rounded transition">
                <AiOutlineDashboard className="mr-3 text-lg" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/admin/orders" className="flex items-center p-3 text-gray-200 hover:bg-gray-700 rounded transition">
                <FaClipboardList className="mr-3 text-lg" />
                <span>Orders</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/admin/customers" className="flex items-center p-3 text-gray-200 hover:bg-gray-700 rounded transition">
                <FaUsers className="mr-3 text-lg" />
                <span>Customers</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/admin/reviews" className="flex items-center p-3 text-gray-200 hover:bg-gray-700 rounded transition">
                <FaStar className="mr-3 text-lg" />
                <span>Reviews</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/admin/menu" className="flex items-center p-3 text-gray-200 hover:bg-gray-700 rounded transition">
                <FaUtensils className="mr-3 text-lg" />
                <span>Menu Management</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/admin/accounts" className="flex items-center p-3 text-gray-200 hover:bg-gray-700 rounded transition">
                <FaUserTie className="mr-3 text-lg" />
                <span>Accounts</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/admin/analytics" className="flex items-center p-3 text-gray-200 hover:bg-gray-700 rounded transition">
                <FaChartBar className="mr-3 text-lg" />
                <span>Analytics</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-4 bg-gray-900">
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-3" src="https://via.placeholder.com/150" alt="Admin Profile" />
          <div>
            <p className="text-sm font-semibold">Admin Name</p>
            <p className="text-xs text-gray-300">admin@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
