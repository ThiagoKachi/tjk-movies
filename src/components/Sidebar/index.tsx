import { useEffect, useState } from 'react';
import { SidebarSection } from './Section';
import { DropdownSection } from './DropdownSection';
import useWindowWidth from '../../hooks/useWindowWidth';
import {
  AiOutlineFire,
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineAppstore,
  AiOutlineHeart,
  AiOutlineStar,
  AiOutlineClose,
  AiOutlineAlignLeft,
} from 'react-icons/ai';
import { BsRocketTakeoff, BsBarChart } from 'react-icons/bs';

export function Sidebar() {
  const windowWidth = useWindowWidth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(windowWidth >= 768);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    setIsSidebarOpen(windowWidth >= 768);
  }, [windowWidth]);

  return (
    <>
      <span className="absolute text-white text-4xl top-5 left-4 cursor-pointer z-1">
        <button
          className="p-2 bg-gray-900 rounded-sm text-3xl"
          onClick={openSidebar}
        >
          <AiOutlineAlignLeft />
        </button>
      </span>
      <div
        className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] z-1 overflow-y-auto text-center bg-gray-900 transition-transform duration-200 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="text-2xl px-1 py-1 rounded-sm bg-blue-600">
              <AiOutlineFire />
            </i>
            <h1 className="font-bold text-gray-200 text-[18px] ml-3">
              TJKMovies
            </h1>
            <i
              className="cursor-pointer ml-28 md:hidden"
              onClick={closeSidebar}
            >
              <AiOutlineClose />
            </i>
          </div>
          <div className="my-4 bg-gray-600 h-[1px]"></div>
        </div>
        <div className="p-2.5 flex items-center rounded-sm px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <i className="text-2xl">
            <AiOutlineSearch />
          </i>
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <SidebarSection title="Home">
          <AiOutlineHome />
        </SidebarSection>

        <SidebarSection title="Explorar">
          <AiOutlineAppstore />
        </SidebarSection>

        <SidebarSection title="Favoritos">
          <AiOutlineHeart />
        </SidebarSection>

        <div className="my-4 bg-gray-600 h-[1px]" />

        <DropdownSection
          toggleDropdown={toggleDropdown}
          isDropdownOpen={isDropdownOpen}
        />

        <SidebarSection title="Populares">
          <AiOutlineStar />
        </SidebarSection>

        <SidebarSection title="Melhores filmes">
          <BsBarChart />
        </SidebarSection>

        <SidebarSection title="Próximos lançamentos">
          <BsRocketTakeoff />
        </SidebarSection>
      </div>
    </>
  );
}
