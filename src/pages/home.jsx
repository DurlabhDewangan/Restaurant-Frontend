import AboutSection from '../components/home/AboutSection';
import SignatureDishes from '../components/home/ChefsSignature';
import Contact from '../components/home/Contact';
import Gallery from '../components/home/Gallery';
import MenuSection from '../components/home/Menu';
import HeroSection from '../components/home/Heros';

import Testimonials from '../components/home/Testimonial';

 import "../style/common.css"
 import '../style/index.css'



function Home() {
  return (
    <>
      
      <HeroSection/>
      <AboutSection/>
      <MenuSection/>
      <SignatureDishes/>
      <Gallery/>
      <Testimonials/>
      <Contact/>
      

      
    </>
  );
}

export default Home;