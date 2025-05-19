
import { Outlet } from 'react-router-dom';
// import Header from './Header/Header.js'; 
import Footer from './Footer/Footer.js'; 


function Layoute1() {
  return (
    <div>
        {/* <Header /> */}
        <Outlet />
        <Footer />
    </div>
  );
}

export default Layoute1;
