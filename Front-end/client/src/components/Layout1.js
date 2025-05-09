
import { Outlet } from 'react-router-dom';
import Header1 from './Header/Header1.js'; 
import Footer from './Footer/Footer.js'; 


function Layoute1() {
  return (
    <div>
        <Header1 />
        <Outlet />
        <Footer />
    </div>
  );
}

export default Layoute1;
