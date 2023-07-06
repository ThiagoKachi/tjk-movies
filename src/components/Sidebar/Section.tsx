import React from 'react';

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
  redirectTo?: string;
}

export function SidebarSection({
  title,
  children,
  redirectTo,
}: SidebarSectionProps) {
  return (
    <a
      href={redirectTo}
      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
      {children}
      <span className="flex-1 ml-3 text-[16px] whitespace-nowrap">{title}</span>
    </a>
  );
}
