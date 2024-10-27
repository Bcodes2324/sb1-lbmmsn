import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { HomeIcon, DocumentDuplicateIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const Layout = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold">Expense Manager</h1>
        </div>
        
        <nav className="space-y-2">
          <Link to="/" className={`flex items-center space-x-2 p-2 rounded-lg ${isActive('/') ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
            <HomeIcon className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          
          <Link to="/projects" className={`flex items-center space-x-2 p-2 rounded-lg ${isActive('/projects') ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
            <DocumentDuplicateIcon className="w-5 h-5" />
            <span>Projects</span>
          </Link>
          
          <Link to="/reports" className={`flex items-center space-x-2 p-2 rounded-lg ${isActive('/reports') ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
            <ChartBarIcon className="w-5 h-5" />
            <span>Reports</span>
          </Link>
          
          <Link to="/team" className={`flex items-center space-x-2 p-2 rounded-lg ${isActive('/team') ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
            <UserGroupIcon className="w-5 h-5" />
            <span>Team</span>
          </Link>
        </nav>
      </aside>
      
      <main className="flex-1 bg-gray-100 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;