import { Sidebar } from './components/Sidebar';
import useWindowWidth from './hooks/useWindowWidth';

function App() {
  const windowWidth = useWindowWidth();
  
  return (
    <div className='flex flex-row bg-[#263556] h-screen'>
      <Sidebar />
      <div className={windowWidth <= 768 ? 'w-full' : 'ml-[300px]'}>
        <span className='text-white'>
          AQUI
        </span>
      </div>
    </div>
  );
}

export default App;
