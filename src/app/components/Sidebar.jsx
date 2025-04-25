'use client';

import React from 'react';
// creating the list of items for the sidebar
const navItems = [
  { name: 'Home' },
  { name: 'Stages & Checklist' },
  { name: 'Upload Docs' },
  { name: 'Preferred Vendors' },
  { name: 'Tech Stack' },
  { name: 'Targets' },
  { name: 'Zee Sales Targets' },
  { name: 'MAI Settings' },
  { name: 'Pending Questions', badge: '2' },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#11455D] flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-[#2A4B5F]">
        <h1 className="text-xl font-semibold text-white">Dashboard</h1>
      </div>

      {/* using map to itrate over the list of navitems and render it on the sidebar */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <React.Fragment key={item.name}>
            <div 
              className={`cursor-pointer px-4 py-3 rounded-md transition-colors
                {/* changing the color when hovering on the navlist */}
                ${item.name === '' 
                  ? 'text-[#3B82F6] bg-[#1e4258]' 
                  : 'text-[#94A3B8] hover:text-[#3B82F6] hover:bg-[#1e4258]'}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[15px]">{item.name}</span>
                {item.badge && (
                  <span className="bg-white text-[#1B3A4B] text-xs px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          </React.Fragment>
        ))}
      </nav>

      <div className="p-4">
        <div 
          className="cursor-pointer px-4 py-3 text-[#94A3B8] hover:shadow-md rounded-md transition-colors text-[15px]"
        >
          Logout
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 