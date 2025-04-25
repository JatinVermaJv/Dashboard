import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`
        w-[386px]
        h-[284px]
        gap-6
        rounded-xl
        border
        border-[#EAECF0]
        bg-white
        p-6
        shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card; 