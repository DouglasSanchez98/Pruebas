import { Link } from "react-router-dom";
import img1 from "../assets/urubicha1.jpg";
import img2 from "../assets/urubicha2.jpg";
import img3 from "../assets/urubicha3.jpg";
import img4 from "../assets/urubicha4.jpg";
import img5 from "../assets/urubicha5.jpg";
import img6 from "../assets/urubicha6.jpg";

export default function Urubicha() {
  return (
    <div className="min-h-screen bg-green-two text-white flex flex-col">
      {/* Encabezado con botón de regreso */}
      <header className="bg-green-one p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">CDI Urubicha</h1>
        <Link
          to="/"
          className="bg-orange-one hover:bg-orange-600 text-white px-4 py-2 rounded"
        >
          ← Volver al inicio
        </Link>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Bienvenidos a la página de CDI Urubicha
        </h2>

        {/* Collage de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src={img1} alt="Foto 1" className="rounded-lg object-cover w-full h-48" />
          <img src={img2} alt="Foto 2" className="rounded-lg object-cover w-full h-48" />
          <img src={img3} alt="Foto 3" className="rounded-lg object-cover w-full h-48" />
          <img src={img4} alt="Foto 4" className="rounded-lg object-cover w-full h-48" />
          <img src={img5} alt="Foto 5" className="rounded-lg object-cover w-full h-48" />
          <img src={img6} alt="Foto 6" className="rounded-lg object-cover w-full h-48" />
        </div>
      </main>
    </div>
  );
}
