import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css'
import Landing from './components/Landing';
import Error from './components/Error';
import Survey from './components/Survey';
import Answers from './components/Answers';
import EditAnswer from './components/EditAnswer';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      return;
    }
    const validRoutes = ["/survey", "/answers", "/edit"];
    const isValidRoute = validRoutes.some((route) =>
      location.pathname.startsWith(route)
    );
    if (!isValidRoute) {
      navigate("/error");
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/survey' element={<Survey />} />
        <Route path='/answers' element={<Answers />} />
        <Route path='/edit/:id' element={<EditAnswer />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
