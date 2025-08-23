import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import AboutRamos from "./components/AboutRamos";
import ContactRamos from "./components/ContactRamos";
import EmpresasRamos from "./components/EmpresasRamos";
import NavBarRamos from "./components/NavBarRamos";
import ResponsiveCarousel from "./components/ResponsiveCarousel";
import ServiciosRamos from "./components/ServiciosRamos";
import SocialLinksRamos from "./components/SocialLinksRamos";
import Trabajos from "./components/Trabajos";
import VideoExampleComp from "./components/VideoExampleComp";
import Urubicha from "./components/Urubicha";
import CdiPentaguazu from "./components/CdiPentaguazu";
import ProyectoBendicion from "./components/ProyectoBendicion";
import FamiliasSaludables from "./components/FamiliasSaludables";

// Página principal
function HomePage() {
  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-800 flex flex-col">
      <VideoExampleComp />
      <ResponsiveCarousel />
      <AboutRamos />
      <ServiciosRamos />
      <Trabajos />
      <EmpresasRamos />
      <ContactRamos />
      <SocialLinksRamos />
    </div>
  );
}

// Componente contenedor que decide si mostrar el navbar
function Layout() {
  const location = useLocation();
  // Lista de rutas donde NO queremos mostrar el NavBar
  const hideNavbarPaths = [
    "/urubicha",
    "/cdipentaguazu",
    "/proyectobendicion",
    "/familiassaludables",
  ];

  return (
    <>
      {/* Mostrar navbar solo si no estamos en /urubicha */}
       {!hideNavbarPaths.includes(location.pathname) && <NavBarRamos />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cdipentaguazu" element={<CdiPentaguazu />} />
        <Route path="/urubicha" element={<Urubicha />} />
        <Route path="/proyectobendicion" element={<ProyectoBendicion />} />
        <Route path="/familiassaludables" element={<FamiliasSaludables />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
