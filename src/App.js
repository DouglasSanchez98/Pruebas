import AboutRamos from "./components/AboutRamos";
import ContactRamos from "./components/ContactRamos";
import EmpresasRamos from "./components/EmpresasRamos";
import NavBarRamos from "./components/NavBarRamos";
import ResponsiveCarousel from "./components/ResponsiveCarousel";
import ServiciosRamos from "./components/ServiciosRamos";
import SocialLinksRamos from "./components/SocialLinksRamos";
import Trabajos from "./components/Trabajos";
import VideoExampleComp from "./components/VideoExampleComp";



function App() {
  return (

    <div className=" bg-gradient-to-b from-black via-black to-gray-800 flex flex-col  ">
    
      
      <NavBarRamos />
      <VideoExampleComp />
      <ResponsiveCarousel/>
      <AboutRamos />
      <ServiciosRamos />
      <Trabajos/>
      <EmpresasRamos />
      <ContactRamos />
      <SocialLinksRamos />
    </div>

  );
}

export default App;
