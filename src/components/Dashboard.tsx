import React from 'react';
import { Link } from 'react-router-dom';

const StatCard = ({ title, value, color }: { title: string; value: string; color: string }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <p className={`text-2xl font-bold ${color}`}>{value}</p>
  </div>
);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Link
          to="/expenses/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          New Expense
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Budget" value="$50,000" color="text-green-600" />
        <StatCard title="Total Spent" value="$23,450" color="text-blue-600" />
        <StatCard title="Pending Expenses" value="5" color="text-yellow-600" />
        <StatCard title="Active Projects" value="8" color="text-purple-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Expenses</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Office Supplies</p>
                  <p className="text-sm text-gray-500">Project Alpha</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$299.99</p>
                  <p className="text-sm text-yellow-600">Pending</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Project Overview</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Project {i}</span>
                  <span className="text-sm text-gray-500">75% of budget used</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;