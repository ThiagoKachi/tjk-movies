import { BsFilm, BsChevronDown, BsChevronUp } from 'react-icons/bs';

const genres = [
  'Ação',
  'Aventura',
  'Comédia',
  'Drama',
  'Fantasia',
  'Ficção científica',
  'Romance',
  'Suspense',
  'Terror',
];

interface DropdownSectionProps {
  toggleDropdown: () => void;
  isDropdownOpen: boolean;
}

export function DropdownSection({
  toggleDropdown,
  isDropdownOpen,
}: DropdownSectionProps) {
  return (
    <>
      <div
        className="p-2.5 mt-3 flex items-center rounded-sm px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        onClick={toggleDropdown}
      >
        <i className="text-[20px]">
          <BsFilm />
        </i>
        <div className="flex justify-between w-full items-center">
          <span className="text-[16px] ml-4 text-gray-200 font-bold">
            Gêneros
          </span>
          <span className="text-sm">
            <i className="text-xl">
              {isDropdownOpen ? <BsChevronUp /> : <BsChevronDown />}
            </i>
          </span>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="text-left text-md mt-2 pl-2 mx-auto text-gray-200 font-bold w-full cursor-pointer">
          {genres.map((genre) => (
            <div
              key={genre}
              className="px-2 py-2 flex align-middle hover:bg-blue-600 rounded-sm"
            >
              <div className="mr-3 border border-gray-600 w-6 text-center rounded-sm">
                {genre.slice(0, 1)}
              </div>
              <h1 className="hover:bg-blue-600 rounded-sm">{genre}</h1>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
