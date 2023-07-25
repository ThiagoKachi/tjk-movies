import { useLocation } from 'react-router-dom';
import { translateTitle } from '../../utils/translateTitle';
import { Card } from '../../components/Card';

export function Explore() {
  const { pathname } = useLocation();

  return (
    <div className='w-full mb-10'>
      <h1 className='text-slate-700 font-semibold text-xl border-b-[1px] py-3 mb-8'>
        {translateTitle(pathname)}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(20)].map((_, index) => (
          <div className="" key={index}>
            <Card />
          </div>
        ))}
      </div>

    </div>
  );
}