import Index from './components/header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home.tsx';
import Error from './pages/error.tsx';

const App = () => {
  return (
    <>
      <Index/>
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 w-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  )
}

export default App
