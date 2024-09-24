import { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import TopNav from './components/layout/TopNav';

function App() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      <TopNav collapsed={collapsed} />
    </div>
  );
}

export default App;
