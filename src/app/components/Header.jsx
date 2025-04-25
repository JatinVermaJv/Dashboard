'use client';

import React from 'react';
import Image from 'next/image';
import { Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-white px-8 flex items-center justify-end z-10">
      <div className="flex items-center space-x-6">
        {/* can use the svg if needed but for now it good */}
        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
          <Settings className="w-5 h-5" />
        </button>

        {/* setting up the profile section to show the image */}
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img
            src="/avatars/profile.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header; 