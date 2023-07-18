import { useState } from 'react';
import { SidebarSection } from './Section';
import { DropdownSection } from './DropdownSection';
import {
  AiOutlineFire,
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineAppstore,
  AiOutlineHeart,
  AiOutlineStar,
} from 'react-icons/ai';
import { BsRocketTakeoff, BsBarChart } from 'react-icons/bs';

export function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <div className="pl-2 mt-1 flex items-center">
                <i className="text-2xl px-1 py-1 rounded-sm bg-white">
                  <AiOutlineFire />
                </i>
                <h1 className="font-bold text-gray-700 text-[18px] ml-3">
                  TJKMovies
                </h1>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <div className="relative mb-2">
            <input
              placeholder="Faça sua busca"
              className="m-2 w-[95%] p-2 rounded-sm border-2 border-solid border-gray-300 placeholder-gray-400 focus:border-blue-400 focus:outline-none"
            />

            <span className="text-xl text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2">
              <AiOutlineSearch />
            </span>
          </div>

          <ul className="space-y-2 font-medium">
            <li>
              <SidebarSection title="Home">
                <div className="text-lg">
                  <AiOutlineHome />
                </div>
              </SidebarSection>
            </li>
            <li>
              <SidebarSection title="Explorar">
                <div className="text-lg">
                  <AiOutlineAppstore />
                </div>
              </SidebarSection>
            </li>
            <li>
              <SidebarSection title="Favoritos">
                <div className="text-lg">
                  <AiOutlineHeart />
                </div>
              </SidebarSection>
            </li>

            <li className="border-t-2 pt-2">
              <DropdownSection
                isDropdownOpen={isDropdownOpen}
                toggleDropdown={toggleDropdown}
              />
            </li>

            <li>
              <SidebarSection title="Populares">
                <div className="text-lg">
                  <AiOutlineStar />
                </div>
              </SidebarSection>
            </li>

            <li>
              <SidebarSection title="Melhores filmes">
                <div className="text-lg">
                  <BsBarChart />
                </div>
              </SidebarSection>
            </li>

            <li>
              <SidebarSection title="Próximos lançamentos">
                <div className="text-lg">
                  <BsRocketTakeoff />
                </div>
              </SidebarSection>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
