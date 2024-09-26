import { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import TopNav from './components/layout/TopNav';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
])

function App() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      <TopNav collapsed={collapsed} />
      <div className={`${collapsed ? 'ml-12' : 'ml-36' } p-5`}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
