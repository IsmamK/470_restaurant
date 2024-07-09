import React from 'react';
import { FaClipboardList, FaUsers, FaStar, FaUtensils, FaUserTie, FaChartBar } from 'react-icons/fa';
import { AiOutlineDashboard } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {

  // Simulated data for dashboard analytics
  const totalOrders = 150;
  const totalSales = '$15,000';
  const popularItems = [
    { id: 1, name: 'Burger', orders: 50 },
    { id: 2, name: 'Pizza', orders: 40 },
    { id: 3, name: 'Salad', orders: 30 },
  ];

  const pendingOrdersData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Pending Orders',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const reviews = [
    { id: 1, text: 'Excellent service!', author: 'John Doe' },
    { id: 2, text: 'Food was great!', author: 'Jane Smith' },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
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
      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-700">Dashboard</div>
          <div className="text-gray-600">Welcome, Admin</div>
        </header>
        <main className="flex-grow p-6">
          {/* Dashboard Section */}
          <section id="dashboard" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Total Orders</h3>
                <p className="text-4xl font-bold text-gray-800">{totalOrders}</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Total Sales</h3>
                <p className="text-4xl font-bold text-gray-800">{totalSales}</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg shadow-md col-span-2">
                <h3 className="text-xl font-semibold mb-2">Popular Items</h3>
                <ul className="divide-y divide-gray-300">
                  {popularItems.map((item) => (
                    <li key={item.id} className="py-2 flex justify-between items-center">
                      <span>{item.name}</span>
                      <span className="text-gray-600">{item.orders} orders</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg shadow-md col-span-2">
                <h3 className="text-xl font-semibold mb-2">Pending Orders Analytics</h3>
                {/* Replace with actual chart component */}
                <div className="text-center">
                  <p className="text-gray-600">Analytics chart goes here</p>
                </div>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg shadow-md col-span-2">
                <h3 className="text-xl font-semibold mb-2">Reviews</h3>
                <ul className="divide-y divide-gray-300">
                  {reviews.map((review) => (
                    <li key={review.id} className="py-2">
                      <p className="font-semibold">{review.text}</p>
                      <p className="text-gray-600">- {review.author}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
