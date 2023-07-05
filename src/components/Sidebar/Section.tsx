import React from 'react';

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

export function SidebarSection({ title, children }: SidebarSectionProps) {
  return (
    <div className="p-2.5 mt-3 flex items-center rounded-sm px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
      <i className="text-2xl">
        {children}
      </i>
      <span className="text-[15px] ml-4 text-gray-200 font-bold">{title}</span>
    </div>
  );
}