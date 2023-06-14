import { Route, Routes } from 'react-router-dom';
import Home from "../../pages/HomePage";
import Apartment from "../../pages/Apartment";
import About from '../../pages/AboutPage';
import Header from '../header';
import Footer from '../footer';

function Router() {
  return (
      <div className='page'>
          <Header />
      </div>

  );
};

export default Router