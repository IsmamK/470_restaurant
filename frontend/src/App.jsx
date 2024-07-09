import React from 'react';
import { FaHome, FaClipboardList, FaUsers, FaStar } from 'react-icons/fa';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="mt-8">
          <ul>
            <li className="mb-2">
              <a href="#orders" className="flex items-center p-3 text-gray-300 hover:bg-gray-700 rounded">
                <FaClipboardList className="mr-3" />
                Orders
              </a>
            </li>
            <li className="mb-2">
              <a href="#customers" className="flex items-center p-3 text-gray-300 hover:bg-gray-700 rounded">
                <FaUsers className="mr-3" />
                Customers
              </a>
            </li>
            <li className="mb-2">
              <a href="#reviews" className="flex items-center p-3 text-gray-300 hover:bg-gray-700 rounded">
                <FaStar className="mr-3" />
                Reviews
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="text-xl font-bold">Dashboard</div>
          <div className="text-gray-600">Welcome, Admin</div>
        </header>
        <main className="flex-grow p-6 bg-gray-100">
          <section id="orders" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Orders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold">Order #12345</p>
                <p className="text-gray-600">Status: Pending</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold">Order #12346</p>
                <p className="text-gray-600">Status: Completed</p>
              </div>
              {/* Add more orders here */}
            </div>
          </section>
          <section id="customers" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Customers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold">John Doe</p>
                <p className="text-gray-600">john@example.com</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold">Jane Smith</p>
                <p className="text-gray-600">jane@example.com</p>
              </div>
              {/* Add more customers here */}
            </div>
          </section>
          <section id="reviews">
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold">Excellent service!</p>
                <p className="text-gray-600">- John Doe</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold">Food was great!</p>
                <p className="text-gray-600">- Jane Smith</p>
              </div>
              {/* Add more reviews here */}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
