import { AiOutlineRight } from 'react-icons/ai';
import { Carousel } from '../Carousel';

interface HomeSectionProps {
  title: string;
}

export function HomeSection({ title }: HomeSectionProps) {
  return (
    <div className='mb-10'>
      <div className='flex justify-between align-middle mb-3'>
        <h1 className='font-semibold text-slate-700'>{title}</h1>
        <div className='flex align-middle hover:underline'>
          <button className='text-slate-800 text-sm font-medium'>Ver todos</button>
          <span className='mt-1 ml-3 text-md'><AiOutlineRight /></span>
        </div>
      </div>
      <Carousel />
    </div>
  );
}