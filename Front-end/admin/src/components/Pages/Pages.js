
import Users from "./Users/Users";
import Settings from "./Settings/Settings";
import Reviews from './Reviews';
import Orders from "./Orders/Orders";
import Partners from  "./Partners/Partners"
import Messages from './Messages/Messages'
import Customer from './Customer/Customer'

function Pages() {
    return (
      <div>
        <Users/>
        <Settings/>
        <Reviews/>
        <Orders/>
        <Partners/>
        <Messages/>
        <Customer/>
      </div>
    );
  }
  
  export default Pages;
  