import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Project Alpha',
      budget: 20000,
      spent: 15000,
      team: 8,
      status: 'In Progress',
    },
    {
      id: 2,
      name: 'Project Beta',
      budget: 15000,
      spent: 5000,
      team: 5,
      status: 'Active',
    },
    // Add more projects as needed
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <span className="px-2 py-1 text-sm rounded-full bg-green-100 text-green-800">
                {project.status}
              </span>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Budget Usage</span>
                  <span>{Math.round((project.spent / project.budget) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${(project.spent / project.budget) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Budget</p>
                  <p className="font-semibold">${project.budget.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-600">Spent</p>
                  <p className="font-semibold">${project.spent.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-600">Team Size</p>
                  <p className="font-semibold">{project.team} members</p>
                </div>
              </div>

              <div className="pt-4 flex space-x-2">
                <Link
                  to={`/projects/${project.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  View Details
                </Link>
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Manage Team
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;