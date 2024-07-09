import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import MenuCreatorPage from './pages/MenuCreatorPage';
import AdminDashboard from './pages/AdminDashboard';
import MenuManagement from './components/MenuManagement';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />
  },
  {
    path: "/admin/menu",
    element: <MenuManagement />
  },
  {
    path: "/admin/create-menu-item",
    element: <MenuCreatorPage />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;