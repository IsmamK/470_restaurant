import React from 'react';
import Sidebar from './Sidebar'; // Adjust path as needed
import { FaUtensils } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MenuManagement = () => {

  // Function to handle edit menu items
  const handleEditMenuItems = () => {
    // Implement logic to edit menu items
    console.log('Redirecting to edit menu items page...');
  };

  // Function to handle create new menu items
  const handleCreateNewMenuItem = () => {
    <Link to="/admin/customers"></Link>
    console.log('Redirecting to create new menu item page...');
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Reusable Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-700">Menu Management</div>
          <div className="text-gray-600">Welcome, Admin</div>
        </header>
        <main className="flex-grow p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Menu Management Options</h2>
            <ul className="divide-y divide-gray-300">
              <li className="py-2">
                <button onClick={handleEditMenuItems} className="flex items-center p-3 text-blue-600 hover:bg-gray-700 hover:text-white rounded transition">
                  <FaUtensils className="mr-3 text-lg" />
                  <span>Edit Menu Items</span>
                </button>
              </li>
              <li className="py-2">
                <button onClick={handleCreateNewMenuItem} className="flex items-center p-3 text-blue-600 hover:bg-gray-700 hover:text-white rounded transition">
                  <AiOutlinePlus className="mr-3 text-lg" />
                  <span>Create New Menu Item</span>
                </button>
              </li>
              <li className="py-2">
                <Link to="/admin/categories" className="flex items-center p-3 text-blue-600 hover:bg-gray-700 hover:text-white rounded transition">
                    <AiOutlinePlus className="mr-3 text-lg" />
                  <span>Manage Categories</span>
                </Link>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MenuManagement;
