
import Plumber from '../PagesHome/Plumber';
import Section1 from './Section1'
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Sectoin4';


function Home() {
  return (
    <div>
      {/* <Plumber/> */}
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  );
}

export default Home;
