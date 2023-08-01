import { Link } from 'react-router-dom';
import starIcon from '../../assets/star.svg';
import { getYear } from '../../utils/getMovieYear';

interface CardProps {
  id: number;
  title: string;
  year: string;
  image: string;
  rating: number | string;
  size?: {
    width?: string;
    height: string;
  };
}

export function Card({ id, title, year, image, rating, size }: CardProps) {
  return (
    <Link to={`/details/${id}`}>
      <div className="relative cursor-pointer shadow hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-xl">
        <div className="absolute top-4 left-6 flex align-middle">
          <span className="mt-0.5">
            <img
              className="h-4 w-4"
              src={starIcon}
              alt="Estrela indicando a nota"
            />
          </span>
          <div className="ml-2">
            <span className="text-[15px] text-white">
              {rating ? rating : '-'}
            </span>
            <span className="text-[14px] ml-0.5 text-gray-400 font-medium">
            /10
            </span>
          </div>
        </div>
        <img
          src={`http://image.tmdb.org/t/p/w500/${image}`}
          alt={`Filme ${title}`}
          className={`object-cover rounded-xl h-[${
            size?.height ? size.height : '550px'
          }] w-[${size?.width ? size.width : '100%'}]`}
        />
        <div className="absolute bottom-[16px] left-6">
          <h1 className="font-medium text-white text-md">{title}</h1>
          <span className="text-gray-400 text-sm">{getYear(year)}</span>
        </div>
      </div>
    </Link>
  );
}
