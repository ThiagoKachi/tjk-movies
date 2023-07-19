import { Home } from './Pages/Home';
import { Sidebar } from './components/Sidebar';

import './index.css';

function App() {
  return (
    <div className='bg-white h-screen'>
      <Sidebar />

      <div className="px-10 md:ml-64 pt-24 pb-2">
        <Home />
      </div>
    </div>
  );
}

export default App;
