import { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import TopNav from './components/layout/TopNav';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Projects from './pages/Projects.jsx';
import Finances from './pages/Finances.jsx';
import Analytics from './pages/Analytics.jsx';
import Library from './pages/Library.jsx';
import Settings from './pages/Settings.jsx';
import Error from './pages/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/finances',
    element: <Finances />,
  },
  {
    path: '/analytics',
    element: <Analytics />,
  },
  {
    path: '/library',
    element: <Library />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);

function App() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      <TopNav collapsed={collapsed} />
      <div className={`${collapsed ? 'ml-12' : 'ml-36'} px-10 py-5`}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
