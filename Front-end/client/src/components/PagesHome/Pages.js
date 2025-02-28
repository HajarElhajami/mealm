
import Cleaner from './Cleaner'
import Electrician from './Electrician'
import Gardener from './Gardener'
import Mover from './Mover'
import Painter from './Painter'
import PopularServices from './PopularServices'
import Plumber from './Plumber'

function PagesHome() {
    return (
      <div>
        <Cleaner/>
        <Electrician/>
        <Gardener/>
        <Mover/>
        <Painter/>
        <Plumber/> 
        <PopularServices/> 
      </div>
    );
  }
  
  export default PagesHome;
  