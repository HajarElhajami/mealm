
import BecomeTasker from '../Pages/BecomeTasker/Become'
import Services from './Services/Services'
import Login from './Login/Login';
import Partnership from './Partnership/Partnership'
import ClientDashboard from './profile'
import CityDetails from './CityDetails'

function Pages() {
    return (
      <div>
        <BecomeTasker/>
        <Services/>
        <Login/>
        <Partnership/>
        <ClientDashboard/>
        <CityDetails/>
      </div>
    );
  }
  
  export default Pages;
  