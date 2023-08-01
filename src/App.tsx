import { Sidebar } from './components/Sidebar';

import { RoutesComponent } from './routes/routes';

import './index.css';

function App() {
  return (
    <div className='bg-white h-screen'>
      <Sidebar />

      <div className="px-4 sm:px-8 md:ml-64 pt-24 pb-2">
        <RoutesComponent />
      </div>
    </div>
  );
}

export default App;
