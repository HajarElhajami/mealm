
import { Outlet } from 'react-router-dom';
import Header from './Header/Header.js'; 
import Footer from './Footer/Footer.js'; 


function Layoute() {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  );
}

export default Layoute;
