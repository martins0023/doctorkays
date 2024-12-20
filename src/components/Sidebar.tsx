import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-secondary text-white h-full fixed">
      <ul>
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Services</li>
        <li className="p-4">Contact</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
