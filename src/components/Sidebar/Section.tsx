import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { isActive } from '../../utils/isRouteActive';

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
  redirectTo: string;
}

export function SidebarSection({
  title,
  children,
  redirectTo,
}: SidebarSectionProps) {
  const { pathname } = useLocation();

  return (
    <Link to={redirectTo}>
      <div
        className={`${isActive(pathname, redirectTo) && 'bg-gray-100'} flex items-center p-2 text-gray-900 rounded-sm dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
      >
        {children}
        <span className="flex-1 ml-3 text-[16px] whitespace-nowrap">{title}</span>
      </div>
    </Link>
  );
}
