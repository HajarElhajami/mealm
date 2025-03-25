
import BecomeTasker from '../Pages/BecomeTasker/Become'
import Services from './Services/Services'
import Login from './Login/Login';
import Partnership from './Partnership/Partnership'
import ClientDashboard from './profile'

function Pages() {
    return (
      <div>
        <BecomeTasker/>
        <Services/>
        <Login/>
        <Partnership/>
        <ClientDashboard/>
      </div>
    );
  }
  
  export default Pages;
  