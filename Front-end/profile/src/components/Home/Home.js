import Section from "./Section";
import  Services  from './Services';
import Business from './Business';
import Ratings from "./Ratings";
import Slider from "./Slider";

function section() {
    return (
      <div dir="rtl" className="max-w-7xl mx-auto bg-white overflow-hidden font-sans">
        <Section/> 
        <Services/>
        <Business/>
        <Ratings/>
        <Slider/>
      </div>
    );
  }
  
  export default section;
  