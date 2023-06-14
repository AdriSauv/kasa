import { Route, Routes } from 'react-router-dom';
import Home from "../../pages/home";
import Housing from "../../pages/housing";
import About from '../../pages/about';
import Header from '../header';
import Footer from '../footer';
import Error from '../error';

function Router() {
  return (
      <div className='page'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/error' element={<Error />}></Route>
          </Routes>
          <Footer />
      </div>
  );
};

export default Router