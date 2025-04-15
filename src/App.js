import About from "./components/About";
import AboutRamos from "./components/AboutRamos";
import Contact from "./components/Contact";
import ContactRamos from "./components/ContactRamos";
import EmpresasRamos from "./components/EmpresasRamos";
import Experience from "./components/Experience";
import Home from "./components/Home";
import HomeRamos from "./components/HomeRamos";
import NavBar from "./components/NavBar";
import NavBarRamos from "./components/NavBarRamos";
import Portfolio from "./components/Portfolio";
import ServiciosRamos from "./components/ServiciosRamos";
import SocialLinks from "./components/SocialLinks";
import SocialLinksRamos from "./components/SocialLinksRamos";
import TeamRamos from "./components/TeamRamos";
import Trabajos from "./components/Trabajos";
import VideoExampleComp from "./components/VideoExampleComp";

function App() {
  return (

    <div className=" bg-gradient-to-b from-black via-black to-gray-800 flex flex-col  ">
      {/*<NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      
      <SocialLinks/>*/}

      <NavBarRamos />
      <VideoExampleComp />
      <AboutRamos />
      <ServiciosRamos />
      <Trabajos/>
      <EmpresasRamos />
      <TeamRamos/>
      <ContactRamos />
      <SocialLinksRamos />
    </div>

  );
}

export default App;
